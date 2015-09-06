<?php

namespace Sff\LiensBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sff\LiensBundle\Entity\Liens;
use Sff\LiensBundle\Form\LiensType;
use Symfony\Component\HttpFoundation\Request;

class LiensController extends Controller
{
    public function listeAction($id)
    {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
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
    public function validerAction(Liens $lien) {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $em= $this->getDoctrine()->getManager();
        $lien->setValide(true);
        $lien->setCorrompu(false);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_liens_liste', array('id' => $lien->getCategorie()->getId())));
    }

    public function nouveauAction() {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
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

    public function modifierAction(Liens $lien)
    {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
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

    public function supprimerAction(Request $request, Liens $lien)
    {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        if(!$request->isXmlHttpRequest()) {
            throw new \Exception('Cette resource n\'est pas accessible');
        }
        return $this->render('SffLiensBundle:Liens:supprimer.html.twig', array('lien' => $lien));
    }

    public function supprimerOkAction(Liens $lien) {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $em= $this->getDoctrine()->getManager();
        $em->remove($lien);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_liens_liste'));
    }
}