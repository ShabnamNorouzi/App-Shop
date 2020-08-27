<template>
    <div class="color-selector">
        <select class="color-selector__select" v-model="color">
            <option :value="color" v-for="color in colors" :key="color">{{ color }}</option>
        </select>
    </div>
</template>

<script>
export default {
    
    props: {

        value: {
            type: String
        },
    },

    created() {
        this.colors = ["Blue", "White", "Black", "Brown", "Red"];
    },

    computed: {

        color: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }

    }

};
</script>

