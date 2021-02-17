console.log("JavaScript carregat des d'un document .js dins el <body>");

document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("Aquí començen els exercicis:");



//* ------------------------ Variables --------------------------

// exercici 1: intercanvi de variables

var primer, segon;

primer = 1;

segon = 2;

// TODO: aquí el teu codi

let tercer = segon;
segon = primer;
primer = tercer;

console.log(primer, segon); // ha de mostrar 2 1




//* ------------------------- Funcions --------------------------

// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la

// TODO: aquí la definició de psicolog() 
function psicologo() {
    return console.log("Com estàs?")
}

psicologo();


// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"
function pregunta(param1) {
    return console.log(`T'agrada ${param1}?`)
}
// TODO: aquí la definició de pregunta() 

pregunta("la pizza");


// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"
function pregunta2(param1) {
    return `T'agrada ${param1}`
}
// TODO: aquí la definició de pregunta2() 

console.log(pregunta2("la pizza") + " amb piña?");


// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

var m3 = 8;

function metresCubicsALitres() {
    const litres = 1000;
    return m3 * litres;
};

function mostrarSolució() {
    let operacioM3 = metresCubicsALitres();
    return console.log(`${m3} metres cúbics són ${operacioM3} litres`);
}
// TODO: aquí les definicions de metresCubicsALitres() i mostrarSolució() 
metresCubicsALitres()
mostrarSolució();

// exercici 5: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

var diners = 0;

// TODO: definició de afegirDiners() i gastarDiners() 
function afegirDiners(param1) {
    diners += param1
    return diners
};

function gastarDiners(param1) {
    diners -= param1
    return diners
};

afegirDiners(20);
gastarDiners(15);
afegirDiners(40);
gastarDiners(25);

console.log(diners); // això retornarà 20



//* ------------------------------ Condicionals --------------------------------

// exercici 6: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida

let talla = prompt("Quina talla de samarreta vols comprar, S, M, L o XL?") // TODO: editar el missatge del prompt()
let tallaArreglada = talla.replace(/\s/g, '');
let tallaDefinitiva = tallaArreglada.toUpperCase();
// TODO: estructura condicional que digui per la consola la talla escollida
if (tallaDefinitiva == "S") {
    console.log("Has escollit la talla S")
} else if (tallaDefinitiva == "M") {
    console.log("Has escollit la talla M")
} else if (tallaDefinitiva == "L") {
    console.log("Has escollit la talla L")
} else if (tallaDefinitiva == "XL") {
    console.log("Has escollit la talla XL")
} else {
    console.log("La talla seleccionada no existeix");
};

// exercici 7: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada

var radi = 5;
var mode = "P"; // "P" pel perímentre o "A" per l'àrea

// TODO: defineix la funció cercle amb dos modes
function cercle(param1, param2) {
    const pi = Math.PI
    let area = pi * (param1 * param1)
    let perimetre = 2 * pi * param1
    return console.log(`El area és ${area} i el perimetre és ${perimetre}`)
}

cercle(5);


// exercici 8: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

var costat = 3;
var costats = 5;

// TODO: defineix la funció poligon()
function poligon(longCostat, numCostats) {
    let apotema = longCostat / (2 * Math.tan(Math.PI / numCostats));
    P = longCostat * numCostats;
    A = P * apotema / 2;
    console.log(`El polígon regular de costat ${longCostat} i ${numCostats} costats té un perímetre de ${P} i un àrea de ${A}`);
}

poligon(costat, costats);


// exercici 9: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()

// TODO: defineix la funció botiga()
let item = prompt("Quin item vols, samarreta, pantaló o barret?").toLowerCase();
let itemArreglat = item.replace(/\s/g, '');

