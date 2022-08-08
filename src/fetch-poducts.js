async function fetchProducts() {
  const responce = await fetch("https://product-app-101-server.vercel.app/api/products");
  return responce.json();
}