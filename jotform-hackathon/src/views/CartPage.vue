<template>
  <div class="cart-page">
    <h1>Your Cart</h1>

    <div v-if="items.length" class="cart-list">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <img :src="item.imageUrl" alt="" class="cart-item-image" />

        <div class="cart-item-details">
          <h3>{{ item.title }}</h3>
          <p class="price">${{ item.price.toFixed(2) }}</p>
          <p class="qty">Qty: {{ item.quantity }}</p>
        </div>
      </div>

      <div class="cart-total">
        Total: <strong>${{ total.toFixed(2) }}</strong>
      </div>
    </div>

    <p v-else class="empty">Your cart is empty.</p>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  setup() {
    const store = useCartStore()
    return {
      items: store.cartItems,
      total: store.totalPrice
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
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
}
.cart-item-image {
  width: 120px;
  object-fit: cover;
}
.cart-item-details {
  flex: 1;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cart-item-details h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}
.cart-item-details .price {
  margin: 0 0 4px;
  color: #555;
}
.cart-item-details .qty {
  margin: 0;
  color: #777;
}
.cart-total {
  text-align: right;
  font-size: 1.2rem;
  margin-top: 24px;
  border-top: 1px solid #eee;
  padding-top: 12px;
}
.empty {
  text-align: center;
  color: #666;
  margin-top: 40px;
}
</style>
