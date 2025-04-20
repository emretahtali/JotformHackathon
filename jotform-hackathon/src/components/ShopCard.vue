<template>
    <div :class="['shop-card', { 'active-card': quantity > 0 }]">
        <div class="image-wrapper" v-if="imageUrl">
            <img :src="imageUrl" alt="Product" class="product-image" />
        </div>

        <h3 class="product-title">{{ productName }}</h3>
        <div class="price-quantity-row">
            <h4 class="product-price">${{ productPrice.toFixed(2) }}</h4>

            <div class="quantity-selector">
                <button @click="decrease">−</button>
                <input type="number" :value="quantity" @input="$emit('update:quantity', +$event.target.value)"
                    min="0" />
                <button @click="increase">+</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopCard',
    props: {
        productName: { type: String, required: true },
        imageUrl: { type: String, default: '' },
        productPrice: { type: Number, required: true },
        quantity: { type: Number, required: true }
    },
    emits: ['update:quantity'],
    methods: {
        increase() {
            this.$emit('update:quantity', this.quantity + 1);
        },
        decrease() {
            if (this.quantity > 0) {
                this.$emit('update:quantity', this.quantity - 1);
            }
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
    height: 100%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    padding: 12px;
    min-height: 340px;
    max-height: 340px;
}

.shop-card:hover {
    transform: scale(1.04);
}

.active-card {
    box-shadow: inset 0 0 0 3px black;
}

.image-wrapper {
    padding: 12px 12px 0;
    background-color: #f9f9f9;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.product-image {
    clip-path: inset(2% 0);
    width: 100%;
    height: 180px;
    object-fit: contain;
    display: block;
}

.product-title {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0 16px;
    color: #333;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-height: 3em;
    line-height: 1.4;
    overflow: hidden;
}

.price-quantity-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin: 0 16px 12px;
    margin-top: auto;
}

.product-price {
    font-size: 1rem;
    color: #333;
    margin: 0;
    font-weight: 600;
    white-space: nowrap;
}

.quantity-selector {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
}

.quantity-selector input::-webkit-inner-spin-button,
.quantity-selector input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.quantity-selector input {
    -moz-appearance: textfield;
}

.quantity-selector button {
    width: 32px;
    height: 32px;
    border: none;
    background-color: #e0f7fa;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.quantity-selector button:hover {
    background-color: #b2ebf2;
}

.quantity-selector input {
    width: 40px;
    height: 32px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
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
