const specific = document.querySelector(".specific");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id)


const url = "https://freshfrontend.com/flowerpower/wp-json/wc/store/products/" + id;

async function getProduct() {
    try {
        const response = await fetch(url);
        const details = await response.json()
        console.log(details)
        
        createHMTL(details)
    }
    catch(error) {
        console.log(error)
    }
}

getProduct()

function createHMTL(details) {
    specific.innerHTML = `<div class="specific1">
                        <h2>${details.name}</h2>
                        <p>${details.prices.price}   ${details.prices.currency_code}</p>
                        </div>
                        <div class="specific1">                       
                        <img src="${details.images[0].src}" alt="${details.name}" class="pr">
                        </div>`
}