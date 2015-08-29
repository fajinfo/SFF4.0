<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use FOS\UserBundle\Model\UserInterface;

class DefaultController extends Controller
{
    public function ChangePasswordAction(Request $request)
    {
        if(!$request->isXmlHttpRequest()) {
            throw new \Exception('Cette resource n\'est pas accessible');
        }


    }
}
