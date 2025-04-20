<template>
  <div class="page_container">
    <div class="page-header">
      <h1>Shop</h1>
    </div>
    <div class="item-list">
      <ShopCard
        v-for="(item, index) in shopCardData"
        :key="index"
        :productName="item.title"
        :imageUrl="item.imageUrl"
      />
    </div>
  </div>
</template>

<script>
import ShopCard from '../components/ShopCard.vue';

export default {
  name: 'ShoppingPage',
  components: {
    ShopCard
  },
  data() {
    return {
      shopCardData: null,
    };
  },
  mounted() {
    this.fetchItemData();
  },
  methods: {
    async fetchItemData() {
      const apiKey = import.meta.env.VITE_JOTFORM_API_KEY;
      const formID = import.meta.env.VITE_JOTFORM_FORM_ID;
      const endpoint = `https://api.jotform.com/form/${formID}/payment-info?apiKey=${apiKey}`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const products = data.content.products;

        this.shopCardData = products.map(product => {
          let imageList = [];

          try {
            imageList = JSON.parse(product.images);
          } catch (e) {
            console.warn('Image parsing failed for product:', product.name);
          }

          return {
            title: product.name,
            imageUrl: imageList[0] || null
          }
        });

        console.log(products);
        console.log(this.shopCardData);
      } catch (error) {
        console.error('Error fetching shop item data:', error);
      }
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

</style>
