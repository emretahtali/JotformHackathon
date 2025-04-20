<template>
  <div class="page_container">
    <div class="page-header">
      <h1>Shop</h1>
    </div>
    <div class="item-list">
      <div v-for="(item, index) in items" :key="index" class="item-card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingPage',
  data() {
    return {
      items: [
        { title: 'Item 1', description: 'This is item 1 description.' },
        { title: 'Item 2', description: 'This is item 2 description.' },
        { title: 'Item 3', description: 'This is item 3 description.' },
        { title: 'Item 4', description: 'This is item 4 description.' },
        { title: 'Item 5', description: 'This is item 5 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' },
        { title: 'Item 6', description: 'This is item 6 description.' }
      ]
    };
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
  margin-top: 20px;
}

.item-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.item-card:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .item-card {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .item-card {
    width: 90%;
  }
}

</style>
