function calcular() {


    let resultado = document.getElementById("resultado");
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);


    if (peso <= 0 || altura <= 0) {
        resultado.innerHTML =
            "Digite um peso e uma altura válidos!";

        resultado.classList.add("resulStyle");
        return;
    }


    let imc = peso / (altura * altura);

    resultado.innerHTML =
        "Seu IMC é: " + imc.toFixed(2);

    resultado.classList.add("resulStyle");


}