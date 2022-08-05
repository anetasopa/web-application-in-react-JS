const data = [
  {
    name: "Laptop",
    type: "eletronics",
    price: 500,
    currency: "usd",
    image: "some_url_of_image"
  },
  {
    name: "Super shoes",
    type: "clothing",
    price: 47,
    currency: "usd",
    image: "some_url_of_image"
  },
  {
    name: "Smartphone",
    type: "phones",
    price: 50,
    currency: "usd",
    image: "some_url_of_image"
  },
  {
    name: "Fancy Hat",
    type: "clothing",
    price: 100,
    currency: "usd",
    image: "some_url_of_image"
  },
];

function getProductData() {
  return data;
}

function getProductDataAsync(callback) {
  return setTimeout(function() {
    callback(data);
  }, 3000);
}


