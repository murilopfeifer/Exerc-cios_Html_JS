function escolher() {
    var fred = document.getElementById("fred");
    var fyel = document.getElementById("fyel");
    var fgre = document.getElementById("fgre");
    var fblue = document.getElementById("fblue");

    if (fred.checked == true)
        document.body.style.backgroundColor = "Brown";

    else if (fyel.checked == true)
        document.body.style.backgroundColor = "Goldenrod";

    else if (fgre.checked == true)
        document.body.style.backgroundColor = "#556B2F";

    else if (fblue.checked == true)
        document.body.style.backgroundColor = "SteelBlue";

    else
        alert("Nenhum Fundo Selecionado");
}

