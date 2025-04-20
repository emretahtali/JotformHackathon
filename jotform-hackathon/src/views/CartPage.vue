<template>
  <div class="cart-page">
    <h1>Your Cart</h1>

    <div v-if="items.length" class="cart-list">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <div class="image-container">
          <img :src="item.imageUrl" alt="" class="cart-item-image" />
        </div>

        <div class="cart-item-details">
          <h3>{{ item.title }}</h3>
          <p class="price">${{ item.price.toFixed(2) }}</p>
          <div class="qty-row">
            <button @click="decrease(item.id)">−</button>
            <span>{{ item.quantity }}</span>
            <button @click="increase(item.id)">+</button>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <div class="cart-total">
          Total: <strong>${{ total.toFixed(2) }}</strong>
        </div>
        <button class="buy-button" @click="buy">Buy Now</button>
      </div>
    </div>

    <p v-else class="empty">Your cart is empty.</p>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'

export default {
  setup() {
    const store = useCartStore()

    const increase = (id) => {
      const product = store.products.find(p => p.id === id)
      if (product) store.updateQuantity(id, product.quantity + 1)
    }

    const decrease = (id) => {
      const product = store.products.find(p => p.id === id)
      if (product && product.quantity > 0) {
        const newQty = product.quantity - 1
        store.updateQuantity(id, newQty)
      }
    }

    const buy = () => {
  alert(`Thank you for your purchase! You spent $${store.totalPrice.toFixed(2)}.`)
  store.resetCart()
}


  return {
    items: computed(() => store.cartItems),
    total: computed(() => store.totalPrice),
    increase,
    decrease,
    buy
  }
  }
}
</script>

<style scoped>
.cart-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}
.cart-page h1 {
  text-align: center;
  margin-bottom: 24px;
}
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.cart-item {
  display: flex;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  min-height: 140px;
}
.image-container {
  width: 140px;
  height: 140px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cart-item-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
}
.cart-item-details {
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cart-item-details h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
  font-weight: 600;
}
.cart-item-details .price {
  margin: 0 0 4px;
  color: #444;
}
.cart-item-details .qty {
  margin: 0;
  color: #777;
}
.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  border-top: 1px solid #eee;
  padding-top: 16px;
}
.cart-total {
  font-size: 1.2rem;
}
.buy-button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.buy-button:hover {
  background-color: #222;
}
.empty {
  text-align: center;
  color: #666;
  margin-top: 40px;
}
.qty-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}

.qty-row button {
  width: 32px;
  height: 32px;
  font-size: 20px;
  border: none;
  background-color: #e0f7fa;
  color: #333;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.qty-row button:hover {
  background-color: #b2ebf2;
}

</style>
