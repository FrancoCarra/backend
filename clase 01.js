//Entrega 02

const fs = require('fs')
const { existsSync } = require('fs')

class ProductManager {
  static idCounter = 0;
    constructor(path) {
      this.path = path;
    }

    async addProduct(producto) {
      const products = await this.getProducts();
      if (!products.length){
        ProductManager.idCounter = 1;
      }else{
        ProductManager.idCounter++;
      }
        const newProduct = {
          id: ProductManager.idCounter,
          ...producto
        };
        products.push(newProduct);
        await fs.writeFile(this.path, JSON.stringify(products, null, '\t' ));
        return newProduct;
    }  

    async getProducts() {
      if (existsSync(this.path)) {
        const data = await fs.readFile(this.path, 'utf-8');
        console.log(data);
        const products = JSON.parse(data);
        return products;
      }else{
        return [];
      }
    }
  
    getProductsById = async id => {
      let productos = await this.getProducts();
      try {
        const obj = productos.find(id => productos.id === id);
        return obj ? obj : null;
      } catch (error) {
        console.log(`error: ${error}`);
      }
    };

    deleteById = async id => {
      let productos = await this.getProducts();
      try {
        productos = productos.filter(producto => producto.id != id);
        await this.writeFile(productos);
     } catch (error) {
        console.log(`error: ${error}`);
      }
    }
  }

module.exports = ProductManager

