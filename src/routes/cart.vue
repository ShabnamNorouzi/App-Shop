<template>
  <div class="cart">
    <h6 class="title" style="color:black;">My Cart</h6>
      <div class="cart__items" v-for="(product, productId) in cart" :key="product.id">
        <button class="close__icon" @click="removeFromCart(productId)">
          <b-icon icon="x" aria-hidden="true"></b-icon>
        </button>
        <div class="row">
          <img class="buyInfo__img col-6" :src="product.imageSrc" :alt="product.name" />
          <div class="col-6">
            <div class="buyInfo__price">${{ product.price }}</div>
            <div class="buyInfo__name">{{ product.name }}</div>
            <div class="buyInfo__size" ><span> Size: {{ product.size }}</span></div>
            <div class="buyInfo__color">Color: {{ product.colour }}</div>
          </div>
        </div>
      </div>
    <div class="sum__card">
    <ul>
      <li>
        Total
        <span>${{total}}</span>
      </li>
    </ul>
      <button class="product__button small mb-3" type="button">Check Out</button>
  </div>
  </div>
</template>

<script>
import product from "./product.vue";
import SizeSelector from '../components/size-selector.vue';

import {
    state
} from '../store/index';

export default {

  data() {

    return {
      cart: state.cart,
      product
    };
  },

    props: {

        value: {
            type: Number
        }
    },

    methods: {
        removeFromCart(productId) {
        this.cart.splice(productId, 1);
        },
    },

    computed: {
        total: function(){
        console.log(this.cart);
        return this.cart.reduce(function(total, product){

        return total + product.price; 
        },0);
        }
    }   

};

</script>

<style scoped>
.cart {
  background-color: white;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em;
  margin-top: 1.5em;
  text-align: center;
  padding-bottom: 4em;
  margin-bottom: 4em;
}

.cart__items {
  height: 13em;
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

.close__icon {
  float: right;
  border: none;
  outline: none;
}

.close__icon:hover {
  color: deeppink;
}

.buyInfo__img {
  width: 50%;
  padding-top: 1em;
}

.buyInfo__name {
  color: black;
  font-size: 1.25em;
}

.buyInfo__price {
  color: red;
  font-size: 1.25em;
  padding-top: 1em;
}

.buyInfo__size {
  color: #4c4c4c;
}
.buyInfo__color {
  color: #4c4c4c;
}
.sum__card {
  background-color: white;
  border: 1px solid #e6e6e6;
  width: 90%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 0.5em;
}
.sum__card ul li {
  padding: 0.5em;
  list-style-type: none;
  text-align: left;
}

.sum__card li span {
  display: inline-block;
  color: red;
}


</style>