function botiga() {
    if (itemArreglat == "barret") {
        let barret = prompt("Quin tipus vols, copa, pirata, gorra o llana?").toLowerCase();
        let barretArreglat = barret.replace(/\s/g, '');
        let talla = prompt("Quina talla de barret vols comprar, S, M, L o XL?");
        let tallaArreglada = talla.replace(/\s/g, '');
        let tallaDefinitiva = tallaArreglada.toUpperCase();
        if (tallaDefinitiva == "S") {
            console.log(`Has escollit barret de ${barretArreglat} de la talla S`);
        } else if (tallaDefinitiva == "M") {
            console.log(`Has escollit barret de ${barretArreglat} de la talla M`);
        } else if (tallaDefinitiva == "L") {
            console.log(`Has escollit barret de ${barretArreglat} de la talla L`);
        } else if (tallaDefinitiva == "XL") {
            console.log(`Has escollit barret de ${barretArreglat} de la talla XL`);
        } else {
            console.log("La talla seleccionada no existeix");
        };
    } else if (itemArreglat == "samarreta" || itemArreglat == "pantaló" || itemArreglat == "pantalo") {
        let color = prompt("Quin color vols?", "negre");
        let colorArreglat = color.replace(/\s/g, '').toLowerCase();
        let talla = prompt("Quina talla de samarreta vols comprar, S, M, L o XL?")
        let tallaArreglada = talla.replace(/\s/g, '');
        let tallaDefinitiva = tallaArreglada.toUpperCase();
        if (tallaDefinitiva == "S") {
            console.log(`Has escollit ${itemArreglat} de color ${colorArreglat} amb la talla S`);
        } else if (tallaDefinitiva == "M") {
            console.log(`Has escollit ${itemArreglat} amb la talla M`)
        } else if (tallaDefinitiva == "L") {
            console.log(`Has escollit ${itemArreglat} amb la talla L`)
        } else if (tallaDefinitiva == "XL") {
            console.log(`Has escollit ${itemArreglat} amb la talla XL`)
        } else {
            console.log("La talla seleccionada no existeix");
        };
    }
}

var carrito = botiga();

console.log(carrito); // això tornarà "Has demanat un barret de pirata (talla L)"

//* ---------------------------- Mètodes numbers -------------------------------

// exercici 11: defineix una funció calculadora que agafi com a paràmentres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, potència, arrels quadrades i qúbiques)

// TODO: defineix la funció calculadora() (reutilitza la que vam fer a classe fa uns dies)


// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle

var c1, c2, c3;

c1 = 3;
c2 = 4;
c3 = 5;

console.log(triangleRectangle(c1, c2, c3)); // ha de tornar true

c1 = 4;
c2 = 5;
c3 = 6;

console.log(triangleRectangle(c1, c2, c3)); // ha de tornar false

// TODO: defineix la funció triangleRectangle()
function triangleRectangle(param1, param2, param3) {
    const primer = param1 * param1;
    const segon = param2 * param2;
    const tercer = param3 * param3;
    const pitagoritas = primer + segon;
    if (pitagoritas == tercer) {
        return true
    } else {
        return false
    }
}

// exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle

c1 = 30;
c2 = 40;

// TODO: defineix la funció calculaHipotenusa()
function calculaHipotenusa(param1, param2) {
    const primer = param1 * param1;
    const segon = param2 * param2;
    const hipotenusa2 = primer + segon;
    const hipotenusa = Math.sqrt(hipotenusa2);
    return hipotenusa;
}
console.log(calculaHipotenusa(c1, c2)); // ha de donar 50

// TODO: defineix la funció calculaAngles()
function calculaAngles(a, b) {
    let c3 = calculaHipotenusa(30, 40);
    let area1 = Math.asin(c1 / c3);
    let area2 = Math.asin(c2 / c3);
    return `L'alpha és ${area1}, la beta és ${area2}`

}
console.log(calculaAngles(c1, c2)); // ha de donar 30º i 60º



//* ---------------------------- Mètodes strings -------------------------------

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

// TODO: defineix la funció convertirEnEnter()
function convertirEnEnter(str) {
    str = str.replace(/[^\d.-]/g, '');
    return parseInt(str);
}
console.log(convertirEnEnter("hola89234")); // ha de tornar 89234
console.log(convertirEnEnter("43.35465adeu")); // ha de tornar 43
console.log(convertirEnEnter("amor45.9odi")); // ha de tornar 45


// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

