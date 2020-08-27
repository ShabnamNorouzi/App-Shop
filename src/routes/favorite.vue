<template>
  <div class="favorite">
      <h6 class="title">My Favorites</h6>
      <div class="product__card" v-for="(product, productId) in products" :key="product.id">
          <button class="favorites__icon" @click="removeFromFavorites(productId)">
                <b-icon  icon="heart-fill"></b-icon>
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

import product from "./product.vue";

import {
    state
} from '../store/index';

export default {

    data() {

        return {
        favorite: state.favorite,
        product
        };
    },


    computed: {

        products() {
            return state.favorite.map(id => {
                return state.products.find(product => product.id === +id);
            });
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

        removeFromFavorites(productId) {
            // const index = state.favorite.indexOf(productId);
            state.favorite.splice(productId, 1);
        }
        

    }
}
</script>


<style scoped>
.favorite {
  background-color: black;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em;
  margin-top: 1.5em;
  text-align: center;
  padding-bottom: 4em;
  margin-bottom: 4em;
}

.favorite__items {
  height: 12em;
  background-color: white;
  border: 1px solid #e6e6e6;
  text-align: left;
  margin-bottom: 1em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.7em;
  line-height: 2.25em;
}

.product__card {
    background-color: white;
    line-height: 0.4em;
    margin: 0.25em 1.2em 1.5em 1.2em;
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
    color: #ff3082;
}

.favorites__icon:hover ,
.favorites__icon:focus,
.favorites__icon:active {
    background: rgba(255, 255, 255, 0);
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