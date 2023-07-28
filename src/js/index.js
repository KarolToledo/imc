function calcularIMC() {
  // Obtém os valores do peso e altura do formulário
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  // Calcula o IMC
  let imc = peso / (altura * altura);

  // Arredonda o resultado para duas casas decimais
  imc = imc.toFixed(2);

  // Exibe o resultado do IMC no elemento de saída
  let resultadoElement = document.getElementById("resultado");

  switch (resulta.doElement) {
    case (imc < 18.5):
      console.log("Seu IMC é: " + imc + " - Abaixo do peso ideal")
      break
    case (imc >= 18.5 && imc < 25):
      console.log("Seu IMC é: " + imc + " - Peso ideal")
      break
    case (imc >= 25 && imc < 30):
      console.log("Seu IMC é: "+ imc +" - Sobrepeso")
      break
    case (imc >=30 && imc < 35):
      console.log("Seu IMC é: "+ imc +"Obesidade grau I")
      break
    case (imc >= 35 && imc < 40):
      console.log("Seu IMC é: "+ imc +"Obesidade grau II")
      break
    default:
      console.log("Seu IMC é: "+ imc +"Obesidade grau III")
  }

  /*
   if (imc < 18.5) {
     resultadoElement.innerHTML = "Seu IMC é: " + imc + " - Abaixo do peso ideal";
   } else if (imc >= 18.5 && imc < 25) {
     resultadoElement.innerHTML = "Seu IMC é: " + imc + " - Peso ideal";
   } else if (imc >= 25 && imc < 30) {
     resultadoElement.innerHTML = "Seu IMC é: " + imc + " - Sobrepeso";
   } else if (imc >= 30 && imc < 35) {
     resultadoElement.innerHTML = "Seu IMC é: " + imc + " - Obesidade grau I";
   } else if (imc >= 35 && imc < 40) {
     resultadoElement.innerHTML = "Seu IMC é: " + imc + " - Obesidade grau II";
   } else {
     resultadoElement.innerHTML = "Seu IMC é: " + imc + " - Obesidade grau III";
  }*/
}
 