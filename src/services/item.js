async function createItem(name, price, qtdItem) {
    return {
        name,
        price, 
        qtdItem,
        get subtotal() {
            return this.price * this.qtdItem
        }
    }
}

export default createItem