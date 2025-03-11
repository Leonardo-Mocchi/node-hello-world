// Creiamo la prima applicazione con NodeJs e inizializziamola con npm init

// PARTE 1
// Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.

// PARTE 2
// Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start

// PARTE 3
// Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run watch e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.

// Bonus
// Proviamo a modificare la nostra app Node, in modo da passare dal terminale una frase diversa da “Hello Boolean”.
// per il bonus nella cartella drive vi ho messo delle slide extra da leggere in autonomia.

// PARTE 1
let message = "Hello World";
console.log(message);

// node index.js

// PARTE 2
/* is the package.json file created with the console command "npm init" */
/* inside it i created the script "start": "node index.js" */
// "npm run start" now executes this file

// PARTE 3
/* inside package.json i created the script "watch": "node --watch index.js" */
// "npm run watch" now 'starts the server' and displays the outputs dinamically
/* console.log("i'm being displayed dinamically if you type \"npm run watch\", edit me and save the file to try. Press CTR+C to disable the watch function"); */


// BONUS