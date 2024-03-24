// declaring empty arrays
let productName = [];
let productPrice = []
let productQuantity = [];

function validateCart(e) {
  let event = e.target.parentElement;
  let quantityVal = event.getElementsByClassName("cart-quantity")[0].value;
  // checks for empty fields and alerts if there is any
  
  if (quantityVal == "") {
    alert("Please enter a quantity");
  } else {
    // adds elements to the array
    productName.push(event.getElementsByClassName("product-name")[0].innerText);
    productPrice.push(
      event.getElementsByClassName("product-price")[0].dataset.value
    ); //returns data value attribute
    
    productQuantity.push(quantityVal);

    let cart = "";
    
    for (let i = 0; i < productName.length; i++) {
      cart = `${cart}<br/>Product: ${productName[i]}`;
      cart = `${cart}<br/>Price: $${productPrice[i]}`;
      cart = `${cart}<br/>Quantity: ${productQuantity[i]}</br>`;
    }
    document.getElementById("invoice-box").innerHTML = cart;

    //calculating total price
    let totalPrice = 0;
    for (let i = 0; i < productName.length; i++) {
      let y = productPrice[i] * productQuantity[i];
      totalPrice += y;
      document.getElementById("invoiceTotal").innerHTML =
        "Total $" + totalPrice;
    }
  }
}

// function to scroll where the shopping cart is located
function openCart() {
  document.getElementById("shopping-cart").scrollIntoView();
}

//validation check for products added to cart
function checkout() {
  if (productName.length == 0) {
    alert("Please add a product to cart");
  } else {
   // function for user validation to check if all fields are filled
    let email = document.getElementById("email").value;
    let fname = document.getElementById("f-name").value;
    let lname = document.getElementById("l-name").value;
    let country = document.getElementById("country").value;
    let address = document.getElementById("address").value;

    if (email == "") {
      alert("Please enter your email");
      return false;
    }
    if (fname == "") {
      alert("Please enter your first name");
      return false;
    }
    if (lname == "") {
      alert("Please enter your last name");
      return false;
    }
    if (address == "") {
      alert("Please enter your address");
      return false;
    }
    // alert message displaying all personal details and information
    window.alert(
      "Email: " +
        email +
        "\nName: " +
        fname +
        lname +
        "\nCountry: " +
        country +
        "\nAddress: " +
        address +
        "\nYour order has been placed!"
    );

  }
}

