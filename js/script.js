
// PASSO 1
// crare un arrey di numeri non ripetutti generati automaticamente.

// numeri che devono essere generati
let numberOfSquare = 49;
let generatedNumerbersNotRepeted = generateNumbersSquare(numberOfSquare);
console.log(generatedNumerbersNotRepeted);

// creo la funzione che mi permette di creare una quantità di numeri stabilita dalla let numberOfSquare che non sono ripetuti
function generateNumbersSquare (quantityGenerateNumbers){
    const numbersArrey = [];

    while(numbersArrey.lenght < quantityGenerateNumbers){
        // genero un numero random
        const randomNumber = getRndInteger(quantityGenerateNumbers);

        // devo creare un if per verificare se il numero generato dalla funzione "getRndInteger" è già presente nell'array
        if(numbersArrey.includes(randomNumber) === false){
            numbersArrey.push(randomNumber);
        }
    } 
    return numbersArrey;  
}

// funzione di w3 scool che mi permette di generare numeri
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }











