//COR DE FONTE 
function fontebranca() {
    document.getElementById("texto").style.color = "white";
}
function fontepreta() {
    document.getElementById("texto").style.color = "black";
}

//COR DO PARÁGRAFO  
function fundoazul() {
    document.getElementById("texto").style.backgroundColor = "SteelBlue";
}
function fundoverde() {
    document.getElementById("texto").style.backgroundColor = "#556B2F";
}


var tamanho = 16;

// TAMANHO DE FONTE 
function bigfont() {
    tamanho++;
    document.getElementById("texto").style.fontSize = tamanho + "px";
}
function smallfont() {
    tamanho--;
    document.getElementById("texto").style.fontSize = tamanho + "px";
}
function normalfont() {
    document.getElementById("texto").style.fontSize = "100%";
}





// TEXTO MAÍUSCULO E MINÚSCULO  
function maiusculo() {
    var x = document.getElementById("texto");
    x.innerText = x.innerText.toUpperCase();

}
function minusculo() {
    var y = document.getElementById("texto");
    y.innerText = y.innerText.toLowerCase();

}
