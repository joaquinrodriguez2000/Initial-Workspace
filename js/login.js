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