import React from 'react'
import AppBar from '@mui/material/AppBar';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Badge, Grid, IconButton, Toolbar } from '@mui/material';
import { visit } from '../utils/utils';
import { shoppingCartsItemProps, shoppingCartsProps } from '../utils/types';

const Header = ({ shoppingCart }) => {
    const showHome = () => {
        visit('/')
    }

    const showShoppingCart = () => {
        visit('/shopping-cart')
    }

    const calculateTotalQuantity = () => {
        return shoppingCart?.items?.reduce((sum, item) => sum + item.quantity, 0);

    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
                    <Grid item>
                        <IconButton color="inherit" onClick={showHome}>
                            <StorefrontIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color="inherit" onClick={showShoppingCart}>
                            <Badge badgeContent={calculateTotalQuantity()} color="secondary" />
                            <ShoppingBasketIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header