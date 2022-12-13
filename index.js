const ProductManager = require('../backend/clase 01');

const manager = new ProductManager('../backend/products.json')

const ProductsManager = async () => {
    try {
        let products = await manager.getProducts();
        console.log(products);

        const newProduct1 ={
            title: 'Ford Fiesta',
            Price: '20000',
            thumbnail: 'https://www.inforicambi.it/public/photogallery/ford-fiesta-2022-1.jpg',
            description: 'Modelo 22',
            stock: 3
        };
        const product1Result= await manager.addProduct(newProduct1);
        console.log(product1Result)



    } catch (error) {
        console.log('error')
    }
};
ProductsManager();