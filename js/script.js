
// PASSO 1
// crare un arrey di numeri consecutivi.

const numberOfSquare = 49;
let prova = consecutiveNumbersSquare(numberOfSquare);
console.log(prova);

// creo la funzione che mi permette di creare una quantità di numeri stabilita dalla let numberOfSquare che non sono ripetuti
function consecutiveNumbersSquare (quantityOfNumbers) {
    const totalnumbersArrey = [];

    while(totalnumbersArrey.lenght < quantityOfNumbers) {
        // genero un numero consecutivo
        
        let consecutivNumber = 0;
        consecutivNumber++;

        totalnumbersArrey.push(consecutivNumber);
        
    } 
    return totalnumbersArrey;
}











