document.getElementById("form-login").addEventListener('submit', function(evento) {

    var campos = document.getElementsByClassName('form-control');
    var validacion = true

    for (let i = 0; i < campos.length; i++) {
        if (!campos[i].value.length > 0) {
            validacion = false;
        }
    }
    
    if (validacion) {
        evento.preventDefault();
        window.location.href = 'home.html';
    } else {
        evento.preventDefault();
        alert('Campos de Usuario y/o Constraseña están vacíos');
    }
})

const inputEmail = document.getElementById("email")
const buttonText = document.getElementById("submit")

buttonText.addEventListener("click", (evt) => {
    // Si tenemos texto ingresado en el email, lo guardamos en el localStorage
    
    // Solución:
    if (inputEmail.value) { 
    localStorage.setItem("text", inputEmail.value);
    } else {
    alert("Por favor, ingresa un texto");

    }

}); 




