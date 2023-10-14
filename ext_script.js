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

// Cart functionality 
const products = [
    { id: 1, name: 'Apples', price: 1.99, quantity: 5, category:'fruit', image:''},
    { id: 2, name: 'Bananas', price: 0.99, quantity: 3, category:'fruit' },
    { id: 3, name: 'Oranges', price: 2.49, quantity: 8, category:'fruit'},
    { id: 4, name: 'Lettuce', price: 2.49, quantity: 2, category:'vegetable' },
    { id: 5, name: 'Tomatoes', price: 2.49, quantity: 2, category:'vegetable' },
    { id: 6, name: 'Onions', price: 2.49, quantity: 2, category:'vegetable' },


];

const cart = [];

const categorySelect = document.getElementById("category-select");
const productList = document.getElementById("product-list");

function populateProductList(category) {
    // Clear the product list
    productList.innerHTML = "";

    products
        .filter(product => category === "all" || product.category === category)
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

            productItem.appendChild(productImage)
            productItem.appendChild(productName)
            productItem.appendChild(productPrice)
            productItem.appendChild(addToCartButton)

            productList.appendChild(productItem);
        });
}

// Call the function initially to populate all products
populateProductList("all");

// Add a change event listener to the category selection dropdown
categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    populateProductList(selectedCategory);
});


