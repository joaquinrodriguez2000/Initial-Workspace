const BUYING_CART_INFO_URL = `https://japceibal.github.io/emercado-api/user_cart/25801.json`;

let cartProduct = [];

fetch (BUYING_CART_INFO_URL)
.then(function(response) {
    return response.json()
    
})
.then (function(data) {
    cartProduct = data;

    for(let i = 0; i < cartProduct.articles.length; i++){
        let cart = cartProduct.articles[i];

let cartToAppend = '';

    cartToAppend += `
    <tr class="col-12 text-center table" >
        <td><img src="${cart.image}" style="width: 50px"></td>
        <td>${cart.name}</td>
        <td>${cart.currency} ${cart.unitCost}</td>
        <td align="center"><input type="number" class="form-control w-25" required value="1" min="0" id="countInput"></td>
        <td><p id="subT" class="fw-bold">${cart.currency} ${cart.count * cart.unitCost}</p></td>
    </tr>
`


document.getElementById("buyingCart").innerHTML = cartToAppend

function subTotal(amount) {
    document.getElementById("subT").innerHTML = `${cart.currency} ${amount * cart.unitCost}`
}
document.getElementById("countInput").addEventListener("change", function(){ 
    amount = this.value;
    subTotal(amount);
})
}
});







