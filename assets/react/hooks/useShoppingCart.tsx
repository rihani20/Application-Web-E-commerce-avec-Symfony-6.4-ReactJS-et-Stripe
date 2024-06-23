import React, { useEffect, useState } from 'react'
import { productTypeProps, shoppingCartsProps } from '../utils/types'

export default function useShoppingCart()  {
    const [shoppingCart, setShoppingCart] = useState<shoppingCartsProps[]>()
    const [loading, setLoading] = useState(false)

    const addItemToShoppingCart = (product: productTypeProps) => {
        setLoading(true)
        fetch(`http://localhost:8000/session/shopping-cart/${product.id}`, {
            method: "POST"
        })
        .then(
            response => response.json()
        )
        .then(
            data => setShoppingCart(data)
        )
        .finally(
            () => {
                setLoading(false)
            }
        )
    }

    const removeFromShoppingCart = (product: productTypeProps) => {
        setLoading(true)
        fetch(`http://localhost:8000/session/shopping-cart/${product.id}`, {
            method: "DELETE"
        })
        .then(
            response => response.json()
        )
        .then(
            data => setShoppingCart(data)
        )
        .finally(
            () => {
                setLoading(false)
            }
        )
    }

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8000/session/shopping-cart')
            .then(
                response => response.json()
            )
            .then(
                data => setShoppingCart(data)
            )
            .finally(
                () => {
                    setLoading(false)
                }
            )

    }, [])

    return {addItemToShoppingCart, shoppingCart, loading, removeFromShoppingCart};

}

