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