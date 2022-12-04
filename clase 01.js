//Entrega 01
class ProductManager {
    static idCounter = 0;
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      ProductManager.idCounter++;
      const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code: code = ProductManager.idCounter,
        stock,
      };
      this.products.push(newProduct);

      if (!this.products.find(product => product.code === code)&&( title && description && code && price && thumbnail && stock)) {
        getProducts()
     } else {
        console.error('El campo code es igual al de otro producto')
     }
    }  
    getProducts() {
      console.log(this.products);
    }
  
    getProductsById(idProduct) {
      const productFound = this.products.find(
        product => product.id === idProduct
      );
      if (!productFound) {
        console.error('Not Found');
        return;
      }
    }
  }
  const productManager = new ProductManager();
  
  const FordFiesta = productManager.addProduct(
    'Ford Fiesta',
    'Model 2022',
    20.0,
    'https://www.inforicambi.it/public/photogallery/ford-fiesta-2022-1.jpg',
    4
  );
  const AudiTT = productManager.addProduct(
    'Audi TT',
    'Model 2022',
    32.0,
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-tt-edicion-tourist-trophy-1640076725.jpg?crop=0.789xw:0.592xh;0.0121xw,0.291xh&resize=1200:*',
    2
  );
  
  productManager.getProducts();
  productManager.getProductsById();
