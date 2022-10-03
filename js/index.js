document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

const navUsername = document.getElementById("username")
const username = localStorage.getItem("text")
navUsername.innerHTML = `<a class="nav-link" href="my-profile.html">${username}
</a>`

navUsername.innerHTML = `

        <a class="nav-link dropdown-toggle" href="my-profile.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">${username}</a>
        <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
            <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
            <li><a onclick="cerrarSesion()" class="dropdown-item" href="index.html">Cerrar sesión</a></li>
        </ul>
    
    `;

function cerrarSesion() {
  localStorage.removeItem("text");
}
