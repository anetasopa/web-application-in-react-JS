runApp();

function runApp() {

  getProductDataAsync(function(productData) {
    const products = productData.map(item => {
      return new Product(item.name, item.type, item.price, item.currency, item.image);
    })
  
    const container = document.getElementById("productContainer");
  
    products.forEach(product => {
      const productElement = createProductElement(product);
      container.appendChild(productElement);
    })
  });  
}
