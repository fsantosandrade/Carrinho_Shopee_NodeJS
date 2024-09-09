import * as cartService from './services/cart.js'
import createItem from './services/item.js'

const myCart = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)
const item3 = await createItem("pista hotwheels", 99.99, 2)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)

await cartService.removeItem(myCart, item2)

await cartService.deleteItem(myCart, item3)

await cartService.getCart(myCart)

await cartService.calcTotal(myCart)