import Vue from 'vue';

interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    imageSrc: string;
    sizes: number[];
    sizesInStock: number[];
    colorsInStock: string[];
}

export const state = new Vue({
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Soccer Shoes',
                    description: 'Really great shoes',
                    price: 90,
                    imageSrc: 'http://www.pngmart.com/files/6/Soccer-Shoe-PNG-Photos.png',
                    sizes: [7, 9, 10, 12],
                    sizesInStock: [7, 9, 12],
                    colorsInStock: ["Black", "Brown", "Red"],
                    category: 'sale'
                },
                {
                    id: 2,
                    name: 'Boots Shoes',
                    description: 'Really great shoes',
                    price: 170,
                    imageSrc: 'https://www.patmenziesshoes.co.nz/media/catalog/product/cache/54e0dcd5645c9ecc7fceac4267bbcf53/D/M/DM24993257BRN-DR-MARTENS-1460-PASCAL-8-EYE-BOOT-MENS-BROWN_1.JPG',
                    sizes: [5, 6, 7, 8, 10, 12],
                    sizesInStock: [5, 6, 7, 10],
                    colorsInStock: ["Blue","Brown", "Red"],
                    category: 'normal'
                },{
                    id: 3,
                    name: 'Running Shoes',
                    description: 'Really great shoes',
                    price: 210,
                    imageSrc: 'https://assets.kogan.com/files/product/etail/Converse-/CON-M9621C-7H_1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753',
                    sizes: [5, 8, 9, 10, 11, 12],
                    sizesInStock: [5, 9, 10, 12],
                    colorsInStock: ["Blue","Brown", "Red"]
                },{
                    id: 4,
                    name: 'Tennis Shoes',
                    description: 'Really great shoes',
                    price: 132,
                    imageSrc: 'https://www.tenniswarehouse.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/7/273019_revolt_pro_3-0_clay_men_3_1000x1000px.1575274250.jpg',
                    sizes: [8, 9, 10, 11, 12],
                    sizesInStock: [ 10, 12],
                    colorsInStock: ["Blue","Brown", "Red"],
                    category: 'sale'
                },{
                    id: 5,
                    name: 'Heel Shoes',
                    description: 'Really great shoes',
                    price: 159,
                    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIL-zTtXkOtnY4gllFtAmjukOdaXLZHKC1GA&usqp=CAU',
                    sizes: [5, 6, 7, 8],
                    sizesInStock: [5, 6, 8],
                    colorsInStock: ["Blue","Black", "Red"],
                    category: 'normal'
                }
            ],
            cart: [],
            favorite:[],
        }
    }
});

export function addToCart(productId: number, size: number, colour: string): void {
    const product = state.products.find(({ id }) => id === +productId);

    if (product) {
        state.cart.push({
            ...product,
            size,
            colour
        });
    }
}

// export function removeFromFavorites(productId: number): void {
//     state.favorite = state.products.filter(product => {
//         return product.id !== productId;
//     });
    
// }

// export function removeFromCart(productId) {
//     this.cart = this.cart.filter((product) => {
//         return product.id !== productId;
//     });
    
// }

export function addToFavorite(productId: number): void {
    state.favorite.push(productId);
}
