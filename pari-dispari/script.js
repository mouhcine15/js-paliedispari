const userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(userNum);
const userPariDispari = prompt("scegli pari o dispari");
console.log(userPariDispari);

function myRandom() {
    const pcNum = (Math.floor(Math.random() * 5) + 1);
    console.log(pcNum);
    return pcNum;
}

let somma = myRandom() + userNum;
console.log(somma);

function risultato() {
   
    if (somma % 2 == 0 && userPariDispari == "pari") {
        document.getElementById("risposta").innerHTML = ("hai vinto");
    } else if (somma % 2 !== 0 && userPariDispari == "dispari"){
        document.getElementById("risposta").innerHTML = ("hai vinto");
    } else if (somma % 2 == 0 && userPariDispari == "dispari"){
        document.getElementById("risposta").innerHTML = ("hai perso");
    } else if (somma % 2 !== 0 && userPariDispari == "pari"){
        document.getElementById("risposta").innerHTML = ("hai perso");
    }
    return userPariDispari;
    
}    
    
risultato();
