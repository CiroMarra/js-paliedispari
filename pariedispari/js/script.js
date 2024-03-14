//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.



// chiedere pari o dispari a l'utente 
const userChoice = prompt('scegli pari o dispari').toLowerCase();
// chiedere un numero a l'utente che vada da 1  a 5 
const userNumber = parseInt(prompt('scegli un numero da 1 a 5'));
// generare un numero random per il computer che vada da 1 a 5
const computerNumber = getRndInteger (1, 5);
// sommare i due numeri
const playerVsPngSum = userNumber + computerNumber;
// in base a la scelta dell'utente dichiarare se ha vinto o ha perso.
let win;
let showMessage;

startGame();


// FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function startGame(){
    if(playerVsPngSum % 2 === 0){
        win = 'pari';
    }  else {
        win = 'dispari';
    }
    
    
    const forUser = "è uscito " + playerVsPngSum;

    if (userChoice === win) {
        showMessage= ' hai vinto';
    }   else {
        showMessage= ' hai perso';
    }
    
     alert(forUser+showMessage);
}