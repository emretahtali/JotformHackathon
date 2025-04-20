<template>
  <div class="page_container">
    <h1>Shop</h1>
    <div class="item-list">
      <ShopCard
        v-for="item in store.products"
        :key="item.id"
        :product-name="item.title"
        :product-price="item.price"
        :image-url="item.imageUrl"
        :quantity="item.quantity"
        @update:quantity="q => store.updateQuantity(item.id, q)"
      />
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'
import ShopCard from '../components/ShopCard.vue'

export default {
  components: { ShopCard },
  setup() {
    const store = useCartStore()

    // fetch & initialize on mount
    fetch(
      `https://api.jotform.com/form/${import.meta.env.VITE_JOTFORM_FORM_ID}/payment-info?apiKey=${import.meta.env.VITE_JOTFORM_API_KEY}`
    )
    .then(r => r.json())
    .then(({ content }) => {
      const list = content.products.map((p, i) => ({
        id: i,
        title: p.name,
        price: Number(p.price),
        imageUrl: JSON.parse(p.images)[0] || ''
      }))
      store.setProducts(list)
    })

    return { store }
  }
}
</script>

<style scoped>

.page_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.page-header {
  text-align: center;
  padding: 10px;
}

.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

</style>
