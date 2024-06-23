import React, { useEffect, useState } from 'react'
import { productTypeProps } from '../utils/types';

export default  function useProducts() {
    const [products, setProducts] = useState<productTypeProps[]>();
     useEffect(() => {
        fetch('/api/products')
            .then(
                response => response.json()
            ).
            then(json => setProducts(json))
    }, [])

    return products;
}

