<?php

namespace Sff\LiensBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use JMS\SecurityExtraBundle\Annotation\Secure;
use Sff\LiensBundle\Entity\Liens;
use Sff\LiensBundle\Form\LiensType;
use Symfony\Component\HttpFoundation\Request;

class LiensController extends Controller
{
    /**
     * @Secure(roles="ROLE_MODERATEUR")
     */
    public function listeAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('SffLiensBundle:Liens');
        if($id == null) {
            $liens = $repository->findAll();
        } else {
            $repCategories = $em->getRepository('SffLiensBundle:Categories');
            $categorie = $repCategories->findOneById($id);
            $liens = $repository->findByCategorie($categorie);
        }
        return $this->render('SffLiensBundle:Liens:liste.html.twig', array('liens' => $liens));
    }
    /**
     * @Secure(roles="ROLE_MODERATEUR")
     */
    public function validerAction(Liens $lien) {
        $em= $this->getDoctrine()->getManager();
        $lien->setValide(true);
        $lien->setCorrompu(false);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_liens_liste', array('id' => $lien->getCategorie()->getId())));
    }

    /*
     * @Secure(roles="ROLE_MODERATEUR")
     */
    public function nouveauAction() {
        $lien = new Liens();
        $lien->setUser($this->getUser());
        $lien->setValide(true);
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

                return $this->redirect($this->generateUrl('admin_liens_nouveau'));
            }
        }

        return $this->render('SffLiensBundle:Liens:formulaire.html.twig', array( 'form' => $form->createView()));
    }

    /**
     * @Secure(roles="ROLE_MODERATEUR")
     */
    public function modifierAction(Liens $lien)
    {
        $form = $this->createForm(new LiensType(), $lien);

        $request = $this->get('request');
        if($request->getMethod() == 'POST') {
            $form->bind($request);

            if($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($lien);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_liens_liste'));
            }
        }

        return $this->render('SffLiensBundle:Liens:formulaire.html.twig', array( 'form' => $form->createView(), 'lien' => $lien));
    }

    /**
     * @Secure(roles="ROLE_MODERATEUR")
     */
    public function supprimerAction(Request $request, Liens $lien)
    {
        if(!$request->isXmlHttpRequest()) {
            throw new \Exception('Cette resource n\'est pas accessible');
        }
        return $this->render('SffLiensBundle:Liens:supprimer.html.twig', array('lien' => $lien));
    }
    /**
     * @Secure(roles="ROLE_MODERATEUR")
     */
    public function supprimerOkAction(Liens $lien) {
        $em= $this->getDoctrine()->getManager();
        $em->remove($lien);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_liens_liste'));
    }
}