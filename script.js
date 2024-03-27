function parseCSV(csvData) {
  const lines = csvData.split("\n");
  const data = [];

  for (let line of lines) {
    const row = line.split(";");
    data.push(row);
  }
  // Pass the data to a variable in your HTML
  const jsonData = JSON.stringify(data);

  // console.log(jsonData);
  generateTableRows(jsonData);
}

function fetchAndParseCSV() {
  fetch("tarifas.csv")
    .then((response) => response.text())
    .then((csvData) => {
      parseCSV(csvData);
    })
    .catch((error) => console.error("Error fetching CSV file:", error));
}

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

// Function to generate table rows
function generateTableRows(jsonData) {
  var tableBody = document.getElementById("tarifas-body");

  tableBody.innerHTML = "";

  var data = JSON.parse(jsonData);

  for (var i = 1; i < data.length; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < data[i].length; j++) {
      var cell = document.createElement("td");
      cell.textContent = data[i][j];
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
}

window.addEventListener("load", fetchAndParseCSV);
