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

    // memorizzo i dati nella select 
    const selectValue = document.getElementById('select-level').value;

    // seleziono la classe 'square' che mi ridimensiona le righe e colonne in base alla difficoltà scelta dll'utente
    const selectSquare = document.getElementsByClassName("square");
    console.log(selectSquare);

    // creo la tabella in base al valore della select
    if( selectValue === 'd-2' ) {
        selectSquare.classList.add("d-medium");
    } 
    else if( selectValue === 'd-3' ) {
        selectSquare.classList.add("d-difficult");
    }
    console.log(selectValue);
}





