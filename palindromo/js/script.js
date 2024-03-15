// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle

// Chiedo a l'utente di inserire una parola.

// const userWord = prompt('dimmi una parola');
//     console.log(userWord);


// // FUNCTION

let userWord = prompt('dimmi una parola');
const revWord = revertWord(userWord);
alert(revertWord(userWord));

function revertWord(word) {
    let revertedWord = '';
    for(let i = word.length -1; i >=0; i--) {
        const thisLetter = word[i];

        revertedWord += thisLetter;
    }

    let result;
    if (word === revertedWord) {
        result = `la parola ${word}  è palindroma`;
    }   else {
        result = `la parola ${word} non è palindroma`;
    }

    return result;


}
