const products = [{
        id: 1,
        title: 'taza',
        category: 'importado',
        description: 'crema y lineas',
        price: 100,
        pictureUrl: 'https://feriasverdes.com/wp-content/uploads/2020/04/Mundo-Dobleve_taza-01.jpg',
        stock: 'number'
    },
    {
        id: 2,
        title: 'mate',
        category: 'nacional',
        description: 'liso gris',
        price: 200,
        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/562/064/products/mate-pedro-elida-rosa-grafito-2-cuadrado1-12a9b173974beb0e9e16487467919051-640-0.jpg',
        stock: 'number'
    },
    {
        id: 3,
        title: 'ensaladera',
        category: 'nacional',
        description: 'hojas verdes',
        price: 500,
        pictureUrl: 'https://i.blogs.es/9fdfad/71fnus18yhl._sl1500_/1366_2000.jpg',

        stock: 'number'
    },
    {
        id: 4,
        title: 'bandeja',
        category: 'importado',
        description: 'amor',
        price: 800,
        pictureUrl: 'https://www.tendero.com.ar/web/image/product.product/128/image_1024/Bandejas%20de%20cer%C3%A1mica%20horneadas%20con%20palabras%20que%20inspiran%20%28Alegr%C3%ADa%29?unique=60d9517',
        stock: 'number'
    }
]

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000)
    })
    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout(() => {
            return resolve(result);
        }, 2000)
    })
    return promise
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
            return resolve(results);
        }, 2000)
    })
    return promise
};