// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina:<nomecognomecolorepreferito24>

const userName = prompt('Write your name');

const userSurname = prompt('Write your surname');

const userFavouriteColor = prompt('Write your favourite color');

// non stilizzabile
// document.writeln(userName + userSurname + userFavouriteColor + 24);

// stilizzabile
document.getElementById('password').innerHTML=userName + userSurname + userFavouriteColor + 24