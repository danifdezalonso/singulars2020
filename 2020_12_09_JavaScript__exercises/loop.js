// ---- TABLA DEL 3-----
for (let i = 0; i <10; i++) {
    console.log(3*(i));
    console.log(`3 * ${i} = ${3*i}`);
    // aquí el teu codi (ha de mostrar a la consola la taula de multiplicar del 3)
};

// ---- BUCLE 0 A 100 AVISE CON ALERT EN EL 50 Y EN EL 100 -----
for (let i = 0; i <= 100; i++) {
        if ( i == 50 ) {
            alert("Anem pel 50");
        } else if ( i == 100 ) {
            alert("Anem pel 100");
        }
};

// --- Bucle que nomes mostri el numeros parells del 0 al 20 ---
for (let i = 0; i <=20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
};

// recorre números muestra el seleccionado (con un prompt) de manera diferente (con CSS) en la consola

let numSeleccionadoPrompt = prompt("Escribe un numero entre el 1 y el 25");
let numSeleccionado = parseInt(numSeleccionadoPrompt);

for (let i = 0; i <= 25; i++) {
    if (i == numSeleccionado) {
        console.log(`%c ${numSeleccionado}`, "color:red; font-size: 24px",)
    } else{
    console.log(i);
    }
};

// ---- TABLAS DE MULTIPLICAR -----
for (let x = 0; x<=10; x++){ // x és l'indicador de la taula
    for (let i = 0; i <=10; i++) { // i és la línea de multiplicació 
        console.log(`${x} * ${i} = ${x*i}`); // x * i = 1 * 0
    };
};
