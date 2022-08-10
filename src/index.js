import { fetchProducts } from "./fetch-poducts";
import { ProductItem } from "./Component/ProductItem";
import { ProductPage } from "./Component/ProductPage";
import { ReactivityDOM } from "./reactivity";

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


