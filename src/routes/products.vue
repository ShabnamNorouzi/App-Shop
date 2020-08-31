<template>
    <div class="products">
        <h6 class="page__title">Products</h6>
        <div class="filter__bar">
            <sort-Products v-model="sortBy" class="w-100"></sort-Products>
            <filter-Products class="w-100" v-for="product in products" :key="product.id">{{ product.category}}</filter-Products>
        </div>
        <div class="product__card" v-for="product in products" :key="product.id" >
            <button class="favorites__icon" @click="addToFavorite(product)">
                <b-icon  icon="heart-fill" aria-hidden="true"></b-icon>
            </button>
            <img class="product__img" :src="product.imageSrc" :alt="product.name">
            <div class="product__name">{{ product.name }}</div>
            <div class="product__price">${{ product.price }}</div>
            <div class="product__description">{{ product.description }}</div>
            <router-link :to="getProductRoute(product)" tag="button" class="product__button">Show More</router-link>
        </div>
    </div>
</template>

<script>
import product from './product.vue';
import filterProducts from '../components/filter.vue';
import sortProducts  from '../components/sort.vue';

import sortBy from '../utilities/sort-by';

import {
    state,  
    addToFavorite
} from '../store/index';

export default {

    components: {
        filterProducts,
        sortProducts
    },

    data() {
        const product = state.favorite.find(({ id }) => id === +this.productId);
        return {
            product,
            sortBy: {
                property: 'price',
                direction: 1
            }
        };
    },

    computed: {

        products() {
            const {
                property,
                direction
            } = this.sortBy;

            return sortBy(state.products, property, direction);
        }

    },

    methods: {
        getProductRoute(product) {
            return {
                name: 'product',
                params: {
                    productId: product.id
                }
            };
        },
        addToFavorite(product) {
            addToFavorite(product.id);
        },
        isInFavorites(product) {
            return state.favorite.includes(product.id);
        }

    }


};
</script>



<style>
.products {
 padding-bottom: 4.5em;
}

.page__title {
 font-weight: 100;
 font-size: x-large;
 color: white;
 margin-top: 1em;
 margin-bottom: 1em;
 text-align: center;
}

.filter__bar {
    display: flex;
}

.product__card {
    background-color: white;
    line-height: 0.4em;
    margin: 0.25em 1em 1.5em 1em;
    padding-bottom: 0.4em;
    border-radius: 0.25em;
    padding-top: 0.5em;
    text-align: center;
    height: 18.5em;
    line-height: 1.5em;
}


.favorites__icon {
    float: right;
    margin-top: 0.5em;
    margin-right: 0.75em;
    font-size: 2em;
    border: none;
    background: rgba(255, 255, 255, 0);
}

.favorites__icon:hover ,
.favorites__icon:focus,
.favorites__icon:active {
    color: #ff3082;
    border: none !important;
    outline: none;
}

.product__img {
    width: 8em;
    height: 6em;
    margin-top: 1em;
    margin-left: 3em;
}

.product__name {
    padding-top: 0.5em;
    font-size:medium;
    color: black;
}

.product__price{
    font-size: small;
    color: red;
}

.product__description {
    font-size: small;
    color: black;
    font-weight: 100;
}

</style>