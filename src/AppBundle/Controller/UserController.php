<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use AppBundle\Form\changePasswordType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Form\UserType;
use JMS\SecurityExtraBundle\Annotation\Secure;

class UserController extends Controller {
    /**
     * @Secure(roles="ROLE_SUPER_ADMIN")
     */
    public function ListeAction()
    {
        $repository = $this->getDoctrine()
            ->getManager()
            ->getRepository('AppBundle:User');

        $users = $repository->findAll();
        return $this->render('AppBundle:user:liste.html.twig', array('users' => $users));
    }

    /**
     * @Secure(roles="ROLE_SUPER_ADMIN")
     */
    public function SupprimerAction(Request $request, User $user)
    {
        if(!$request->isXmlHttpRequest()) {
            throw new \Exception('Cette resource n\'est pas accessible');
        }
        return $this->render('AppBundle:user:supprimer.html.twig', array('user' => $user));
    }
    /**
     * @Secure(roles="ROLE_SUPER_ADMIN")
     */
    public function SupprimerOkAction(User $user) {
        $em= $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_user_liste'));
    }
    /**
     * @Secure(roles="ROLE_SUPER_ADMIN")
     */
    public function nouveauAction()
    {
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
    /**
     * @Secure(roles="ROLE_SUPER_ADMIN")
     */
    public function modifierAction(User $user)
    {
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
    /**
     * @Secure(roles="ROLE_REDACTEUR")
     */
    public function changePasswordAction(User $user)
    {
        $currentuser = $this->get('security.context')->getToken()->getUser();

        if(!$this->get('security.context')->isGranted('ROLE_SUPER_ADMIN')) {
            if ($currentuser != $user) {
                throw new \Exception('Accès Interdit');
            }
        }

        $form = $this->createForm(new changePasswordType(), $user);

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