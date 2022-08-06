runApp();

// async function runApp() {
//   const responce = await getProductDataAsync();
//   const productData = await responce.json();

//     const products = productData.map(item => {
//       return new Product(item.name, item.type, item.price, item.currency, item.image);
//     })
  
//     const container = document.getElementById("productContainer");
  
//     products.forEach(product => {
//       const productElement = createProductElement(product);
//       container.appendChild(productElement);
//     })

//   console.log(productData)
// }

async function runApp() {
  getProductDataAsync().then((responce) => {
    responce.json().then((productData) => {
      const products = productData.map(item => {
        return new Product(item.name, item.type, item.price, item.currency, item.image);
      })

      const container = document.getElementById("productContainer");

      products.forEach(product => {
        const productElement = createProductElement(product);
        container.appendChild(productElement);
      })
    })
  }).catch((error) => {
    console.log(error.message)
  })
}

