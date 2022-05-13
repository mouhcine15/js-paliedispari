
// chiedo la parola 
const userWord = (prompt("inserisci una parola"));
console.log(userWord);

let parolaInversa = invertiParola (userWord);



function invertiParola(userWord){
  let parolaInversa = '';
  
  for (let i = userWord.length - 1; i >= 0; i--) {
    parolaInversa += userWord[i];
    
  }
  
  return parolaInversa;
}


if (userWord == parolaInversa){
    console.log('la tua parola è palindroma');
  } else {
    console.log('la tua parola non è palindroma');
  }





