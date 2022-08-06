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

function getProductDataAsync() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {

      if (true) {
        reject(new Error("Oooops some error!!!!"));
      }
      
      const response = {
        json: async function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              resolve(data);
            }, 20)
          })
        }        
      }
      resolve(response);

    }, 1000);
  })
}


