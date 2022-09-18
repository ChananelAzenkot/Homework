let products = [
    [1,'Product 1', 4],
    [2,'Product 2', 8],
    [3,'Product 3', 5],
    [4,'Product 4', 10]
];
let shoppingCart = [];
function addToCart(product) {
    shoppingCart.push(products[product-1]);
    renderCartFromArray();
}
function renderCartFromArray() {
    document.getElementById("shoppingCart").innerHTML = ''; //removes all the HTML content.
    for (let i = 0; i < shoppingCart.length; i++) {
        let productHTML = document.createElement("div");
        let productDescription = document.createTextNode(shoppingCart[i][1]+' costs '+shoppingCart[i][2]);
        let removeBtn = document.createElement('button');

        removeBtn.setAttribute('onclick', 'removeProduct('+shoppingCart[i][0]+')'); //sets an attribute to the button
        removeBtn.textContent = 'remove';
        productHTML.appendChild(productDescription);
        productHTML.appendChild(removeBtn);

        document.getElementById("shoppingCart").appendChild(productHTML);
    }
}
function removeProduct(product) {
    let j = 0;
    for(let i = 0; i < shoppingCart.length && j < 1; i++) {
        if(shoppingCart[i][0] == product) {
            shoppingCart.splice(i,1); //removes the array item i.
            renderCartFromArray();
            j++;
        }
    }
}