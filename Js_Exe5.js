function verifica() {

    var cbox = document.getElementsByName("check");
    var cont = 0;

    for (i = 0; i < cbox.length; i++) {

        if (cbox[i].checked == true) {
            cont++;
        }
    }

    if (cont >= 2) {
        document.getElementById("aplica").removeAttribute("disabled");
    }
    else {
        document.getElementById("aplica").setAttribute("enabled");
    }
}



