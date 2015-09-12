<?php

namespace Sff\PubliciteBundle\Controller;

use Sff\PubliciteBundle\Entity\Publicite;
use Sff\PubliciteBundle\Form\PubliciteType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class PubliciteController extends Controller
{
    public function listeAction()
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $repository = $this->getDoctrine()->getManager()->getRepository('SffPubliciteBundle:Publicite');
        $publicites = $repository->findAll();
        return $this->render('SffPubliciteBundle:Publicite:liste.html.twig', array('publicites' => $publicites));
    }

    public function nouveauAction()
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $publicite = new Publicite();
        $publicite->setNbAffichage(0);
        $publicite->setNbClic(0);
        $publicite->setDateFin(new \DateTime());
        $publicite->setDateDebut(new \DateTime());
        $publicite->setLastReset(new \DateTime());

        $form = $this->createForm(new PubliciteType(), $publicite);

        $request = $this->get('request');
        if ($request->getMethod() == 'POST') {
            $form->bind($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($publicite);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_publicite_nouveau'));
            }
        }

        return $this->render('SffPubliciteBundle:Publicite:formulaire.html.twig', array('form' => $form->createView()));
    }

    public function modifierAction(Publicite $publicite)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $form = $this->createForm(new PubliciteType(), $publicite);

        $request = $this->get('request');
        if ($request->getMethod() == 'POST') {
            $form->bind($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($publicite);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_publicite_liste'));
            }
        }

        return $this->render('SffPubliciteBundle:Publicite:formulaire.html.twig', array('form' => $form->createView(), 'publicite' => $publicite));
    }

    public function supprimerAction(Request $request, Publicite $publicite)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        if (!$request->isXmlHttpRequest()) {
            throw new \Exception('Cette resource n\'est pas accessible');
        }
        return $this->render('SffPubliciteBundle:Publicite:supprimer.html.twig', array('publicite' => $publicite));
    }

    public function supprimerOkAction(Publicite $publicite)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $em = $this->getDoctrine()->getManager();
        $em->remove($publicite);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_publicite_liste'));
    }

    public function resetCompteursAction(Publicite $publicite) {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $em = $this->getDoctrine()->getManager();
        $publicite->resetCompteurs();
        $em->flush();
        return $this->redirect($this->generateUrl('admin_publicite_modifier', array('id' => $publicite->getId())));
    }
}

?>
