<?php

namespace Sff\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use JMS\SecurityExtraBundle\Annotation\Secure;

class DefaultController extends Controller
{
    /**
     * @Secure(roles="ROLE_REDACTEUR")
     */
    public function indexAction()
    {
        return $this->render('SffAdminBundle:Default:index.html.twig', array());
    }
}
