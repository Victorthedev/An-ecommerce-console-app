const readline = require('readline-sync');

// function for user to enter name
function userName() {
  const user = readline.question('Enter your name: ');
  if (user === '') {
    console.log('Please enter a valid name');
    return false;
  } else {
    console.log(`Welcome ${user}, What are you shopping for today?`);
    return true;
  }
}

//variable that stores available items in an array
const products = [
  { id: '1', name: 'Nike Jordan 1s', price: 24.99, quantity: 8 },
  { id: '2', name: 'UTX Trucker cap', price: 7.99, quantity: 0 },
  { id: '3', name: 'Cargo pants', price: 12.99, quantity: 5 },
  { id: '4', name: 'Graphic cartoon t-shirts', price: 10.99, quantity: 3 }
];

// variable that stores user selection
let cart = [];


///function that displays the available products
function displayProducts() {
  console.log('For sale:');
  products.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

// function that adds user selection to cart
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);
  if (product && product.quantity > 0) {
    cart.push({ ...product, quantity }); 
    product.quantity -= 1;
    console.log(`Added ${quantity} ${product.name}(s) to your cart.`);
  } else {
    console.log('Sorry! This item is currently unavailable or out of stock.');
  }
}


//function to display user selection
function displayCart() {
  console.log('Your Cart:');
  cart.forEach(item => {
    console.log(`${item.quantity} ${item.name}(s) - $${(item.quantity * item.price).toFixed(2)}`);
  });
}

//function to calculate user cart
function checkout() {
  if (cart.length === 0) {
    console.log('Your cart is empty');
  } else {
    let total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    console.log(`Your Order has been placed, ${userName()}!`);

    cart.forEach(product => {
      console.log(`-${product.name} - $${(product.price * product.quantity).toFixed(2)}`);
    });

    console.log(`Your Total: $${total.toFixed(2)}`);
    cart = [];
  }
}


let userNameEntered = false;

// Prompt user for name
userNameEntered = userName();

// If the user entered the name, proceed with the menu
if (userNameEntered) {
  while (true) {
    console.log('\n1. Display Products');
    console.log('2. Add to Cart');
    console.log('3. View Cart');
    console.log('4. Checkout');
    console.log('5. Exit');

    const choice = readline.questionInt('Enter your choice: ');

    switch (choice) {
      case 1:
        displayProducts();
        break;
      case 2:
        const productId = readline.question('Enter the product ID: ');
        const quantity = readline.questionInt('Enter the quantity: ');
        addToCart(productId, quantity);
        break;
      case 3:
        displayCart();
        break;
      case 4:
        checkout();
        process.exit(); 
        break;
      case 5:
        process.exit(); 
        break;
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
}