// TODO: defineix la funció convertirEnDecimal()
function convertirEnDecimal(str) {
    str = str.replace("'", ".");
    str = str.replace(/[^\d.-]/g, '');
    return parseFloat(str)
}

console.log(convertirEnDecimal("hola89'234")); // ha de tornar 89.234
console.log(convertirEnDecimal("43'35adeu")); // ha de tornar 43.35
console.log(convertirEnDecimal("amor45.9odi")); // ha de tornar 45.9


// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

// TODO: defineix la funció valorAbsolut()
function valorAbsolut(value) {
    return Math.abs(value);
}

console.log(valorAbsolut(-3.14)); // ha de tornar 3.14
console.log(valorAbsolut(0)); // ha de tornar 0
console.log(valorAbsolut(1234.5678)); // ha de tornar 1234.5678
console.log(valorAbsolut(-1234.5678)); // ha de tornar 1234.5678


// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

var lletres = "abcdef";

console.log(lletraRandom(lletres)); // torna una lletra entre la a i la f

// TODO defineix la funció lletraRandom()
function lletraRandom(paraula) {
    paraula = paraula.replace("'", ".");
    let random = Math.floor(Math.random() * paraula.length) + 1;
    return paraula[random]
}

// exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata"
var paraules = separarParaules(text);

// TODO: defineix la funció separarParaules()
function separarParaules(str) {
    let arr = text.split(/\s+/);
    return arr.toString();
}

console.log(paraules);


// exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)

console.log(paraulaRandom(text));

// TODO defineix la funció paraulaRandom()
function paraulaRandom(str) {
    let arr = text.split(/\s+/);
    let random = Math.floor(Math.random() * arr.length) + 1;
    return arr[random]
}

// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

// TODO deifineix la funció horoscop()

function horoscop() {
    const mes = prompt("Escriu un mes per saber l'horoscop", "gener");
    const dia = prompt("Escriu una dia per saber l'horoscop", "19");
    switch (mes) {
        case "gener": // 01
            if (dia >= 21) {
                console.log("acuario");
            } else {
                console.log("capricornio");
            }
            break;
        case "febrer": // 02
            if (dia <= 19) {
                console.log("acuario");
            } else {
                console.log("piscis");
            }
            break;
        case "març": // 03
            if (dia <= 20) {
                console.log("piscis");
            } else {
                console.log("aries");
            }
            break;
        case "abril": // 04
            if (dia <= 20) {
                console.log("aries");
            } else {
                console.log("tauro");
            }
            break;
        case "maig": // 05
            if (dia <= 21) {
                console.log("tauro");
            } else {
                console.log("geminis");
            }
            break;
        case "juny": // 06
            if (dia <= 21) {
                console.log("geminis");
            } else {
                console.log("cancer");
            }
            break;
        case "juliol": // 07
            if (dia >= 23) {
                console.log("cancer");
            } else {
                console.log("leo");
            }
            break;
        case "agost": // 08
            if (dia <= 23) {
                console.log("leo");
            } else {
                console.log("virgo");
            }
            break;
        case "septembre": // 09
            if (dia <= 23) {
                console.log("virgo");
            } else {
                console.log("libra");
            }
            break;
        case "octubre": // 10
            if (dia <= 23) {
                console.log("libra");
            } else {
                console.log("escorpio");
            }
            break;
        case "novembre": // 11
            if (dia <= 22) {
                console.log("escorpio");
            } else {
                console.log("sagitario");
            }
            break;
        case "desembre": // 12
            if (dia <= 21) {
                console.log("sagitario");
            } else {
                console.log("capricornio");
            }
            break;
    }
}
console.log(horoscop());

//* ------------------------------ Bucle for ------------------------------------
// exercici 21: fes un bucle que escrigui 10 vegades a la consola alternant un color i un altre

// TODO el codi aquí
for (let i = 1; i < 10; i++) {
    console.log(`${[i]} - vermell`),
        i++;
    console.log(`${[i]} - groc`);
}

