<template>
    <div class="filter">
      <b-dropdown class="w-100" text=" Filter ">
            <!-- <template v-for="category in selectedCategory">
                <b-dropdown-item @click="selectedCategory(category)" :key="category">{{ category }}</b-dropdown-item>
                <b-dropdown-item @click="selectedCategory(category)" :key="category">{{ category }}</b-dropdown-item>
            </template> -->
        </b-dropdown>      
    </div>
</template>


<script>


export default {

    // props: {

    //     value: Object

    // },
    // data() {
    //     return {
    //         selectedCategory: [
    //             'category'
    //         ]
    //     };
    // },

    // computed: {
    //     selectedCategory: function() {
	// 		const category = this.selectedCategory;
			
	// 		if(category === "normal") {
	// 			return this.products;
	// 		} else {
	// 			return this.products.filter(function(product) {
	// 				return product.category === category ;
	// 			});
	// 		}
	// 	}
    // }

    
};


</script>




<style>

.filter {
    margin: 1em;
}

</style>