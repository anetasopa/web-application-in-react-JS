runApp();

function runApp() {

  const productElement1 = document.getElementById("product1");
  const productElement2 = document.getElementById("product2");
  const productElement3 = document.getElementById("product3");
  const productElement4 = document.getElementById("product4");

  // ------ 1 --------
  // function createClickHandler(message, name) {
  //   const name = "Anna";
  //   return function() {
  //     console.log(message + " " + name);
  //   }
  // }

  // ------ 2 --------
  // const createClickHandler = (message, name) => {
  //   const name = "Anna";
  //   return () => {
  //     console.log(message + " " + name);
  //   }
  // }

  // ------ 3 --------
  // const createClickHandler = (message, name) => () => {
  //     const name = "Anna";
  //     console.log(message + " " + name);
  // }

  // ------ 4 --------
  // const createClickHandler = (message, name) => {
  //   return () => {
  //     console.log(message + " " + name)
  //   }
  // }

  // ------ 5 --------
  const createClickHandler = (message, name) => () => console.log(message + " " + name);


  // ------ 1 --------
  // const clickHandler = () => {
  //   console.log("Hello there!");
  // }

  // ------ 2 --------
  const clickHandler = () => console.log("Hello there!");
  const clickHandler2 = createClickHandler("Hi there!", "Magda");

  productElement1.addEventListener("click", clickHandler());
  productElement2.addEventListener("click", clickHandler2());
  productElement3.addEventListener("click", createClickHandler("Third element", "Kate"));
  productElement4.addEventListener("click", function() {
    console.log("An annonymous function"); 
  });

  // function clickHandler() {
  //   console.log("Hello there!")
  // }


  // product.addEventListener("click", function() {
  //   console.log("Hello there!")
  // }


  // -------- CALLBACK FUNCTION ------------
  // function callbackFunction(message) {
  //   console.log(message);
  // }

  // function myCustomFunction(fn) {
  //   fn("Mu custon function");
  // }

  // myCustomFunction(callbackFunction); 

  // const functionRef = function() {
  //   console.log("Function reference")
  // }

  // functionRef();

  // const functionRef2 = callbackFunction;

  // myCustomFunction(functionRef2);


  class Product {
    constructor(
      name = "Default Name",
      type,
      price,
      currency = "usd",
      image = "unsplash_url"
    ) {
      this.name = name;
      this.type = type;
      this.price = price;
      this.currency = currency;
      this.image = image;
    }

    displayInfo(additionalInfo = "") {
      const info = `
        Name: ${this.name},
        Type: ${this.type},
        Price: ${this.price},
        Currency: ${this.currency},
        Image: ${this.image},
        ${additionalInfo}
      `;

      console.log(info)    
    }
  }
  
  const product1 = new Product("Laptop", "eletronics", 500, "usd", "some_url_of_image");
  const product2 = new Product("Super shoes", "clothing", 47, "usd", "some_url_of_image");
  const product3 = new Product("Smartphone", "phones", 50, "usd", "some_url_of_image");
  const product4 = new Product("Fancy Hat", "clothing", 100, "usd", "some_url_of_image");

  const products = [product1, product2, product3, product4];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.displayInfo();
    console.log("-----------------");
  }
}
