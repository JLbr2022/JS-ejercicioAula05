/*
 * JavaScript program which ask for a person data and shows the oldest person in the list.
 * Using statements: console.table, alert(), prompt(), for and while loops, array, if/else statments and
 * objects to store all the data person.
 */

// declaración de variables

var followNext = true;
var continuar = true;
var nName = String;
var nAge = Number;
var i = 0;
var person = [];
var personTemp = 0;

while (followNext) {
  // Validación: continuación para agregar nuevo registro
  continuar = confirm("¿Desea agregar otra persona?");

  if (continuar) {
    nName[i] = prompt("Escriba su nombre:");

    nAge[i] = prompt("Escriba su edad:");

    // Creación object person
    person[i] = {
      name: nName[i],
      age: nAge[i],
    };

    // Cálculo, persona con mayor edad
    if (person[i].age > personTemp) {
      personTemp = person[i].age;
      var oldPersonObj = {
        oldPersonName: person[i].name,
        oldPersonAge: person[i].age,
      };
    }
    i++;
  } else {
    followNext = false;
    break;
  }
}

// Mostrando registros en formato de tabla, por cónsola

if (i > 0) {
  for (let i = 0; i < person.length; i++) {
    console.table(person[i]);
  }

  // Cálculo, persona con mayor edad

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
