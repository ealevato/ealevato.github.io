// Cuadro Tarifario
let cuadroTarifario = [
  {
    categoria: "residencial",
    consumoDesde: 0,
    consumoHasta: 50,
    precioCF: 10,
    precioCV: 1,
  },
  {
    categoria: "comercial",
    consumoDesde: 0,
    consumoHasta: 50,
    precioCF: 20,
    precioCV: 2,
  },
  {
    categoria: "tarifa-social",
    consumoDesde: 0,
    consumoHasta: 50,
    precioCF: 5,
    precioCV: 0.5,
  },
];

function calcularConsumo() {
  var categoria = document.getElementById("categoria").value;
  var consumo = document.getElementById("consumo").value;
  var resultado;

  if (categoria === "residencial") {
    if (consumo < 50) {
      resultado = consumo * cuadroTarifario[0].precioCV;
    } else {
      resultado = consumo * cuadroTarifario[0].precioCF;
    }
  } else if (categoria === "comercial") {
    if (consumo < 50) {
      resultado = consumo * cuadroTarifario[1].precioCV;
    } else {
      resultado = consumo * cuadroTarifario[1].precioCF;
    }
  } else if (categoria === "tarifa-social") {
    if (consumo < 50) {
      resultado = consumo * cuadroTarifario[2].precioCV;
    } else {
      resultado = consumo * cuadroTarifario[2].precioCF;
    }
  }

  document.getElementById("total").innerHTML = "Total: " + resultado;
}

function generarTabla() {
  var tableBody = document.getElementById("tarifas-body");

  tableBody.innerHTML = "";

  for (var i = 0; i < cuadroTarifario.length; i++) {
    var row = document.createElement("tr");

    var cellCategoria = document.createElement("td");
    cellCategoria.textContent = cuadroTarifario[i].categoria;
    row.appendChild(cellCategoria);

    var cellConsumoDesde = document.createElement("td");
    cellConsumoDesde.textContent = cuadroTarifario[i].consumoDesde;
    row.appendChild(cellConsumoDesde);

    var cellConsumoHasta = document.createElement("td");
    cellConsumoHasta.textContent = cuadroTarifario[i].consumoHasta;
    row.appendChild(cellConsumoHasta);

    var cellPrecioCF = document.createElement("td");
    cellPrecioCF.textContent = cuadroTarifario[i].precioCF;
    row.appendChild(cellPrecioCF);

    var cellPrecioCV = document.createElement("td");
    cellPrecioCV.textContent = cuadroTarifario[i].precioCV;
    row.appendChild(cellPrecioCV);

    tableBody.appendChild(row);
  }
}
