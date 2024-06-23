import React from 'react'
import useProducts from '../hooks/useProducts'
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { formatterPrice } from '../utils/utils';
import { productTypeProps } from '../utils/types';

const ProductGrid = ({addItemToShoppingCart, shoppingCart}) => {
  
  const products = useProducts();

  const handleproductLabel = (product: productTypeProps) => {
    const productInShoppingCart = shoppingCart?.items?.find(item => item.product.id === product.id)
    return productInShoppingCart ? `${productInShoppingCart?.quantity} X ` : 'Ajouter au panier' ;
  }

  return (
    <Grid container marginTop={5}>
      {products?.map((product) => (
        <Grid item key={product.id} xs={4}>
          <Box sx={{ width: 300, m: 2 }}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Stack direction="column" spacing={2}>
                <Box
                  component="img"
                  sx={{ width: '100%', height: 'auto' }}
                  src={`/images/products/${product.imageName}`}
                ></Box>
                <Typography variant='h6' gutterBottom>
                  {product.name}
                </Typography>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                  <Typography variant='h6' color="secondary">
                    {formatterPrice(product.price)}
                  </Typography>
                </Box>
                <Button 
                onClick={()=> addItemToShoppingCart(product)}
                variant="outlined" 
                color="primary" 
                endIcon={<ShoppingBasketIcon />
                }> 
                {handleproductLabel(product)}
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>

  )
}

export default ProductGrid