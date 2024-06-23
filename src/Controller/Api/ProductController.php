<?php 

namespace App\Controller\Api;

use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ProductController extends AbstractController
{

public function __construct(private EntityManagerInterface $em, private ProductRepository $productRepository)
{
    
}

#[Route('/api/products', name:"api_products", methods: ['GET'])]
public function getProducts(NormalizerInterface $normalizerInterface) {
    $products = $this->productRepository->findAll();
    $serializedProducts = $normalizerInterface->normalize($products, 'json', [
        'groups' => 'product:read'
    ]);
    return $this->json($serializedProducts);

}

}