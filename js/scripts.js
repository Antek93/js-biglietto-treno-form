// GET INO FROM INPUT:NOME-COGNOME
const identità = document.getElementById("nome-cognome")
// GET INFO FROM INPUT KILOMETRI
const kilo = document.getElementById("kilometri")
// GET INFO FROM SELECT 
const choice = document.getElementById("range-età")
// GET INFO FROM SUBMIT BUTTON 
const sottometti = document.getElementById("sottometti")
// TARIFFA STANDARD BIGLIETTI
let ticketUnit = 0.21;


// MILESTONE 1 - STAMPA IN CONSOLE
// CALCOLI FUNZIONANTI

sottometti.addEventListener('click', 
                         
    function() {

        console.log('Cliccato su submitButton');
        console.log("L'utente si chiama:", identità.value);
        console.log("L'utente percorrerà", kilo.value + "km");
        console.log("L'utente appartiene al range", choice.value);
        
        if(choice.value == "anni 18-65") {

            let ticketFair = ((ticketUnit*kilo.value) * 1);
            console.log("Tariffa standard:", ticketFair .toFixed(2) + "€")

        } else if(choice.value == "anni -18") {
            let ticketFair = ((ticketUnit*kilo.value) * 0.8);
            console.log("Tariffa sconto minori", ticketFair .toFixed(2) + "€")

        } else {
            let ticketFair = ((ticketUnit*kilo.value) * 0.6 );
            console.log("Tariffa sconto over 65", ticketFair .toFixed(2) + "€")
        }

    }
                         
);

// MILESTONE 2 - STAMPA SU HTML



sottometti.addEventListener('click', 
                         
    function() {

        console.log('Cliccato su submitButton');
        console.log("L'utente si chiama:", identità.value);
        console.log("L'utente percorrerà", kilo.value + "km");
        console.log("L'utente appartiene al range", choice.value);
        
        if(choice.value == "anni 18-65") {

            let ticketFair = ((ticketUnit*kilo.value) * 1);
            console.log("Tariffa standard:", ticketFair .toFixed(2) + "€")

        } else if(choice.value == "anni -18") {
            let ticketFair = ((ticketUnit*kilo.value) * 0.8);
            console.log("Tariffa sconto minori", ticketFair .toFixed(2) + "€")

        } else {
            let ticketFair = ((ticketUnit*kilo.value) * 0.6 );
            console.log("Tariffa sconto over 65", ticketFair .toFixed(2) + "€")
        }

    }
                         
);

