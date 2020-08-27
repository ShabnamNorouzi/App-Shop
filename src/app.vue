<template>
    <div id="app">
        <img class="status__bar" src="./assets/status-bar.svg">
        <h1 class="header">Shop App</h1>
            <router-view></router-view>
        <div id="footer">
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/favorite">Favorites <span v-if="favoriteCount > 0">({{ favoriteCount }})</span></router-link>
            <router-link to="/cart">Cart <span v-if="cartCount > 0">({{ cartCount }})</span></router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {
    state
} from './store';

export default {
    
    computed: {

        cartCount() {
            return state.cart.length;
        },
        favoriteCount() {
            return state.favorite.length;
        }

    }

}
</script>

<style>

#app {
background-size: cover;
height:auto;
}

.status__bar {
width: 100%;
text-align: center;
}

.header {
    color:gray;
    text-align: center;
    margin-top: 0.1em;
}


#footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width:100%;
  background-color: white;
  height: 5em;
  font-weight:lighter;
  text-align: center;
  font-size: small;
  padding-top: 1.75em;
  border-top: 1px solid black;
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
}
#footer a {
    padding: 0em 1em;
    color: black;
    text-decoration: none;
}
#footer a.router-link-exact-active {
    color: white;
    background: linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%);
    border-radius: 2.5em;
    padding: 0.8em;
}
.product__button {
    background: linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%);
    border-radius: 2em;
    border: none;
    width:19em;
    height: 3.5em;
    color: white;
    margin-top: 1em;
}

.product__button:hover {
    color: black;
    border: none;
    outline: none;
}
</style>