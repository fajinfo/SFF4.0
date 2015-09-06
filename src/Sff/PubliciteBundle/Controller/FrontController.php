<?php

namespace Sff\PubliciteBundle\Controller;

use Sff\PubliciteBundle\Entity\Publicite;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class FrontController extends Controller
{
    public function blocPubliciteAction() {
        $repo = $this->getDoctrine()->getManager()->getRepository('SffPubliciteBundle:Publicite');
        $publicite = $repo->getPublicite();
        return $this->render('SffPubliciteBundle:Front:blocPublicite.html.twig', array('publicite' => $publicite));
    }
    public function suivrePubliciteAction(Publicite $publicite){
        $publicite->clic();
        $this->getDoctrine()->getManager()->flush();
        return $this->redirect($publicite->getUrl());
    }
    public function blocMessagesFetesAction() {
        $repo = $this->getDoctrine()->getManager()->getRepository('SffPubliciteBundle:MessagesFetes');
        $message = $repo->getCurrentMessage();
        return $this->render('SffPubliciteBundle:Front:message.html.twig', array('message' => $message));
    }
}
