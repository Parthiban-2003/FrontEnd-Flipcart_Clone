document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.querySelector('.login-container');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      loginContainer.classList.add('active');
  
    
      setTimeout(function() {
       
        window.location.href = 'index.html';
      }, 1000); 
    });
  });
  






 
const products = [
  { name: "Monitors", price: "$10", description: "Description of Product A" },
  { name: "Mackup", price: "$15", description: "Description of Product B" },
  { name: "Shoes", price: "$20", description: "Description of Product C" },
  
];


function searchProducts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const productDetailsContainer = document.getElementById('product-details');
  productDetailsContainer.innerHTML = ''; 

  products.forEach(product => {
      if (product.name.toLowerCase().includes(searchTerm)) {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product-item');
          productDiv.innerHTML = `
              <h3>${product.name}</h3>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> ${product.description}</p>
              <hr>
          `;
          productDetailsContainer.appendChild(productDiv);
      }
  });

  if (productDetailsContainer.children.length === 0) {
      productDetailsContainer.innerHTML = '<p>No matching products found.</p>';
  }
}


document.querySelector('.search-button').addEventListener('click', searchProducts);


document.getElementById('search-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      searchProducts();
  }
});

