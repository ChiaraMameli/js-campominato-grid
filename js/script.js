//* Genero la  funzione play
const play = () => {
    // Svuoto la griglia
    square.innerHTML = '';

    // Gestisco la select
    const option = document.getElementById('select').value;
    let rows = 10;
    let columns = 10;

    if(option === 'medium') {
        rows = 9;
        columns = 9;
    } else if(option === 'hard') {
        rows = 7;
        columns = 7;
    }

    const totalCells = (rows * columns)

    // Creo le mie celle
    const createCells = (cellNumber) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = cellNumber;

        cell.style.height = `calc(100% / ${rows})`;
        cell.style.width = `calc(100% / ${columns})`;

        return cell
    }
    
    // Inserisco le celle nella griglia
    for(i = 1; i <= (totalCells); i++) {
        const cell = createCells(i);

        // Al click la cella cambia colore e il suo valore viene letto in console
        cell.addEventListener('click', function(){
            if(this.classList.contains('clicked')) return
            this.classList.add('clicked');
            console.log(this.innerText);
        })

        square.append(cell)
    }
} 

// Variabili di partenza

const square = document.getElementById('square');
const btnShow = document.getElementById('show');
const select = document.getElementById('option');

// Premendo il bottone faccio girare il programma
btnShow.addEventListener('click', play);


