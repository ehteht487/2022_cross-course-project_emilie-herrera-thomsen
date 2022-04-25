
const container = document.querySelector(".coffee-products")

const url = "https://freshfrontend.com/flowerpower/wp-json/wc/store/products/";

async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults)
        createHMTL(getResults)
    }
    catch(error) {
        console.log(error)
    }
}

getProducts();


function createHMTL(products) {
    products.forEach(function(product){
        container.innerHTML += `<a href="specific.html?id=${product.id}" class="product">
                                <h3 class"brown">${product.name}</h3>
                                <img src="${product.images[0].src}" alt="${product.name}">
                                <p>${product.prices.price}   ${product.prices.currency_code}</p>
                                </a>`        
    })
}
