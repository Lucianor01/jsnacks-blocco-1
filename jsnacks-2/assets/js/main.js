const parola1 = prompt("Parola 1?");

const parola2 = prompt("Parola 2?");

if(parola1.length > parola2.length){
    console.log(parola2 + parola1);
}else if(parola2.length > parola1.length){
    console.log(parola1 + parola2)
}