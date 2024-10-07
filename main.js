function authenticateUser() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const authMessage = document.getElementById("auth-message");

  if (age >= 18) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    authMessage.innerHTML = `
      <p>
        Welcome! <span>${capitalizedName}</span>, You are authorized to view the products.
      </p>`;

  
    fetchProducts(); 
  } else {
    authMessage.innerText =
      "Sorry, you must be at least 18 years old to access the products.";
    document.getElementById("product-list").innerHTML = ""; 
  }
}

const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Shoes", price: 80, category: "Apparel" },
  { name: "Watch", price: 250, category: "Accessories" },
  { name: "Bags", price: 900, category: "Accessories" },
  { name: "Shoes", price: 80, category: "Apparel" },
  { name: "Phone", price: 250, category: "Accessories" },
  { name: "External Keyboard", price: 200, category: "Electronics" },
  { name: "Notebook", price: 80, category: "Apparel" },
  { name: "Blue-Ray Effect Glassess", price: 250, category: "Accessories" },
  { name: "Mouse", price: 200, category: "Electronics" },
  { name: "Pen", price: 80, category: "Apparel" },
  { name: "Extention Box", price: 250, category: "Accessories" },
];


async function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); 
  }).then(displayProducts);
}


function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    productList.innerHTML += `<p>${product.name} - $${product.price} (${product.category})</p>`;
  });
}
