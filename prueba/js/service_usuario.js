function desplegarMenu(){
    var cad = "";
    var divProductos = document.querySelector(".mostrar");

    cad += "<div class='opciones-movil'>";
    cad += "<p>Home</p>";
    cad += "<p>About</p>";
    cad += "<p>Projects</p>";
    cad += "<p>Contract</p>";


    cad += "</div>";
    divProductos.innerHTML = cad;
}