<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class Controller extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('/index.html.twig', [
            'controller_name' => 'Controller',
        ]);
    }

    #[Route('/horaire', name: 'app_schedule')]
    public function schedule(): Response
    {
        return $this->render('/schedule.html.twig', [
        ]);
    }

    #[Route('/galerie', name: 'app_gallery')]
    public function gallery(): Response
    {
        return $this->render('/gallery.html.twig', [
        ]);
    }

    #[Route('/professeurs', name: 'app_teachers')]
    public function teachers(): Response
    {
        return $this->render('/teachers.html.twig', [
        ]);
    }

    #[Route('/evenements', name: 'app_events')]
    public function events(): Response
    {
        return $this->render('/events.html.twig', [
        ]);
    }
}
