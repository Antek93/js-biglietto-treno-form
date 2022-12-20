// GET INO FROM INPUT:NOME-COGNOME
const identità = document.getElementById("nome-cognome")
// GET INFO FROM INPUT KILOMETRI
const kilo = document.getElementById("kilometri")
// GET INFO FROM SELECT 
const choice = document.getElementById("range-età")
// GET INFO FROM SUBMIT BUTTON 
const sottometti = document.getElementById("sottometti")

sottometti.addEventListener('click', 
                         
    function() {

        console.log('Cliccato su submitButton');

        console.log('Il valore di nome-cognome è:', identità.value);

        console.log('Il valore di kilometri è', kilo.value);

        console.log("L'età range selezionata è:" choice.value);
        // console.log(genderSelect.innerHTML);

        // if (genderSelect.value == 'm') {
        //     fullTextP.innerHTML = 'L\'utente ' + nameInput.value + ' ha indicato come genere Uomo';
        // }
        // else if (genderSelect.value == 'f') {
        //     fullTextP.innerHTML = 'L\'utente ' + nameInput.value + ' ha indicato come genere Donna';
        // }
        // else {
        //     fullTextP.innerHTML = 'L\'utente ' + nameInput.value + ' ha preferito non specificare il proprio genere';
        // }

    }
                         
);

// const age = parseInt(prompt('Inserisci tua età'));
// console.log("Età utente:", age);

// let ticket_unit = 0.21;
// let ticket_fair = (distance * ticket_unit);

// if (age >= 18 && age <= 65) {
//     console.log("Costo biglietto standard:", ((ticket_fair * 100) / 100) .toFixed(2) + "€");

// } else if (age < 18) {
//     let ticket_fair = (distance * ticket_unit) - ((distance * ticket_unit) * 20 / 100 );
//     console.log("Costo biglietto sconto minorenni:", ((ticket_fair * 100) / 100) .toFixed(2) + "€");

// } else if (age >= 30 && age <= 34){
//     let ticket_fair = (distance * ticket_unit) - ((distance * ticket_unit) * 100 / 100 );
//     console.log("Costo biglietto sconto anziani:", ((ticket_fair * 100) / 100) .toFixed(2) + "€");
// }
