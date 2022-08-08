runApp();

function ProductItem({ product }) {

  const isOnStockClass = product.isOnStock ? "is-on-stock" : "is-not-on-stock";

  return `
    <div class="product ${isOnStockClass}">
      <div class="product-field">
        <span class="product-label">Name: </span>${product.name}
      </div>
      <div class="product-field">
        <span class="product-label">Type: </span>${product.type}
      </div>
      <div class="product-field">
        <span class="product-label">Price: </span>${product.price}
      </div>
      <div class="product-field">
        <span class="product-label">Currency: </span>${product.currency}
      </div>
      <div class="product-field">
        <span class="product-label">Image: </span>${product.image}
      </div>
      <div class="product-field">
        <span class="product-label">IsOnStock: </span>${product.isOnStock}
      </div>
    </div>
  `
}
 
async function runApp() {
  try {
    const products = await fetchProducts();
    const container = document.getElementById("productContainer");

    products.forEach(product => {
      const props = { product };
      container.insertAdjacentHTML(
        "beforeend", 
        ProductItem(props)
      );
    })
  } catch(error) {
    console.error(error.message);
  }
  
}

// async function runApp() {
//   getProductDataAsync()
//   .then((responce) => {
//     responce.json().then((productData) => {
//       const products = productData.map(item => {
//         return new Product(item.name, item.type, item.price, item.currency, item.image);
//       })

//       const container = document.getElementById("productContainer");

//       products.forEach(product => {
//         const productElement = createProductElement(product);
//         container.appendChild(productElement);
//       })
//     })

//   }).catch((error) => {
//     console.log(error.message)
//   })
// }

