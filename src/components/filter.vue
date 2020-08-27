<template>
    <div class="filter row">
        <button class="filter__box col-6">Price</button>
        <button class="filter__box col-6" @click="checkSale(productId)">Sale</button>
    </div>
</template>




<script>

export default {
    


    computed: {

        checkSale(productId) {
            if (category='sale') {

            return state.products.includes(product.id);
            }

        }
        
        // sortedPriceToLow(a, b) {
        // if (a.value > b.value) {
        //     return 1;
        // }
        // if (a.value < b.value) {
        //     return -1;
        // }
        // return 0;
        // }
    }
}
</script>



<style>

.filter {
    margin-top: 1.6em;
    margin-bottom: 1em;
    width: 91.5%;
    height: 4em;
    color: black;
    margin-left: 1.05em !important;
    font-weight: bold;
}
.filter__box {
    text-align: center;
    padding-top: 0.3em;
    border: 4px solid black;
    border-radius: 0.25em;
    background: linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%);
}
.filter__box:hover {
    outline: none;
    color: white;
}


</style>