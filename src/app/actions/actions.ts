import { Product } from "../../../types/products"


export const addToCard = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndus = cart.findIndex(item => item._id === product._id)

    if (existingProductIndus !== -1) {  
        cart[existingProductIndus].discountPercent += 1
    } else {
        cart.push({ ...product, discountPercent: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId: string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    cart = cart.filter(item => item._id !== productId)

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCart = (productId: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const productIndex = cart.findIndex(item => item._id === productId)

    if (productIndex !== -1) {  
        cart[productIndex].discountPercent = quantity
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCartItem = (): Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}
