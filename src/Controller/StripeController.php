<?php

namespace App\Controller;

use App\Service\SessionService;
use App\Service\StripeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Stripe\Exception\ApiErrorException;
use Symfony\Component\HttpFoundation\Request;

class StripeController extends AbstractController
{
    public function __construct(private readonly StripeService $stripeService, private SessionService $sessionService)
    {
        
    }

     /**
     * @throws ApiErrorException
     */
    #[Route('/stripe/checkout-sessions', name: 'app_stripe_index', methods: ['GET'])]
    public function createCheckoutSession(): Response
    {
        return $this->json([
            'url' => $this->stripeService->createCheckoutSession($this->sessionService->getShoppingCart())->url
        ]);
    }

        /**
     * @throws ApiErrorException
     */
    #[Route('/stripe/success', name: 'app_stripe_success', methods: ['GET'])]
    public function success(Request $request): Response
    {
        $sessionId = $request->query->get('session_id');

        $session = $this->stripeService->getCheckoutSession($sessionId);

        return $this->render('stripe/success.html.twig', [
            'amountTotal' => $session->amount_total,
        ]);
    }
}
