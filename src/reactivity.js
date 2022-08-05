function _createElement(elementType, classList) {
  const element = document.createElement(elementType);
  element.classList.add(classList)
  return element;
}

function createProductElement(product) {
  const productElement = _createElement("div", "product");

  // const labels = ["Name", "Type", "Price", "Currency", "Image"];
  const labels = Object.keys(product);

  labels.forEach(label => {
    const productField = _createElement("div", "product-field");
    const productLabel = _createElement("span", "product-label");

    productLabel.innerHTML = `${label[0].toUpperCase() + label.substring(1) + ": "}`;
    const text = document.createTextNode(product[label]);

    productField.appendChild(productLabel);
    productField.appendChild(text);
    productElement.appendChild(productField);
  })

  return productElement;
}