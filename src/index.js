runApp();

function runApp() {
  
  const product1 = new Product("Laptop", "eletronics", 500, "usd", "some_url_of_image");
  const product2 = new Product("Super shoes", "clothing", 47, "usd", "some_url_of_image");
  const product3 = new Product("Smartphone", "phones", 50, "usd", "some_url_of_image");
  const product4 = new Product("Fancy Hat", "clothing", 100, "usd", "some_url_of_image");

  const products = [product1, product2, product3, product4];

  const container = document.getElementById("productContainer");

  products.forEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  })  

  const numbers = [1, 2, 3, 4, 5];
  const animals = ["dog", "cat", "elephant"];

  function displayProduct(product, index) {
    console.log('index', index)
    console.log('product', product)
  } 

  products.customForEach(displayProduct);

  numbers.customForEach(function(number, index) {
    console.log('index', index)
    console.log('number', number)
  });

  animals.customForEach((animal, index) => {
    console.log('index', index)
    console.log('animal', animal)
  }); 
}
