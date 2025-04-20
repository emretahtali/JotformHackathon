import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: []   // { id, title, price, imageUrl, quantity }
  }),
  actions: {
    setProducts(list) {
        if (this.products.length) return // prevent overwrite if already loaded
        this.products = list.map(p => ({ ...p, quantity: 0 }))
      },
    updateQuantity(id, qty) {
      const prod = this.products.find(x => x.id === id)
      if (prod) prod.quantity = qty
    }
  },
  getters: {
    cartItems: (state) => state.products.filter(p => p.quantity > 0),
    totalPrice: (state) =>
      state.products.reduce(
        (sum, p) => sum + p.quantity * p.price,
        0
      )
  },
  persist: true
})
