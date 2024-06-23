export interface productTypeProps {
    active: boolean;
    createdAt: Date,
    description: string;
    id: number;
    imageName: string;
    name: string;
    price: number;
    /*     stripeProductId: string;
        stripePriceId: string; */
}

export interface shoppingCartsProps {
    items: productTypeProps[];
}

export interface shoppingCartsItemProps {
    product: productTypeProps;
    quantity: number;
}