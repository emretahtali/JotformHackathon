<template>
    <div class="shop-card">
      <img v-if="imageUrl" :src="imageUrl" alt="Product image" class="product-image" />
      <h3 class="product-title">{{ productName }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShopCard',
    props: {
      productName: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String
      }
    }
  };
  </script>
  
<style scoped>
.shop-card {
    background-color: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    width: 260px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    padding: 0;
}

.shop-card:hover {
    transform: scale(1.04);
}


.product-image {
    clip-path: inset(2% 0);
    width: 100%;
    height: 200px;
    object-fit: contain;
    background-color: #f9f9f9;
    margin: 0;
    display: block;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.product-title {
    margin-left: 20px;
    margin-right: 20px;
}

@media (max-width: 768px) {
    .shop-card {
        width: 45%;
    }
}

@media (max-width: 480px) {
    .shop-card {
        width: 90%;
    }
}
</style>
  
