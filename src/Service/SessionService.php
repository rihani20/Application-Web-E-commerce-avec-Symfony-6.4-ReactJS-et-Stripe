<?php

namespace App\Service;

use App\Entity\Product;
use App\Model\ShoppingCart;
use App\Model\ShoppingCartItem;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\HttpFoundation\RequestStack;

class SessionService 
{

  public const SHOPPING_CART = 'shoppingCart';

  public function __construct(private RequestStack $requestStack)
  {
    
  }
    public function getShoppingCart(): ShoppingCart
    {
        return $this->getSession()->get(self::SHOPPING_CART, new ShoppingCart());
    }

    public function addItemToShoppingCart(Product $product) {
        $shoppingCart = $this->getShoppingCart();

        $existingShoppingCartItem = $this->getExistingShoppingCartItem($product);

        if($existingShoppingCartItem) {
            $existingShoppingCartItem->quantity++;
        }else{
            $shoppingCart->items->add(new ShoppingCartItem($product, 1));
        }
        
        $this->getSession()->set(self::SHOPPING_CART, $shoppingCart);
    }

    public function removeFromShoppingCart(Product $product) {
        $shoppingCart = $this->getShoppingCart();

        $existingShoppingCartItem = $this->getExistingShoppingCartItem($product);
        if (!$existingShoppingCartItem) {
            return ;
        }

        $shoppingCart->items->removeElement($existingShoppingCartItem);

        $reindexedItem = array_values($shoppingCart->items->toArray());
        $shoppingCart->items = new ArrayCollection($reindexedItem);

        $this->getSession()->set(self::SHOPPING_CART, $shoppingCart);
    }

    private function getExistingShoppingCartItem(Product $product) {
        $existingShoppingCartItem = $this
        ->getShoppingCart()
        ->items
        ->filter(fn (ShoppingCartItem $item) => $item->product->getId() == $product->getId())
        ->first();

        if (!$existingShoppingCartItem) {
            return null;
        }
        return $existingShoppingCartItem;
    }

    private function getSession() {
        return $this->requestStack->getSession();
    }

}