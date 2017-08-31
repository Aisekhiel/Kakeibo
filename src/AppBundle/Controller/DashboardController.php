<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DashboardController extends Controller
{
	private $js_required = [
		'fixybar.jquery.js',
		'dashboard.js'
	];

    /**
     * @Route("/dashboard/", name="dashboard")
     */
    public function indexAction(Request $request)
    {

        return $this->render('dashboard/dashboard.html.twig', [
			'meta_title' 	=> 'Dashboard',
			'js_list' 		=> $this -> js_required,
			'is_dashboard' 	=> true
		]);
    }

    /**
     * @Route("/dashboard/settings/", name="dashboard-settings")
     */
    public function settingsAction(Request $request)
    {
        return $this->render('dashboard/settings.html.twig', [
			'meta_title' 	=> 'Dashboard / Settings',
			'js_list' 		=> $this -> js_required,
			'is_dashboard' 	=> true
		]);
    }
}
