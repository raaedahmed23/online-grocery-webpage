function updateDateTime() {
    const currentDateTimeElement = document.getElementById("currentDateTime");

    if (currentDateTimeElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

        currentDateTimeElement.textContent = now.toLocaleString(undefined, options);
    }
    setTimeout("updateDateTime()", 1000);
}
updateDateTime();
// Update the date and time every second (1000 milliseconds)
// setInterval(updateDateTime, 1000);

// Inventory and Populating the products on each page 
const products = [
    { id: 1, name: 'Apples', price: 1.99, quantity: 5, sub_category:'fruit', imageSrc:'images/products/apples.webp', category:'fresh-produce'},
    { id: 2, name: 'Bananas', price: 0.99, quantity: 3, sub_category:'fruit', category:'fresh-produce' ,imageSrc:'images/products/banana.webp'},
    { id: 3, name: 'Oranges', price: 2.49, quantity: 8, sub_category:'fruit', category:'fresh-produce', imageSrc:'images/products/orange.webp'},
    { id: 4, name: 'Lettuce', price: 2.49, quantity: 2, sub_category:'vegetable', category:'fresh-produce', imageSrc:'images/products/lettuce.webp' },
    { id: 5, name: 'Tomatoes', price: 2.49, quantity: 2, sub_category:'vegetable', category:'fresh-produce',imageSrc:'images/products/tomato.webp'},
    { id: 6, name: 'Onions', price: 2.49, quantity: 2, sub_category:'vegetable', category:'fresh-produce', imageSrc:'images/products/onion.webp' },
    { id: 7, name: 'Ice Cream', price: 2.49, quantity: 2, sub_category:'dessert', category:'frozen', imageSrc:'images/products/icecream.webp'},
    { id: 8, name: 'Twix', price: 2.49, quantity: 3, sub_category:'', category:'candy', imageSrc:'images/products/twix.webp'},
    { id: 9, name: 'Snickers', price: 1.49, quantity: 3, sub_category:'', category:'candy', imageSrc:'images/products/snickers.webp'},
    { id: 10, name: 'PopTarts', price: 2.49, quantity: 3, sub_category:'', category:'snacks', imageSrc:'images/products/poptarts.webp' },
    { id: 11, name: 'Granola Bar', price: 1.49, quantity: 3, sub_category:'', category:'snacks', imageSrc:'images/products/granola.webp'},
    { id: 12, name: 'Cherry Pie Fillings', price: 2.49, quantity: 3, sub_category:'', category:'baking',imageSrc:'images/products/cherrypie.webp'  },
    { id: 13, name: 'Pan', price: 10.49, quantity: 3, sub_category:'', category:'baking', imageSrc:'images/products/pan.webp' },
    { id: 14, name: 'Mac N Cheese', price: 3.49, quantity: 3, sub_category:'meal', category:'frozen', imageSrc:'images/products/macncheese.webp' },
    { id: 15, name: 'Frozen Naan', price: 2.49, quantity: 3, sub_category:'meal', category:'frozen', imageSrc:'images/products/naan.webp' },
    { id: 16, name: 'Pizza', price: 10.99, quantity: 3, sub_category:'pizza', category:'frozen' , imageSrc:'images/products/pizza.webp'},
    { id: 17, name: 'Canned Peas', price: 9.49, quantity: 3, sub_category:'canned-veg', category:'pantry', imageSrc:'images/products/peas.webp' },
    { id: 18, name: 'Red Chilli Powder', price: 5.49, quantity: 3, sub_category:'condiment', category:'pantry' ,imageSrc:'images/products/redchili.webp' },
    { id: 19, name: 'Canned Tomatoes', price: 2.49, quantity: 3, sub_category:'canned-veg', category:'pantry', imageSrc:'images/products/cannedtomat.webp' },
    { id: 20, name: 'Black Pepper', price: 10.99, quantity: 3, sub_category:'condiment', category:'pantry', imageSrc:'images/products/bpepper.webp' },
    { id: 21, name: 'Pancake Mix', price: 5.49, quantity: 3, sub_category:'pancake-waffle', category:'breakfast-cereal' , imageSrc:'images/products/pancake.webp'},
    { id: 22, name: 'Waffle Mix', price: 5.49, quantity: 3, sub_category:'pancake-waffle', category:'breakfast-cereal', imageSrc:'images/products/waffle.webp' },
    { id: 23, name: 'Froot Loops', price: 7.99, quantity: 3, sub_category:'cereal', category:'breakfast-cereal', imageSrc:'images/products/froot.webp'},
    { id: 24, name: 'Cheerios', price: 10.99, quantity: 3, sub_category:'cereal', category:'breakfast-cereal' , imageSrc:'images/products/cheer.webp'},
    { id: 25, name: 'Precut Watermelons', price: 5.99, quantity: 3, sub_category:'precut', category:'fresh-produce', imageSrc:'images/products/waterm.webp' },
    { id: 26, name: 'Shredded Carrots', price: 8.49, quantity: 8, sub_category:'precut', category:'fresh-produce', imageSrc:'images/products/carrot.webp'},
    { id: 27, name: 'Roses', price: 9.49, quantity: 2, sub_category:'flower', category:'fresh-produce', imageSrc:'images/products/roses.webp' },
    { id: 28, name: 'Sunflowers', price: 9.49, quantity: 2, sub_category:'flower', category:'fresh-produce', imageSrc:'images/products/sun.webp' },
    { id: 29, name: 'Sweet Potato', price: 2.49, quantity: 2, sub_category:'rollback', category:'fresh-produce' , imageSrc:'images/products/sweetpotato.webp'},
    { id: 28, name: 'Salsa', price: 9.49, quantity: 2, sub_category:'salsa', category:'fresh-produce', imageSrc:'images/products/salsa.webp' },
    { id: 29, name: 'Queso Blanco', price: 5.49, quantity: 2, sub_category:'salsa', category:'fresh-produce', imageSrc:'images/products/questo.webp' },
    { id: 30, name: 'Asparagus', price: 3.49, quantity: 2, sub_category:'seasonal', category:'fresh-produce', imageSrc:'images/products/asp.webp' },
    { id: 31, name: 'Broccoli', price: 5.49, quantity: 2, sub_category:'new', category:'fresh-produce',  imageSrc:'images/products/broc.webp'},
    { id: 32, name: 'Deep Dish Pizza', price: 10.49, quantity: 3, sub_category:'pizza', category:'frozen' , imageSrc:'images/products/deeppizza.webp'},
    { id: 33, name: 'Hot Pockets', price: 2.49, quantity: 3, sub_category:'frozen-snack', category:'frozen', imageSrc:'images/products/hotpockets.webp'},
    { id: 34, name: 'Sausage Egg and Cheese', price: 10.99, quantity: 3, sub_category:'breakfast', category:'frozen', imageSrc:'images/products/sec.webp' },
    { id: 35, name: 'Cinnamon Toast Sticks', price: 5.49, quantity: 3, sub_category:'frozen-rollback', category:'frozen' , imageSrc:'images/products/cts.webp'},
    { id: 36, name: 'Chicken', price: 2.49, quantity: 3, sub_category:'meat', category:'frozen', imageSrc:'images/products/chick.webp' },
    { id: 37, name: 'Peanut Butter', price: 9.49, quantity: 3, sub_category:'pbs', category:'pantry', imageSrc:'images/products/pb.webp' },
    { id: 38, name: 'Jam', price: 5.49, quantity: 3, sub_category:'pbs', category:'pantry', imageSrc:'images/products/jam.webp' },
    { id: 39, name: 'Penne Pasta', price: 2.49, quantity: 3, sub_category:'pasta-pizza', category:'pantry', imageSrc:'images/products/penne.webp'},
    { id: 40, name: 'Sugar', price: 10.99, quantity: 3, sub_category:'pantry-rollback', category:'pantry',imageSrc:'images/products/sugar.webp' },
    { id: 41, name: 'Oats', price: 5.49, quantity: 3, sub_category:'oat-grit', category:'breakfast-cereal' , imageSrc:'images/products/oats.webp'},
    { id: 42, name: 'Grits', price: 5.49, quantity: 3, sub_category:'oat-grit', category:'breakfast-cereal' , imageSrc:'images/products/grits.webp'},
    { id: 43, name: 'Cinnamon Swirl', price: 7.99, quantity: 3, sub_category:'bread', category:'breakfast-cereal', imageSrc:'images/products/swirl.webp' },
    { id: 44, name: 'Toaster Strudel', price: 10.99, quantity: 3, sub_category:'bc-rollback', category:'breakfast-cereal', imageSrc:'images/products/strudel.webp' },
    { id: 45, name: 'Pudding Mix', price: 2.49, quantity: 3, sub_category:'', category:'baking', imageSrc:'images/products/pudding.webp' },
    { id: 46, name: 'Pie Crust', price: 10.49, quantity: 3, sub_category:'', category:'baking', imageSrc:'images/products/piecrust.webp'},
    { id: 47, name: 'Apple Pie Fillings', price: 2.49, quantity: 3, sub_category:'', category:'baking', imageSrc:'images/products/applepie.webp'},
    { id: 48, name: 'Large Pan', price: 10.49, quantity: 3, sub_category:'', category:'baking', imageSrc:'images/products/largepan.webp'},
    { id: 49, name: 'Hersheys Kisses', price: 1.49, quantity: 3, sub_category:'', category:'candy', imageSrc:'images/products/kisses.webp'},
    { id: 50, name: 'Doritos', price: 2.49, quantity: 3, sub_category:'', category:'snacks', imageSrc:'images/products/doritos.webp' },

];

const categorySelect = document.getElementById("subcategory-select");
const productList = document.getElementById("product-list");

function populateProductList(category, sub_category, prod_name) {
    // Clear the product list
    productList.innerHTML = "";

    products
        .filter(product => (category === "all" || product.category === category) && (sub_category === "all" || product.sub_category === sub_category) && (prod_name === "all" || product.name.toLowerCase().includes(prod_name)))
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
    category_list = ["fresh-produce", "frozen", "pantry", "breakfast-cereal"];
    if (category_list.includes(selectedCategory)){
        populateProductList(selectedCategory, "all", "all");
    }
    else{
        populateProductList("all", selectedCategory, "all");
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
        total_price += parseFloat(item.price.toFixed(2) * item.quantity)
        cartItemsElement.appendChild(cartItem);
    });

    const cartItem = document.createElement("li");
    cartItem.textContent = `Cart Total - Price: $${total_price.toFixed(2)}`;
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
