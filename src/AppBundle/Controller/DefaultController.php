<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
  /**
   * @Route("/", name="homepage")
   */
  public function indexAction(Request $request)
  {
		// redirect to the "dashboard" route, homepage isn't ready yet
  	return $this->redirectToRoute('dashboard');

    // return $this->render('homepage/homepage.html.twig', []);
  }
}
