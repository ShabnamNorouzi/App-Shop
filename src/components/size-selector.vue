<template>
    <div class="size-selector">
        <select class="size-selector__select" v-model="size">
            <option :value="size" v-for="size in sizes" :key="size">{{ size }}</option>
        </select>
    </div>
</template>

<script>
export default {
    
    props: {

        value: {
            type: Number
        },

        sizes: {
            type: Array,
            default: () => Array.from({ length: 12 }, (v, i) => ++i)
        }
        
    },

    computed: {

        size: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }

    }

}
</script>

<style scoped>


</style>