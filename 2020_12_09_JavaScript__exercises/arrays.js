// prompt que demani un string amb 3 paraules i converteixi a un array i endreça per ordre alfabètic
// i console.log en llista
let llista = prompt("Introdueix una llista d'elements separada per comes i sense espai");
let llistaArray = llista.split(",");

for (i = 0; i < llistaArray.length; i++){
    llistaArray[i] = llistaArray[i].trim();
}

let llistaArrayAlfabetic = llistaArray.sort();

console.log("Has de comprar:")
for (const items of llistaArrayAlfabetic) {
    console.log(`  - ${items}`);
}