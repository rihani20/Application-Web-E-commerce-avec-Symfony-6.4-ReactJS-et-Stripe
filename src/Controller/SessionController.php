<?php

namespace App\Controller;

use App\Entity\Product;
use App\Service\SessionService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SessionController extends AbstractController
{
    public function __construct(private readonly SessionService $sessionService)
    {
    }

    #[Route('/session/shopping-cart/{id}', name: 'app_session_add_to_shopping_cart', methods: ['POST'])]
    public function addItemToShoppingCart(?Product $product): Response
    {
        if ($product) {
            $this->sessionService->addItemToShoppingCart($product);
        }

        return $this->json($this->sessionService->getShoppingCart());
    }

    #[Route('/session/shopping-cart', name: 'app_session_get_shopping_cart', methods: ['GET'])]
    public function getShoppingCart(): Response
    {
        return $this->json($this->sessionService->getShoppingCart());
    }
    
    #[Route('/session/shopping-cart/{id}', name: 'app_session_remove_from_shopping_cart', methods: ['DELETE'])]
    public function removeFromShoppingCart(?Product $product): Response
    {
        if ($product) {
            $this->sessionService->removeFromShoppingCart($product);
        }

        return $this->json($this->sessionService->getShoppingCart());
    }

    #[Route('/session/shopping-cart/{id}', name: 'app_session_get_shopping_cart_item', methods: ['GET'])]
    public function getShoppingCartItem(?Product $product): Response
    {
        if ($product) {
           // $item = $this->sessionService->getItemFromShoppingCart($product);
            return $this->json([]);
        }

        return $this->json(['error' => 'Product not found'], Response::HTTP_NOT_FOUND);
    }
}
