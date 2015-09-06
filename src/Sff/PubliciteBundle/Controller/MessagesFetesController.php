<?php

namespace Sff\PubliciteBundle\Controller;

use Sff\PubliciteBundle\Entity\MessagesFetes;
use Sff\PubliciteBundle\Form\MessagesFetesType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class MessagesFetesController extends Controller
{
    public function listeAction()
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $repository = $this->getDoctrine()->getManager()->getRepository('SffPubliciteBundle:MessagesFetes');
        $messages = $repository->findAll();
        return $this->render('SffPubliciteBundle:MessagesFetes:liste.html.twig', array('messages' => $messages));
    }

    public function nouveauAction() {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $message = new MessagesFetes();
        $message->setDateDebut(new \DateTime());
        $message->setDateFin(new \DateTime());

        $form = $this->createForm(new MessagesFetesType(), $message);

        $request = $this->get('request');
        if($request->getMethod() == 'POST') {
            $form->bind($request);

            if($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($message);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_messagesFetes_nouveau'));
            }
        }

        return $this->render('SffPubliciteBundle:MessagesFetes:formulaire.html.twig', array( 'form' => $form->createView()));
    }

    public function modifierAction(MessagesFetes $message)
    {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $form = $this->createForm(new MessagesFetesType(), $message);

        $request = $this->get('request');
        if($request->getMethod() == 'POST') {
            $form->bind($request);

            if($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($message);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_messagesFetes_liste'));
            }
        }

        return $this->render('SffPubliciteBundle:MessagesFetes:formulaire.html.twig', array( 'form' => $form->createView(), 'message' => $message));
    }

    public function supprimerAction(Request $request, MessagesFetes $message)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        if(!$request->isXmlHttpRequest()) {
            throw new \Exception('Cette resource n\'est pas accessible');
        }
        return $this->render('SffPubliciteBundle:MessagesFetes:supprimer.html.twig', array('message' => $message));
    }

    public function supprimerOkAction(MessagesFetes $message) {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $em= $this->getDoctrine()->getManager();
        $em->remove($message);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_messagesFetes_liste'));
    }
}
?>
