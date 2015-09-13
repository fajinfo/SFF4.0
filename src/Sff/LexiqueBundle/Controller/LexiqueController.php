<?php

namespace Sff\LexiqueBundle\Controller;

use Sff\LexiqueBundle\Entity\Definitions;
use Sff\LexiqueBundle\Form\DefinitionsType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class LexiqueController extends Controller
{
    public function listeAction()
    {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $repository = $this->getDoctrine()->getManager()->getRepository('SffLexiqueBundle:Definitions');
        $definitions = $repository->findAll();
        return $this->render('SffLexiqueBundle:Lexique:liste.html.twig', array('definitions' => $definitions));
    }

    public function nouveauAction()
    {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $definition = new Definitions();
        $definition->setUser($this->getUser());
        $definition->setValide(true);

        $form = $this->createForm(new DefinitionsType(), $definition);

        $request = $this->get('request');
        if ($request->getMethod() == 'POST') {
            $form->bind($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($definition);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_lexique_nouveau'));
            }
        }

        return $this->render('SffLexiqueBundle:Lexique:formulaire.html.twig', array('form' => $form->createView()));
    }

    public function modifierAction(Definitions $definition)
    {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $form = $this->createForm(new DefinitionsType(), $definition);

        $request = $this->get('request');
        if ($request->getMethod() == 'POST') {
            $form->bind($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($definition);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_lexique_liste'));
            }
        }

        return $this->render('SffLexiqueBundle:Lexique:formulaire.html.twig', array('form' => $form->createView(), 'definition' => $definition));
    }

    public function supprimerAction(Request $request, Definitions $definition)
    {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        if (!$request->isXmlHttpRequest()) {
            throw new \Exception('Cette resource n\'est pas accessible');
        }
        return $this->render('SffLexiqueBundle:Lexique:supprimer.html.twig', array('definition' => $definition));
    }

    public function supprimerOkAction(Definitions $definition) {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $em = $this->getDoctrine()->getManager();
        $em->remove($definition);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_lexique_liste'));
    }
    public function validerAction(Definitions $definition) {
        $this->denyAccessUnlessGranted('ROLE_MODERATEUR', null, 'Vous n\'avez pas les droits nécessaires');
        $em= $this->getDoctrine()->getManager();
        $definition->setValide(true);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_lexique_liste'));
    }
}

?>
