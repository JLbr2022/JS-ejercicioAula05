/*
 * algoritmo that ask for a person data and show the person data and shows
 * the oldest person in the list.
 * Using statements: table, prompt(), for and/or while loops, if/else and
 * objects to store the data person.
 */

// declaración de variables
let i = 0;
let nName = String;
let nAge = Number;
let person = [];
let followNext = true;
let personTemp = 0;

while (followNext) {
  nName[i] = prompt(
    "Escriba su nombre:",
    "deje en blanco para terminar y ver resultados"
  );

  // INICIO - Condicionales para romper el ciclo While

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

  // FIN - Condicionales para romper el ciclo While

  // Creación object person
  person[i] = {
    name: nName[i],
    age: nAge[i],
  };

  // creación de algoritmo para determinar la persona con mayor edad
  if (person[i].age > personTemp) {
    personTemp = person[i].age;
    var oldPersonObj = {
      oldPersonName: person[i].name,
      oldPersonAge: person[i].age,
    };
  }
  i++;
}

// Ciclo FOR para mostrar los datos de la persona en una tabla por consola
if (i > 0) {
  for (let i = 0; i < person.length; i++) {
    console.table(person[i]);
  }
  // Mostrando la persona con mayor edad
  console.log(
    "La persona de mayor edad es: " +
      oldPersonObj.oldPersonName +
      " con " +
      oldPersonObj.oldPersonAge +
      " años de edad"
  );
} else {
  alert("No hay datos para mostrar");
}
