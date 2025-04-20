import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: []   // { id, title, price, imageUrl, quantity }
  }),
  actions: {
    setProducts(list) {
      if (this.products.length) return

      this.products = list.map(p => ({
        ...p,
        quantity: 0
      }))
    },
    updateQuantity(id, qty) {
      const index = this.products.findIndex(p => p.id === id)
      if (index === -1) return

      if (qty <= 0) {
        this.products.splice(index, 1)
      } else {
        this.products[index].quantity = qty
      }
    },
    resetCart() {
        this.products.forEach(p => (p.quantity = 0))
      }
  },
  getters: {
    cartItems: (state) => state.products.filter(p => p.quantity > 0),
    totalPrice: (state) =>
      state.products.reduce((sum, p) => sum + p.quantity * p.price, 0)
  },
  persist: true
})
