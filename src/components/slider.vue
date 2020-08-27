<template>
  
  <div class="slider">
  <b-carousel
    id="carousel-fade"
    fade
    indicators
    router-link to="/products"
    v-model="slide"
    :interval="2000"
  >
    <b-carousel-slide
      caption="50% Sale" 
      img-src="https://images.unsplash.com/photo-1579362094446-3db5b312f2ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">
    </b-carousel-slide>
    <b-carousel-slide
      caption="30% Sale"
      img-src="https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">
    </b-carousel-slide>
    <b-carousel-slide
      caption="70% Sale"
      img-src="https://images.unsplash.com/photo-1554735490-5974588cbc4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80">
    </b-carousel-slide>
</div>
</template>







<style scoped>

#carousel-fade {
    text-shadow: 0px 0px 2px #000;
}

</style>