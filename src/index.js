import { fetchProducts } from "./fetch-poducts";
import { ProductItem } from "./Component/ProductItem";
import { ProductPage } from "./Component/ProductPage";
import { ReactivityDOM } from "./reactivity";

import React from "React";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(
  document.getElementById("reactApp")
);

function MyReactComponent(props) {
  return React.createElement(
    "div", 
    null, 
    `My first react componet: ${props.title}`
  );
}

const element = React.createElement(
  MyReactComponent, 
  {title: "Custom text"}, 
  null
);

root.render(element);
(function( ) {
   runApp();
 
  async function runApp() {
    try {
      const products = await fetchProducts();
      const children = products.map(product => ProductItem({product}))
      
      ReactivityDOM.render(ProductPage({children}));
    } catch(error) {
      console.error(error.message);
    }
  }
})()


