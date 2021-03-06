// quando l'utente clicca su play
// h2 sparisce e compare la griglia
// verifico cosa ha scelto l'utente e memorizzo la sua scelta 
// creo x celle in base ai dati inseriti dall'utente
// popolo le celle con il numero in ordine crescente
// al click di ogni cella, si deve colorare lo sfondo di blue
////////////////////////////////////////////////////////////////////////////////////////

// seleziono il pulsante play
const playButton = document.getElementById('play');
playButton.addEventListener('click', startGame);

// funzione click play-button
function startGame(){

    // rimuovo il text-main al click di play-button
    const textMain = document.getElementById('text-main');
    textMain.classList.add('hidden');

    // aggiungo la griglia al click di play-button
    const maingrid = document.getElementById('grid');
    maingrid.classList.remove('hidden');
    maingrid.innerHTML = '';

    // memorizzo i dati nella select 
    const selectValue = document.getElementById('select-level').value;

    // seleziono la classe 'square' che mi ridimensiona le righe e colonne in base alla difficoltà scelta dll'utente

    
    // creo la variabile che mi dice quanti 'square' ci devono essre in base alla difficoltà
    let totalSquareNumber = 49;
    let customClass = 'd-difficult';

    // creo la tabella in base al valore della select
    if( selectValue === 'd-2' ) {
        customClass = 'd-medium';
        totalSquareNumber = 81;
    } 
    else if( selectValue === 'd-1' ) {
        customClass = 'd-easy';
        totalSquareNumber = 100;
    }
    console.log(selectValue);

    // creo le celle in base alla difficoltà sceltà dall'utente
    for( let i = 1; i <= totalSquareNumber; i++){
        totalSquare = createSquare(i, customClass);
        totalSquare.addEventListener('click', squareClick);
        maingrid.appendChild(totalSquare) ;
    }

}
function squareClick (){
    // quando clicco su quel tasto deve aggiungersi la classe click (che imposta il backgrouns blue)
    this.classList.add('click');
}

// creo la funzione che mi permette di creare le celle in base alla difficoltà
function createSquare (singleNumber, customClass){

    const newBox = document.createElement('div');

    newBox.classList.add('square');
    newBox.classList.add(customClass);
    newBox.innerHTML = `<span>${singleNumber}</span>`;

    return newBox;
}







