import React from 'react'
import Header from './Header'
import useShoppingCart from '../hooks/useShoppingCart'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import ShoppingCartTable from './ShoppingCartTable'
import LockIcon from '@mui/icons-material/Lock';
import { visit } from '../utils/utils'

const ShoppingCart = () => {
  const { shoppingCart, removeFromShoppingCart, loading } = useShoppingCart()

  const proceedToCheckout = () => {
    fetch('/stripe/checkout-sessions')
      .then(
        response => response.json()
      ).then(
        data => visit(data['url'])
      )
  }

  if (loading) {
    return (
      <Container>
        <Header shoppingCart={shoppingCart} />
        <Box marginTop={5}>
          <Typography variant="h5">Chargement...</Typography>
        </Box>
      </Container>
    )
  }

  return (

    <Container>
      <Header shoppingCart={shoppingCart} />
      <Box marginTop={5}>
        <Box marginBottom={3}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5">Votre panier</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LockIcon />}
                onClick={proceedToCheckout}>
                &nbsp;Procéder au paiement
              </Button>
            </Grid>
          </Grid>
        </Box>
        <ShoppingCartTable
          removeFromShoppingCart={removeFromShoppingCart}
          shoppingCart={shoppingCart}
        />
      </Box>
    </Container>
  )
}

export default ShoppingCart