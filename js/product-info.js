const PRODUCT_INFO_API = `https://japceibal.github.io/emercado-api/products/${localStorage.getItem("prodID")}.json`
//  URL de la información de los productos, de forma general para todos. 
const PRODUCT_INFO_COMMENTS_API = `https://japceibal.github.io/emercado-api/products_comments/${localStorage.getItem("prodID")}.json`;

fetch (PRODUCT_INFO_API)
.then(function(response) {
return response.json()
})
.then (function(data) {

    let htmlContentToAppend = "";

    htmlContentToAppend += `
    <h2>${data.name}</h2>
    <hr class="mb-4">
    
    <h4>Precio</h4>
    <p>${data.currency} ${data.cost}</p>   

    <h4>Descripción</h4>
    <p>${data.description}</p>

    <h4>Categoría</h4>
    <p>${data.category}</p>
    
    <h4>Cantidad de Vendidos</h4>
    <p>${data.soldCount}</p> 

    <h4>Imágenes Ilustrativas</h4>
    <div class="col-3">
        <img src="${data.images[0]}" alt="" class="img-thumbnail">
        <img src="${data.images[1]}" alt="" class="img-thumbnail">
        <img src="${data.images[2]}" alt="" class="img-thumbnail">
        <img src="${data.images[3]}" alt="" class="img-thumbnail">
    </div>

    <hr class="mb-4">
    
    <h4>Comentarios</h4>

    `;
        
    document.getElementById("productInfo").innerHTML = htmlContentToAppend; 

    let comentariosArray = [];

    fetch (PRODUCT_INFO_COMMENTS_API)
    .then(function(respuesta) {
    return respuesta.json()
    })
    .then (function(comment) {
        comentariosArray = comment;
        console.log(comment);

        function showStars(rate){
    
            let roundNumber = Math.round(rate);
            console.log(roundNumber);
            if (roundNumber == 1)
            return `
            <span style="color:yellow">★</span><span style="color:grey">☆☆☆☆</span>
            `
            if (roundNumber ==2 )
            return `
            <span style="color:yellow">★★</span><span style="color:grey">☆☆☆</span>`
            if (roundNumber ==3)
            return `
            <span style="color:yellow">★★★</span><span style="color:grey">☆☆</span>`
            if (roundNumber == 4)
            return `
            <span style="color:yellow">★★★★</span><span style="color:grey">☆</span>`
            if (roundNumber == 5)
            return `
            <span style="color:yellow">★★★★★</span><span style="color:grey"></span>`       
            }
    
        for(let i = 0; i < comentariosArray.length; i++){
            let comentario = comentariosArray[i];
    
            let comentarioToAppend = "";
    
            comentarioToAppend += `
            
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${comentario.user} ${comentario.dateTime} Puntaje: ${showStars(comentario.score)} </h4>
                        </div>
                        <p class="mb-1">${comentario.description}</p>
                    </div>
                </div>
            </div>
    
            `;
        
            document.getElementById("productComment").innerHTML += comentarioToAppend; 
        }

        console.log(comentariosArray)
    
    }); 

    let nuevoComentario = []; 
    let botonEnviarComentario = document.getElementById("enviarComentario"); 

    botonEnviarComentario.addEventListener("click", function(evento) {
        let opinion = document.getElementById("myOpinion").value;
        let puntuacion = document.getElementById("puntuacion").value;
        let newuser = localStorage.getItem("text");

        if (opinion) {
            evento.preventDefault();

            nuevoComentario.push( [{
                description: opinion,
                score: puntuacion,
                user: newuser
            }]);

            function showStars(rate){
    
                let roundNumber = Math.round(rate);
                console.log(roundNumber);
                if (roundNumber == 1)
                return `
                <span style="color:yellow">★</span><span style="color:grey">☆☆☆☆</span>
                `
                if (roundNumber ==2 )
                return `
                <span style="color:yellow">★★</span><span style="color:grey">☆☆☆</span>`
                if (roundNumber ==3)
                return `
                <span style="color:yellow">★★★</span><span style="color:grey">☆☆</span>`
                if (roundNumber == 4)
                return `
                <span style="color:yellow">★★★★</span><span style="color:grey">☆</span>`
                if (roundNumber == 5)
                return `
                <span style="color:yellow">★★★★★</span><span style="color:grey"></span>`       
                }

            document.getElementById("productComment").innerHTML += `
            <div class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                               <h4 class="mb-1">${newuser} Puntaje: ${showStars(puntuacion)}</h4>
                            </div>
                            <p class="mb-1">${opinion}</p>
                        </div>
                    </div>
                </div>
        
                `;
        }

    });

});