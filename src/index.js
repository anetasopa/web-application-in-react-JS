import React from "react"; 
import ReactDom from "react-dom/client";
import App from "./App";

const root = ReactDom.createRoot(
  document.getElementById("app")
);

root.render(<App />);

// (function( ) {
//    runApp();
 
//   async function runApp() {
//     try {
//       const products = await fetchProducts();
//       const children = products.map(product => ProductItem({product}))
      
//       ReactivityDOM.render(ProductPage({children}));
//     } catch(error) {
//       console.error(error.message);
//     }
//   }
// })()


