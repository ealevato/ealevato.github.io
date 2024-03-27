const precioTarifaSocial50 = 5;
const precioTarifaSocial100 = 10;
const precioResidencial50 = 10;
const precioResidencial100 = 15;
const precioComercial50 = 15;
const precioComercial100 = 20;

function calcularConsumo() {
  var categoria = document.getElementById("categoria").value;
  var consumo = document.getElementById("consumo").value;
  var resultado;

  if (categoria === "residencial") {
    if (consumo < 50) {
      resultado = consumo * precioResidencial50;
    } else {
      resultado = consumo * precioResidencial100;
    }
  } else if (categoria === "comercial") {
    if (consumo < 50) {
      resultado = consumo * precioComercial50;
    } else {
      resultado = consumo * precioComercial100;
    }
  } else if (categoria === "tarifa-social") {
    if (consumo < 50) {
      resultado = consumo * precioTarifaSocial50;
    } else {
      resultado = consumo * precioTarifaSocial100;
    }
  }

  document.getElementById("total").innerHTML = "Total: " + resultado;
}
