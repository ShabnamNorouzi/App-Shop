<template>
    <div id="app">
        <img class="status__bar" src="./assets/status-bar.svg">
        <h1 class="header">Shop App</h1>
            <router-view></router-view>
        <div id="footer">
            <router-link to="/"><b-icon icon="house-fill" aria-hidden="true"></b-icon></router-link>
            <router-link to="/products"><b-icon icon="grid-fill" aria-hidden="true"></b-icon></router-link>
            <router-link to="/favorite"><b-icon icon="heart-fill" aria-hidden="true"></b-icon> <span v-if="favoriteCount > 0">({{ favoriteCount }})</span></router-link>
            <router-link to="/cart"><b-icon icon="cart4" aria-hidden="true"></b-icon> <span v-if="cartCount > 0">({{ cartCount }})</span></router-link>
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
  height: 4em;
  text-align: center;
  font-size: large;
  padding-top: 1.1em;
  border-top: 1px solid black;
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
  padding-left: 0.4em;
  padding-right: 0.8em;
}
#footer a {
    padding: 0em 1em;
    color: black;
    text-decoration: none;
    text-align: center;
}
#footer a.router-link-exact-active {
    color: white;
    background: linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%);
    border-radius: 2.5em;
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