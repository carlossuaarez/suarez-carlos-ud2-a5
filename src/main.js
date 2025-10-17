//PT 1: BUCLES BASICOS

// Ejercicio 1
function bucle1() {
  console.log("Ejercicio 1: Bucle for del 5 al 10:");
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}
bucle1();

// Ejercicio 2
document
  .getElementById("rangoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const limiteInferior = Number(
      document.getElementById("limiteInferior").value
    );
    const limiteSuperior = Number(
      document.getElementById("limiteSuperior").value
    );
    const resultado = document.getElementById("resultado");

    if (isNaN(limiteInferior) || isNaN(limiteSuperior)) {
      resultado.textContent = "Por favor, introduce números válidos.";
      return;
    }
    if (limiteInferior > limiteSuperior) {
      resultado.textContent =
        "El límite inferior no puede ser mayor que el superior.";
      return;
    }

    let numeros = "";
    for (let i = limiteInferior; i <= limiteSuperior; i++) {
      numeros += i + " ";
    }

    resultado.textContent = `Números del ${limiteInferior} al ${limiteSuperior}: ${numeros}`;
  });

// Ejercicio 3 - while pares hasta 20
function bucle3() {
  console.log("Ejercicio 3: Bucle while de pares hasta el 20:");
  let i = 0;
  while (i <= 20) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  }
}
bucle3();

// Ejercicio 4
document
  .getElementById("rangoForm2")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const limiteInferior = Number(
      document.getElementById("limiteInferior2").value
    );
    const limiteSuperior = Number(
      document.getElementById("limiteSuperior2").value
    );
    const resultado = document.getElementById("resultado2");

    if (isNaN(limiteInferior) || isNaN(limiteSuperior)) {
      resultado.textContent = "Por favor, introduce números válidos.";
      return;
    }
    if (limiteInferior > limiteSuperior) {
      resultado.textContent =
        "El límite inferior no puede ser mayor que el superior.";
      return;
    }
    let i = limiteInferior;
    let pares = "";

    while (i <= limiteSuperior) {
      if (i % 2 == 0) {
        pares += i + " ";
      }
      i++;
    }

    resultado.textContent = `Números pares del ${limiteInferior} al ${limiteSuperior}: ${pares}`;
  });

// Ejercicio 5 - do-while
function bucle5() {
  console.log("Ejercicio 5: Bucle do-while para múltiplos de 5 hasta el 50");
  let i = 5;
  do {
    if (i % 5 == 0) {
      console.log(i);
    }
    i++;
  } while (i <= 50);
}
bucle5();

//Ejercicio 6
document
  .getElementById("rangoForm3")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const limiteInferior = Number(
      document.getElementById("limiteInferior3").value
    );
    const limiteSuperior = Number(
      document.getElementById("limiteSuperior3").value
    );
    const resultado = document.getElementById("resultado3");

    if (isNaN(limiteInferior) || isNaN(limiteSuperior)) {
      resultado.textContent = "Por favor, introduce números válidos.";
      return;
    }
    if (limiteInferior > limiteSuperior) {
      resultado.textContent =
        "El límite inferior no puede ser mayor que el superior.";
      return;
    }
    let i = limiteInferior;
    let multiplos = "";

    do {
      if (i % 5 == 0) {
        multiplos += i + " ";
      }
      i++;
    } while (i <= limiteSuperior);

    resultado.textContent = `Números pares del ${limiteInferior} al ${limiteSuperior}: ${multiplos}`;
  });

//PT 2: CONTROL DE FLUJO EN BUCLES

//Ejercicio 1

function bucle21() {
  //Ejercicio 2.1: uso de break en un bucle for
  console.log("Ejercicio 2.1: uso de break en un bucle for");
  for (let i = 0; i <= 100; i++) {
    if (i === 11) {
      console.log("Hemos llegado a 10. ¡Stop!");
      break;
    }
    console.log(i);
  }
}
bucle21();

//Ejercicio 2

function bucle22() {
  //Ejercicio 2.2: uso de continue en un bucle for
  console.log("Ejercicio 2.1: uso de continue en un bucle for");
  for (let i = 1; i <= 20; i++) {
    if (i == 13) {
      console.log("Saltando el número 13...");
      continue;
    }

    if (i === 17) {
      console.log("Se encontró el 17. ¡Stop!");
      break;
    }

    console.log("Número:", i);
  }
}

bucle22();

//Ejercicio 3: Crea un bucle anidado que imprima en consola un cuadrado 5×5 de números.
function bucle23() {
  console.log("====Cuadrado 5x5 de números====");

  for (let fila = 1; fila <= 5; fila++) {
    let linea = "";
    for (let columna = 1; columna <= 5; columna++) {
      linea += columna + " ";
    }
    console.log(linea);
  }

  console.log("=== Fin del cuadrado ===");
}
bucle23();
