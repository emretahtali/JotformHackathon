<template>
  <div class="page_container">
    <div class="page-header">
      <h1>Shop</h1>
    </div>

    <div class="item-list">
      <ShopCard
        v-for="item in shopCardData"
        :key="item.id"
        :product-name="item.title"
        :product-price="item.price"
        :image-url="item.imageUrl"
        v-model:quantity="item.quantity"
      />
    </div>
  </div>
</template>

<script>
import ShopCard from '../components/ShopCard.vue';

export default {
  name: 'ShoppingPage',
  components: { ShopCard },
  data() {
    return {
      shopCardData: []
    };
  },
  async mounted() {
    const apiKey = import.meta.env.VITE_JOTFORM_API_KEY;
    const formID = import.meta.env.VITE_JOTFORM_FORM_ID;
    const endpoint = `https://api.jotform.com/form/${formID}/payment-info?apiKey=${apiKey}`;
    
    try {
      const res = await fetch(endpoint);
      const { content } = await res.json();
      this.shopCardData = content.products.map((product, idx) => {
        let imgs = [];
        try { imgs = JSON.parse(product.images); } catch{}
        return {
          id: idx,
          title: product.name,
          price: Number(product.price),
          imageUrl: imgs[0] || '',
          quantity: 0
        };
      });

      console.log(content.products);
    }
    catch (e) {
      console.error(e);
    }
  }
};
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
