<template>
    <div class="sort">
        <b-dropdown class="w-100" text=" Sort ">
            <template v-for="property in properties">
                <b-dropdown-item class="w-25" @click="selectItem(property, 1)" :key="property + '-asc'"><b-icon icon="sort-up" font-scale="1" class="mt-3"></b-icon>{{ property }}</b-dropdown-item>
                <b-dropdown-item class="w-25" @click="selectItem(property, -1)" :key="property + '-desc'"><b-icon icon="sort-down" font-scale="1" class="mt-3"></b-icon>{{ property }}</b-dropdown-item>
            </template>
        </b-dropdown>
    </div>
</template>


<script>


export default {

    props: {

        value: Object

    },

    data() {
        return {
            properties: [
                'price',
                'name',
                'description'
            ]
        };
    },

    methods: {

        selectItem(property, direction) {
            this.$emit('input', {
                property,
                direction
            });
        }

    }

    
};

</script>




<style>

.sort {
    margin: 1em;
}

</style>