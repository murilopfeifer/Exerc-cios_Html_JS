function ocultatexto() {
    document.getElementById("texto").style.display = 'none';
}
function mostrartexto() {
    document.getElementById("texto").style.display = 'block'
}

/* OUTRA MANEIRA

function mudar() {
    var par = document.getElementById("texto");

    if (par.style.visibility == "hidden") {
        par.style.visibility = "visible";
    }
    else {
        par.style.visibility = "hidden";
    }
}
*/
