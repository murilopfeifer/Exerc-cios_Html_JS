function validar() {


    alert("Salvo com sucesso!");
    var nome = document.getElementById("nome").value;
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;
    if (nome != "" && senha1 != "" && senha2 != "") {
        if (senha1 == senha2) {
            if (senha1.length > 5 && senha1.length <= 10) {
                alert("Salvo com sucesso!");
            }
            else {
                alert("Senha sem os requisitos!");
            }
        }
        else {
            alert("As senhas precisam ser iguais!!");
        }
    }
    else {
        alert("Preencha todos os campos!");
    }
}