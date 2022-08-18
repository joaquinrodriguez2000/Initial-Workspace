const AUTOS_API = "https://japceibal.github.io/emercado-api/cats_products/101.json"

let autosArray = [];

fetch (AUTOS_API)
.then(function(respuesta) {
    return respuesta.json()
})
.then (function(datos) {
    autosArray = datos.products;

    let htmlContentToAppend = '';
    for (let auto of autosArray) {
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src=` + auto.image + ` alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ auto.name +` - `+auto.currency +` `+ auto.cost +` </h4> 
                        <p> `+ auto.description +`</p> 
                        </div>
                        <small class="text-muted">` + auto.soldCount + ` vendidos </small> 
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("autosproductos").innerHTML = htmlContentToAppend; 
    }

})