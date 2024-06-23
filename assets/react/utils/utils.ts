const NUMBER_FORMATTER = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: "EUR" })

export const formatterPrice = (price: number) => {
    return NUMBER_FORMATTER.format(price);
}

export const visit = (url: string) => {
    window.location.href = url ;
}