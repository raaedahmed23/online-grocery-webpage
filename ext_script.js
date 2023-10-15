function updateDateTime() {
    const currentDateTimeElement = document.getElementById("currentDateTime");

    if (currentDateTimeElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

        currentDateTimeElement.textContent = now.toLocaleString(undefined, options);
    }
}

updateDateTime();
// Update the date and time every second (1000 milliseconds)
// setInterval(updateDateTime, 1000);

// Inventory and Populating the products on each page 
const products = [
    { id: 1, name: 'Apples', price: 1.99, quantity: 5, sub_category:'fruit', image:'', category:'fresh-produce'},
    { id: 2, name: 'Bananas', price: 0.99, quantity: 3, sub_category:'fruit', category:'fresh-produce' },
    { id: 3, name: 'Oranges', price: 2.49, quantity: 8, sub_category:'fruit', category:'fresh-produce'},
    { id: 4, name: 'Lettuce', price: 2.49, quantity: 2, sub_category:'vegetable', category:'fresh-produce' },
    { id: 5, name: 'Tomatoes', price: 2.49, quantity: 2, sub_category:'vegetable', category:'fresh-produce' },
    { id: 6, name: 'Onions', price: 2.49, quantity: 2, sub_category:'vegetable', category:'fresh-produce' },
    { id: 7, name: 'Ice Cream', price: 2.49, quantity: 2, sub_category:'dessert', category:'frozen' },
];

const categorySelect = document.getElementById("subcategory-select");
const productList = document.getElementById("product-list");

function populateProductList(category, sub_category) {
    // Clear the product list
    productList.innerHTML = "";

    products
        .filter(product => (category === "all" || product.category === category) && (sub_category === "all" || product.sub_category === sub_category))
        .forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product");

            // Create elements for name, image, and price
            const productImage = document.createElement("img");
            productImage.src = product.imageSrc;
            productImage.alt = product.name;
        
            const productName = document.createElement("h3");
            productName.textContent = product.name;
        
            const productPrice = document.createElement("p");
            productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        
            const addToCartButton = document.createElement("button");
            addToCartButton.textContent = "Add to Cart";
            addToCartButton.dataset.productId = product.id;

            addToCartButton.addEventListener("click", function(){
                addToCartAndUpdateInventory(product)
            });

            productItem.appendChild(productImage)
            productItem.appendChild(productName)
            productItem.appendChild(productPrice)
            productItem.appendChild(addToCartButton)

            productList.appendChild(productItem);
        });
}

// populateProductList("all");

// Add a change event listener to the category selection dropdown
categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    category_list = ["fresh-produce", "frozen", "candy"];
    if (category_list.includes(selectedCategory)){
        populateProductList(selectedCategory, "all");
    }
    else{
        populateProductList("all", selectedCategory);
    }
});

// Cart functionality


function addToCartAndUpdateInventory(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = products.find(product => product.id === item.id);
    
    if (existingProduct && existingProduct.quantity > 0) {
        // Decrement the inventory
        existingProduct.quantity--;

        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            // If the item already exists in the cart, increase the quantity
            existingItem.quantity++;
        } else {
            // If the item doesn't exist in the cart, add it
            cart.push({ ...item, quantity: 1 });
        }
    }
    else {
        alert("This item is Out of Stock :(")
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

// code to populate the cart

function displayCart(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
    var total_price = 0

    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - Price: $${item.price.toFixed(2)} - Quantity: ${item.quantity}`;
        total_price += parseFloat(item.price.toFixed(2))
        cartItemsElement.appendChild(cartItem);
    });

    const cartItem = document.createElement("li");
    cartItem.textContent = `Cart Total - Price: $${total_price}`;
    cartItemsElement.appendChild(cartItem)
}

// const addToCartButtons = document.querySelectorAll("button");

// addToCartButtons.forEach(button => {
//     button.addEventListener("click", event => {
//         const productId = event.target.dataset.productId;
//         const selectedProduct = products.find(product => product.id == productId);

//         if (selectedProduct) {
//             // Add the selected product to the cart
//             addToCartAndUpdateInventory(selectedProduct);
//         }
//     });
// });
