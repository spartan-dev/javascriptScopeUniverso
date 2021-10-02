console.log("malos dias");
/* @Rules
    Grandma, Tiger, Ninja
    Ninja beats Tiger (since it's a Ninja)
    Tiger eats Grandma
    Grandma beats Ninja (since she's the Ninja's Mom)
 */
/* 
  steps to do 
  1. Write an array called "players" with the 3 characters (Grandma, Tiger, Ninja)
  2. Write a variable called "computerChoice" and stores a random character from the array
  3. Write a function called "game" that will receieve two parameters (player1, player2), the player2 should be the computerChoice
  4. There are 9 possible matchs, 3 where player1 wins, 3 where player2 wins, 3 
    where's a tie, according
    to the results, show the winner in console, and why the character won
*/
let nombres = ["kain", "Emmanuel", "Maria"];
// version con for normal
const arrayNames = ["Pedro", "Jake", "Joan"];

for (let i = 0; i < arrayNames.length; i++) {
  console.log(arrayNames[i]);
}
// version con forEach
/* nombres.forEach(function(name){
  console.log(name)
}) */

let materias = [10, 9, 10, 8, 5];
let resultado = [];
// forEach no regresa una copia del arreglo original
// debemos iniciar uno vacio para llenarlo con los         resuldatos
/* materias.forEach(function(materia){
  resultado.push(materia * 2)
}) */

// foEach
/* materias.forEach( (materia) => resultado.push(materia * 2))

console.log(resultado, "de las materias multi :skul:") */
// scope de funciones en javascript
// este es un variable global
// global este es el valor global para usar en todos lados
const pastel = "big mother fucker choco power";

//estructura de una funcion con arrowFunction
//nombredelaFuncion = ()=> {}

function recetaPastel(name) {
  // mercedes
  // este es el universo 1
  //resultado de seguir la receta
  const pastelillo = "Fresa con Chispas";
  let siMeGusto = false;
  if (siMeGusto) {
    //invoco comewr paster y le paso mi pastel
    comerPastel();
  } else {
    regalarPastel(name); // viaje galactivo interestelar mamalon
  }
}

comerPastel = () => {
  // este es el universo 2
  console.log("universo 2 se come el pastel de :", pastelillo);
};

regalarPastel = (fulano) => {
  // mercedes
  // este es el universo 3
  console.log(`me regalaron un pastel wiiii me lo regalo :${fulano}`);
};

//invocacion  \m/
recetaPastel("Mercedes"); // main java
//comerPastel()
