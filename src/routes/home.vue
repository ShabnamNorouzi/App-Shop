<template>
  <div class="home"> 
      <h6 class="page__title">Sale</h6>
      <slider v-model="imageSlider" ></slider>
       <!-- <router-link to="/products" class="product__button mb-5">Products</router-link> -->
       
    
  </div>
</template>

<script>

import slider from '../components/slider.vue';


export default {

    components: {
        slider
    }
};


</script>

<style scoped>

</style>


