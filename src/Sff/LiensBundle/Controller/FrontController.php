<?php

namespace Sff\LiensBundle\Controller;

use Sff\LiensBundle\Entity\AnnonceCorrompu;
use Sff\LiensBundle\Entity\Liens;
use Sff\LiensBundle\Form\LiensType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class FrontController extends Controller
{
    public function afficherAction() {
        $repo = $this->getDoctrine()
            ->getManager()->getRepository('SffLiensBundle:Categories');
        $query = $repo->createQueryBuilder('c')
            ->where('c.lvl = 0')
            ->orderBy('c.root', 'ASC')
            ->addOrderBy('c.lft', 'ASC')
            ->getQuery();
        $categories = $query->getResult();
        return $this->render('SffLiensBundle:Front:afficher.html.twig', array('categories' => $categories));
    }

    public function suivreAction(Liens $lien) {
        $em = $this->getDoctrine()->getManager();
        $lien->visite();
        $em->flush();
        return $this->redirect($lien->getUrl());
    }

    public function proposerAction() {
        $this->denyAccessUnlessGranted('ROLE_USER', null, 'Il faut être connecté pour accéder à cette page !');
        $lien = new Liens();
        $lien->setUser($this->getUser());
        $lien->setValide(false);
        $lien->setCorrompu(false);
        $lien->setVisites(0);

        $form = $this->createForm(new LiensType(), $lien);

        $request = $this->get('request');
        if($request->getMethod() == 'POST') {
            $form->bind($request);

            if($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($lien);
                $em->flush();

                $message = \Swift_Message::newInstance()
                    ->setSubject('Un utilisateur vient de proposer un lien !')
                    ->setFrom('no-reply@swiss-firefighters.ch')
                    ->setTo($this->container->getParameter('adminMail'))
                    ->setBody($this->renderView('SffLiensBundle:Front:proposer.mail.html.twig', array('lien' => $lien)), 'text/html')
                ;
                $this->get('mailer')->send($message);

                return $this->render('::Success.html.twig', array('route' => 'liens','message' => 'Votre lien a bien été proposé, il doit encore être validé par nos modérateurs avant d\'être affiché.<br/>Merci de votre collaboration'));
            }
        }

        return $this->render('SffLiensBundle:Front:formulaire.html.twig', array( 'form' => $form->createView()));
    }

    public function annonceCorrompuAction(Liens $lien) {
        $this->denyAccessUnlessGranted('ROLE_USER', null, 'Il faut être connecté pour accéder à cette page !');
        $annonceCorrompu = new AnnonceCorrompu();
        $formBuilder = $this->createFormBuilder($annonceCorrompu);
        $formBuilder->add('remarque', 'textarea', array('required' => true));
        $form = $formBuilder->getForm();

        $request = $this->get('request');
        if($request->getMethod() == 'POST') {
            $form->bind($request);

            if($form->isValid()) {
                $message = \Swift_Message::newInstance()
                    ->setSubject('Un lien corrompu a été signalé !')
                    ->setFrom('no-reply@swiss-firefighters.ch')
                    ->setTo($this->container->getParameter('adminMail'))
                    ->setBody($this->renderView('SffLiensBundle:Front:corrompu.mail.html.twig', array('lien' => $lien, 'annonce' => $annonceCorrompu)), 'text/html')
                ;
                $this->get('mailer')->send($message);

                return $this->render('::Success.html.twig', array('route' => 'liens','message' => 'Nos modérateurs ont été avisés, le problème sera corrigé dans les plus brefs délais.<br/>Merci de votre collaboration'));
            }
        }

        return $this->render('SffLiensBundle:Front:annonceCorrompu.html.twig', array('lien' => $lien, 'form' => $form->createView()));
    }
}