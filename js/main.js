/*
 * algoritmo that ask for a person data and show the person data using
 * a table, prompt(), for and/or while loops, if/else statements and
 * objects to store the data person.
 */

// declaración de variables
let i = 0;
let nName = String;
let nAge = Number;
let person = [];
let followNext = true;

while (followNext) {
  nName[i] = prompt(
    "Escriba su nombre:",
    "deje en blanco para terminar y ver resultados"
  );

  if (nName[i] == null || nName[i] == "") {
    followNext = false;
    break;
  }

  nAge[i] = Number(
    prompt("Escriba su edad: ", "deje en blanco para terminar y ver resultados")
  );

  if (nAge[i] == null || nAge[i] == "") {
    followNext = false;
    break;
  }

  // Creación de objeto persona para almacenar sus datos
  person[i] = {
    name: nName[i],
    age: nAge[i],
  };

  i++;
}

// Ciclo FOR para mostrar los datos de la persona en una tabla por consola
for (let i = 0; i < person.length; i++) {
  console.table(person[i]);
}
