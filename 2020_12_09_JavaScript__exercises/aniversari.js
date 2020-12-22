let mes = Math.ceil(Math.random()*11);
let dia;
let any = Math.ceil((1970)+(Math.random()*50));
let bisiesto = ((any%400 == 0) || (any%4 == 0 && any%100 == 0));
let mesos30 = [4, 6, 9, 11];


if(mes == 2) {
    if (bisiesto){
        dia = Math.ceil(Math.random()*29);
    } else {
        dia = Math.ceil(Math.random()*28);
    }
} else if (!mesos30.includes(mes)){
    dia = Math.ceil(Math.random()*31);
} else {
    dia = Math.ceil(Math.random()*30);
}

console.log(`Fas anys el dia ${dia} de ${mes} del ${any}`);