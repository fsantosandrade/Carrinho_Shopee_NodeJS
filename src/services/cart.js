async function getCart(cart) {
    console.log("\n")
    console.log("Your Shopee Cart: ")
    cart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name}(${item.qtdItem}) R$${item.price} | Subtotal: R$${item.subtotal}`)
    })
}

async function addItem(cart, item) {
    cart.push(item)
}

async function calcTotal(cart) {
    console.log("\n")
    const result = cart.reduce((total, item) => total + item.subtotal, 0)
    console.log(`Shopee Cart total is: R$ ${result.toFixed(2)}`)
}

async function deleteItem(cart, cartItem) {
    const index = cart.findIndex(item => item.name === cartItem.name)

    if(index !== -1) {
        cart.splice(index, 1)
        console.log(cartItem.name + " deletado com sucesso")
    }else {
        console.log("Item não encontrado!")
    }
}

async function removeItem(cart, itemCart) {
    const index = cart.findIndex(item => item.name === itemCart.name)

    if(index !== -1) {
        if(itemCart.qtdItem > 1) {
            itemCart.qtdItem --
        }else {
            deleteItem(cart, itemCart.name)
        }
    }else {
        console.log("Item não encontrado!")
        return
    }
}

export {
    addItem,
    calcTotal,
    deleteItem,
    removeItem,
    getCart
}