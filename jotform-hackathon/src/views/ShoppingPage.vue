<template>
  <div class="page_container">
    <div class="page-header">
      <h1>Shop</h1>
    </div>
    <div class="item-list">
      <ShopCard
        v-for="(item, index) in shopCardItemData"
        :key="index"
        :productName="item.title"
        :productDetail="item.description"
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
      shopCardItemData: null,

      // items: [
      //   { title: 'Item 1', description: 'This is item 1 description.' },
      //   { title: 'Item 2', description: 'This is item 2 description.' },
      //   { title: 'Item 3', description: 'This is item 3 description.' },
      //   { title: 'Item 4', description: 'This is item 4 description.' },
      //   { title: 'Item 5', description: 'This is item 5 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' },
      //   { title: 'Item 6', description: 'This is item 6 description.' }
      // ]
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

    this.shopCardItemData = products.map(product => ({
      title: product.name,
      description: product.description || 'No description provided.'
    }));

    console.log(this.shopCardItemData);
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
