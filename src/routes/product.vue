<template>
    <div class="product">
        <h6 class="title">Product</h6>
        <div class="productInfo__cart" v-if="product">
            <div class="productInfo__name">{{ product.name }}</div>
            <img class="productInfo__img" :src="product.imageSrc" :alt="product.name">
            <div class="productInfo__price">${{ product.price }}</div>
            <div class="productInfo__description">{{ product.description }}</div>
            <size-selector v-model="size" :sizes="product.sizes"></size-selector>
            <div v-if="!sizeIsInStock" class="warning__text">
                This size is not in stock
            </div>
            <color-selector v-model="color" :color="product.colors"></color-selector>
            <div v-if="!colorIsInStock" class="warning__text">
                This color is not in stock
            </div>
            <button class="product__button" @click="addToCart">Add to cart</button>
        </div>
        <div v-else>
            <strong>No Product Found</strong>
        </div>
    </div>
</template>

<script>
import SizeSelector from '../components/size-selector.vue';
import ColorSelector from '../components/color-selector.vue';

import {
    state,
    addToCart
} from '../store/index';

export default {

    components: {
        SizeSelector,
        ColorSelector
    },

    props: {

        productId: {
            type: [String, Number]
        }

    },

    data() {
        const product = state.products.find(({ id }) => id === +this.productId);
        const size = product.sizesInStock[0];
        const color = product.colorsInStock[0];

        return {
            product,
            size,
            color
        };
    },
        
    computed: {

        sizeIsInStock() {
            return this.size && this.product.sizesInStock.includes(this.size);
        },

        colorIsInStock() {
            return this.color && this.product.colorsInStock.includes(this.color);
        },
        
    },

    methods: {

        addToCart() {
            addToCart(this.productId, this.size, this.color);
        }

    }

};
</script>


<style>
.product {
 padding-bottom: 3.5em;
}

.title {
 font-weight: 100;
 font-size: x-large;
 color: white;
 margin-top: 1em;
 margin-bottom: 1em;
 text-align: center;
}

.productInfo__cart {
    background-color: white;
    line-height: 0.4em;
    margin: 0.25em 1.2em 1.5em 1.2em;
    padding-bottom: 0.4em;
    border-radius: 0.25em;
    padding-top: 0.25em;
    text-align: center;
    height: 37em;
    line-height: 1.5em;
}

.productInfo__img {
    width: 11em;
    height: 9em;
}

.productInfo__name {
    padding-top: 1.2em;
    font-size: x-large;
    color: black;
}

.productInfo__price{
    font-size: large;
    font-weight: bold;
    color: red;
    margin-top: 0.75em;
}

.productInfo__description {
    line-height: 3em;
    font-size: medium;
    color: black;
    font-weight: 100;
}

.size-selector__select,.color-selector__select  {
    background-color: #f9f9f900;
    border: 1px solid #C0C0C0;
    width: 18.5em;
    height: 3em;
    border-radius: 0.5em;
    margin-top: 0.5em;
    padding: 0.5em;
}


.warning__text {
    margin-top:0.5em;
    font-weight: 100;
    color: red;
}

</style>