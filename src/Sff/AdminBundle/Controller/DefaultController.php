<?php

namespace Sff\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $this->denyAccessUnlessGranted('ROLE_REDACTEUR', null, 'Pour accéder à l\'administration il faut être rédacteur');
        return $this->render('SffAdminBundle:Default:index.html.twig', array());
    }
}
