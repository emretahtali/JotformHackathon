<template>
    <div class="shop-card">
        <h3>{{ productName }}</h3>
        <p>{{ productDetail }}</p>
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
    productDetail: {
    type: String,
    required: true
    }
}
};
</script>

<style scoped>
.shop-card {
background-color: #fff;
border: 1px solid #ddd;
padding: 20px;
margin: 20px;
width: 300px;
height: 300px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 15px;
transition: transform 0.3s ease;
}

.shop-card:hover {
transform: scale(1.05);
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
