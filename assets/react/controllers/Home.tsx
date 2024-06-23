import React from 'react'
import Header from './Header'
import ProductGrid from './ProductGrid'
import useShoppingCart from '../hooks/useShoppingCart'

const Home = () => {
    const {addItemToShoppingCart, shoppingCart} = useShoppingCart()

    return (
        <>
        <Header shoppingCart={shoppingCart} />
        <ProductGrid addItemToShoppingCart={addItemToShoppingCart} shoppingCart={shoppingCart} />
        </>
    )
}

export default Home