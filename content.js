const getProductName = () => {
  let product = document.querySelector(".pdp-mod-product-badge-title-v2");
  if (product == null) {
    return;
  }

  let productName = product.innerText;
  console.log(productName);
  chrome.runtime.sendMessage({ action: "productChanged", productName: productName });
};

getProductName();