// exercici 22: fes un bucle que escrigui 20 números i escrigui al seu costat: "hola" si és múltiple de 2, "adeu" si
// és múltiple de 3 i "què tal? si és múltiple de 5"
// TODO el codi aquí
for (let index = 1; index < 20; index++) {
    if (index % 5 == 0) {
        console.log(`${index} - Què tal?`);
    } else if (index % 3 == 0) {
        console.log(`${index} - adeu`);
    } else if (index % 2 == 0) {
        console.log(`${index} - Hola`);
    } else {
        console.log(`${index}`);
    }
}

// exercici 23: fes un contador que mostri a la consola els números de l'1 al número que introdueixis 
// com a paràmentre (fins a 1000 com a màxim)PISTA: usa la paraula clau "break"

let max = prompt("Escriu un número de l'1 al 1000", "20");
// TODO defineix aquí la funció contar()
function contar(max) {
    let i = 0;
    while (i <= max) {
        console.log(i);
        i++;
    }
}
contar(max); // això ha de mostrar a la consola els números de l'1 al número introduit


// exercici 24: fes un buscador de números primers. Li fixarem un límit (p.e. 100) i agafarà cada número i el dividirà
// per tots els anteriors; si alguna de les divisions dona zero, llavors no és primer; si cap dona zero, l'escriurà a la
// consola
// numero primer només és divisible per 1 i per si mateix
// TODO el codi aquí
const esPrimario = (num) => {
    for (let i = 2; i <= num; i++) {
        if (num % 1 === 0 && num % num === 0) {
            console.log("És primer");
        } else {
            console.log("No");
        }
    }
}

// exercici 25: fes un contador que només mostri els números que tinguin un dígit contingut a la string predefinida fins a 100
// PISTA: usa la paraula clau "continue"

var digits = prompt("Quins digits vols mostrar (1-9)?");

// TODO defineix la funció mostrarDigits()
function mostrarDigits(dig) {
    for (let index = 0; index < 100; index++) {
        if (dig.includes(index.toString()[0])) {
            console.log(index);
        } else if (dig.includes(index.toString()[1])) {
            console.log(index);
        } else if (dig.includes(index.toString()[2])) {
            console.log(index);
        }
        continue;
    }
}
mostrarDigits(digits); // si dígits és 234, això mostrarà "2, 3, 4, 12, 13, 14, 20, 21, 22, 23..."

//* ----------------------------- Bucle while -----------------------------------
// exercici 26: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins
// llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi
// amb el format:       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua

// TODO aquí el codi
const END_KEYWORD = "fin";
var llistaCompra = [];
do {
    var prompQuestion = prompt("Escriu items per la llista de la compra, per finalitzar escriu -fin-", "ferrari");
    llistaCompra.push(prompQuestion);
}
while (prompQuestion != END_KEYWORD) {
    llistaCompra.pop();
    console.log("Llista compra:");
    llistaCompra.forEach(item => console.log(`- ${item}`));
}
//* ---------------------------- Mètodes arrays ---------------------------------

// exercici 27: dia de la setmana. A partir d'un array amb els dies de la setmana, pinta a la consola quin dia és avui

var dies = ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]

// TODO aquí el codi
let dia = new Date();
let numeroDia = dia.getDay();
console.log(numeroDia)
    if (numeroDia == 1) {
        console.log(`Avui és ${dies[0]}`);
    } else if (numeroDia == 2) {
        console.log(`Avui és ${dies[1]}`);
    } else if (numeroDia == 3) {
        console.log(`Avui és ${dies[2]}`);
    } else if (numeroDia == 4) {
        console.log(`Avui és ${dies[3]}`);
    } else if (numeroDia == 5) {
        console.log(`Avui és ${dies[4]}`);
    } else if (numeroDia == 6) {
        console.log(`Avui és ${dies[5]}`);
    } else if (numeroDia == 7) {
        console.log(`Avui és ${dies[6]}`);
    } else {
        console.log("Error");
    }

// exercici 27: replicar split(). Defineix una funció que separi una cadena de caràcters amb el separador escollit

var cadena = "blaucacavermellcacagroccacamarrócacaverd"

