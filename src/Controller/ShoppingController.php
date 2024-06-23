<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ShoppingController extends AbstractController
{
    #[Route('/shopping-cart', name: 'app_shopping')]
    public function index(): Response
    {
        return $this->render('shopping/index.html.twig');
    }
}
