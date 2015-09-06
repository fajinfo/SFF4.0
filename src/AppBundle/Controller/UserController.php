<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use AppBundle\Form\ChangePasswordType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Form\UserType;

class UserController extends Controller {
    public function listeAction()
    {
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $repository = $this->getDoctrine()
            ->getManager()
            ->getRepository('AppBundle:User');

        $users = $repository->findAll();
        return $this->render('AppBundle:user:liste.html.twig', array('users' => $users));
    }
    public function supprimerAction(Request $request, User $user)
    {
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        if(!$request->isXmlHttpRequest()) {
            throw new \Exception('Cette resource n\'est pas accessible');
        }
        return $this->render('AppBundle:user:supprimer.html.twig', array('user' => $user));
    }
    public function supprimerOkAction(User $user) {
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $em= $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_user_liste'));
    }
    public function nouveauAction()
    {
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $user = new User;
        $form = $this->createForm(new UserType, $user, array('attr'=> array('class' => 'create')));

        $request = $this->get('request');
        if($request->getMethod() == 'POST') {
            $form->bind($request);

            if($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_user_liste'));
            }
        }

        return $this->render('AppBundle:user:formulaire.html.twig', array( 'form' => $form->createView()));
    }
    public function modifierAction(User $user)
    {
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $form = $this->createForm(new UserType, $user, array('attr' => array('class' => 'false')));

        $request = $this->get('request');
        if($request->getMethod() == 'POST') {
            $form->bind($request);

            if($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $em->flush();

                return $this->redirect($this->generateUrl('admin_user_liste'));
            }
        }

        return $this->render('AppBundle:user:formulaire.html.twig', array( 'form' => $form->createView(), 'user' => $user));
    }
    public function changePasswordAction(User $user)
    {
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN', null, 'Vous n\'avez pas les droits nécessaires');
        $currentuser = $this->get('security.context')->getToken()->getUser();

        if(!$this->get('security.context')->isGranted('ROLE_SUPER_ADMIN')) {
            if ($currentuser != $user) {
                throw new \Exception('Accès Interdit');
            }
        }

        $form = $this->createForm(new ChangePasswordType(), $user);

        $request = $this->get('request');
        if($request->getMethod() == 'POST') {
            $form->bind($request);

            if($form->isValid()) {
                $em= $this->getDoctrine()->getManager();
                $factory = $this->get('security.encoder_factory');
                $encoder = $factory->getEncoder($user);
                $user->setPassword($encoder->encodePassword($user->getPlainPassword(), $user->getSalt()));
                $em->flush();

                return new Response('<script type="text/javascript">$.fancybox.close()</script>', 200, array('content-type' => 'text/html'));
            }
        }

        return $this->render('AppBundle:user:changePassword.html.twig', array( 'form' => $form->createView(), 'user' => $user));
    }
}