// TODO defineix aquó la funció separar()
const separar = (text, separador) => {
	const caracters = text.replaceAll(separador," ")
		let paraula = "";
		let resultat = [];
		for (let char of caracters){
			if(char.toLowerCase() != char.toUpperCase()){
				paraula += char;
			}
			else if((char ===" ") && (paraula != "")) {
				resultat.push(paraula);
				paraula = "";
			}
	}
	resultat.push(paraula);
	return resultat
}

console.log(separar(cadena, "caca")); // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


// exercici 28: defineix una funció que agafi els elements d'un array i els mogui N elements cap a la dreta

var array = ["primer", "segon", "tercer", "quart", "cinquè"]
var array2 = [];
// TODO defineix aquí la funció moure()
function moure(list, moves){
	list.map((item, index)=>{
		if((index + moves) >= list.length){
			const newIndex = index + moves - list.length;
			array2[newIndex] = item;
		}else{
			array2[index + moves] = item;
		}
		
	});
	return array2;
}

console.log(moure(array, 2)); // ha de mostrar ["quart", "cinquè", "primer", "segon", "tercer"]


// exercici 29: adapta l'exercici de la llista de la compra (ex. 26) perquè fiqui els elements en un array i
// els ordeni alfabèticament

// TODO aquí el codi
llistaCompra.sort();

// exercici 30: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova
// si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins
// hi ha hagut coincidències d'aniversari

// TODO aquí el codi
// const aniversariAleatori = () => Math.floor(Math.random() * 365) + 1;
// let newArray = [];
// let newAniversariAletori = aniversariAleatori();
// newArray.push(newAniversariAletori)

//* ------------------------------ Objectes -------------------------------------

// exercici 31: crea un objecte que tingui les propietats "nom", "any" i "edat" i un mètode calcularEdat()
// que calculi l'edat en funció de l'any de neixement i la guardi a la propietat "edat"
//// PISTA: useu Date()

var persona = { // TODO aquí les propietats de l'objecte
	nom : 'Dani',
    naixement: 1992,
    anyActual: new Date().getFullYear(),
    edat: '',  
	calcularEdat: function(){
        this.edat = this.anyActual - this.naixement;
        return `En ${this.nom} va nèixer al ${this.naixement} i te ${this.edat} o ${persona.edat -1} anys`;
    }
};

persona.calcularEdat();

// TODO console.log() que digui "La Maria va nèixer el 1995 i té 25 anys" agafant les propietats de l'objecte


// exercici 31: crea un objecte que contingui una paraula i el mètode separar() (de l'exercici 27) de tal manera
// que poguem usar-lo amb el codi següent

var frase = {
    string = "blaucacavermellcacagroccacamarrócacaverd",
    // TODO aquí el mètode de l'objecte
    separar: (text, separador) => separar(text, separador); 
}

var fraseSeparada = frase.separar("caca");

console.log(fraseSeparada); // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


// exercici 32: adapta l'exercici de la llista de la compra (ex. 26 i 29) perquè fiqui els elements en un objecte
// separats per seccions (carnisseria, fruita i verdura, làctics, forn de pa) i ordenats alfabèticament. El console.log
// haurà de mostrar els productes classificats per seccions:           Llista de la compra:
//                                                                        - Carnisseria
//                                                                             + Hamburguesa
//                                                                             + Bistec
//                                                                             + Mandonguilles
//                                                                        - Fruita i verdura
//                                                                             + Plàtans
//                                                                             + Síndria
//// PISTA: el prompt demanarà dues paraules: el producte i una lletra per classificar-los (p.e. "magdalenes F")


// exercici 33: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array
// d'objectes amb els noms de les columnes com a propietats
//// PISTA: necessitareu ajuda. Demaneu-la

var csv = `Year,Make,Model,Description,Price\n
           1997,Ford,E350,ac abs moon,3000.00\n
           1999,Chevy,Venture "Extended Edition",,4900.00\n
           1999,Chevy,Venture "Extended Edition XL",,5000.00\n
           1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

// TODO gestionar el csv perquè acabi sent una cosa com la de sota

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];



console.log("-------------------- FI DELS EXERCICIS --------------------");