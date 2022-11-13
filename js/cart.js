const BUYING_CART_INFO_URL = `https://japceibal.github.io/emercado-api/user_cart/25801.json`;

let cartProduct = [];
let DOLLAR_SYMBOL = "USD ";
updateSubtotal = 0;
shippingPercentage = 0.15;

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){
  let subtotalCostHTML = document.getElementById("subtotalText");
  let shippingCostHTML = document.getElementById("shippingCostText");
  let totalCostHTML = document.getElementById("totalCostCartText");

  let subtotalCostToShow = DOLLAR_SYMBOL + updateSubtotal;
  let shippingCostToShow = DOLLAR_SYMBOL + Math.round(updateSubtotal * shippingPercentage);
  let totalCostToShow = DOLLAR_SYMBOL + (Math.round((updateSubtotal * shippingPercentage) + updateSubtotal));

  subtotalCostHTML.innerHTML = subtotalCostToShow;
  shippingCostHTML.innerHTML = shippingCostToShow;
  totalCostHTML.innerHTML = totalCostToShow;
}



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
  updateSubtotal = amount * cart.unitCost;
  updateTotalCosts();

}

document.getElementById("countInput").addEventListener("change", function(){ 
    amount = this.value;
    subTotal(amount);
});

document.getElementById("envioPremium").addEventListener("change", function(){
  comissionPercentage = 0.15;
  updateCosts();
});

document.getElementById("envioExpress").addEventListener("change", function(){
  comissionPercentage = 0.07;
  updateCosts();
});

document.getElementById("envioStandard").addEventListener("change", function(){
  comissionPercentage = 0.05;
  updateCosts();
});



}

});




    function validityForm() {
    iguales = 1;
      let  forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        }) 

    let street = document.getElementById('streetRecipient').value;
    let number = document.getElementById('numberRecipient').value;
    let corner = document.getElementById('cornerRecipient').value;
    let countRecipient  = document.getElementById('countInput').value;
    console.log(street, number, corner, countRecipient);

    if (street.length == 0 || number.length == 0 || corner.length == 0 || countRecipient == 0 ) {
  
      return;
    }
     else if (document.getElementById("envioPremium").checked === false || document.getElementById("envioExpress").checked === false || document.getElementById("envioExpress").checked === false) {
  
      return ; 
      
}     

  else {
        alert("¡Has comprado con éxito!");    
  } 

  
}






