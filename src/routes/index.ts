import Home from "./home.vue";
import Products from "./products.vue";
import Product from "./product.vue";
import Favorite from "./favorite.vue";
import Cart from "./cart.vue";

import {
    RouteConfig
} from 'vue-router'

export default [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/products",
        name: "products",
        component: Products
    },
    {
        path: "/product/:productId",
        name: "product",
        props: true,
        component: Product
    },
    {
        path: "/favorite",
        name: "favorite",
        props: true,
        component: Favorite
    },
    {
        path: "/cart",
        name: "cart",
        props: true,
        component: Cart
    }
] as RouteConfig[];