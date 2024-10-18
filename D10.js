/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
// let sum = 20 + 10
// console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
// let random = Math.floor(Math.random() *21)
// console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
// let me = {
//   name: 'Niccolò',
//   surname: 'Albanese',
//   age: 34
// }

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

// delete(me.age)
// console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
// me['skills'] = []
// console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
// me.skills.push('JavaScript', 'CSS', 'HTML')
// console.log(me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
// me.skills.pop()
// console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
// const dice = function () { 
//   const randomNum = Math.random()
//   // variabile che crea un numero randomatico
//   const diceNum = randomNum * 6
//   // do come parametro un massimo di numeri che vanno dallo 0,1111111 al 5,9999 (+ o -)
//   const integerResult= Math.ceil(diceNum)
//   // dico alla variabile di arrotondare per eccesso il risultato randomico per ottenere risultati dall'1 al 6

//   return integerResult
//   // ritorno il risultato
  
// }

// console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

// const whoIsBigger = function (n1,n2) {
//   // faccio un if per mettere una condizione
//     if (n1<n2) {
//       return n2    
//       // se il primo parametro è minore, allora tornerà il secondo parametro
//   } else {
//     return n1
//     // altrimenti tornerà il primo parametro
//   } 
// }
// console.log(whoIsBigger(7,4))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

// const splitMe = function(str){
//   // creo un if per porre una condizione sulla funzione
//   if (typeof str === 'string' && str.length > 0){
//     //  se  il parametro è una stringa e se la sua lunghezza è maggiore di 0
//   return str.split(' ')
//   // mi tornerà come parametro un array di stringhe usando  lo spazio tra le parole come separatore
//   } else {
//     return []
//     // altrimenti mi tornerà un array vuoto
//   } 
//   }
// console.log(splitMe('Ciao Epicode io sono Niccolò'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

// const deleteOne = function (str, boolean) {
//   // inserisco un if per creare una condizione basata sul valore del booleano
//   if (boolean === true){
//     return str.slice(1)
//     // se il booleano è true, mi tornerà la stringa senza il primo carattere grazie allo slice che partirà dell'indice 1 della str. 
//   } else {
//     return str.slice(0, -1)
//     // altrimenti lo slice farà partire la str dalla posizione 0 e arriverà fino alla penultima posizione eliminando così l'ultiumo carattere
//   }
// }

// console.log(deleteOne('tergicristallo', 1>2))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// const onlyLetters = function(str) {
//   return str.replace(/\d+/g, '').trim();
//   // ho usato il metodo replace, trovato su internet, per sostituire tutti i numeri con una stringa vuota ''; /\d+/g -> mi sono fidato del codice online che mi diceva fosse una espressione regolare per trovare tutte le cifre nella stringa ma non ho idea nè del come nè del perchè ¯\_(ツ)_/¯ ; alla fine ho messo un trim per eliminare gli spazi vuoti dalla stringa. 
// }

// console.log(onlyLetters("Mi chiamo Niccolò e sono nato nel 1990"));


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// const isThisAnEmail = function(str){
//   // verifico se è presente un simbolo @ nella stringa
//   return str.includes('@')
// }

// // l'unico problema è che mi da true anche se ci sono due '@', ma cercando su internet mi continua a dare il regex di prima e mi sembra inutile continuare ad utilizzarlo visto che non ne ho capito il senso.

// console.log(isThisAnEmail("epicode@epicode.com"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

// const whatDayIsIt = function(){
//   // genero un array contenente i nomi dei giorni della settimana
//   const dayNames = ['domenica','lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì','sabato']

//   // creo un nuovo oggetto Date e poi ritorno un numero da 0 a 6 che rappresenta il giorno della settimana (dove 0 è Domenica e 6 è Sabato)
//   const currentDay = new Date().getDay();

//   // e uso il numero ottenuto per accedere all'elemento corrispondente nell'array
//   return dayNames[currentDay];
//   }
  

// console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

// const rollTheDices = function(num) {
//   // creo un array vuoto da riempire successivamente
//   const values = []
//   // creo la costante per la somma
//   let sum = 0

//   // uso un ciclo for per ottenere un numero di valori pari al parametro 'num' creando una costante roll che richiama la funzione dice per ottenere dei numeri randomici; pusho i valori all'interno dell'array values e faccio la somma dei numeri randomici ottenuti con la costante roll
// for (let i = 0; i < num; i++) {
//   const roll = dice()
//   values.push(roll)
//   sum += roll;
// }
// //ritorno i due risultati

// return {
//   sum: sum,
//   values: values
// }
// }

// console.log(rollTheDices(3))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// const howManyDays = function (date) {


  
// }


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// const isTodayMyBirthday = function (date){

//   //faccio una costante con la data del mio compleanno
//  const myBirthday = new Date('24-07-1990')

//  //ne creo una per vedere la data odierna
//  const today = new Date()

//  // confronto giorno e mese della data odierna con i corrispettivi della costante mYBirthday
// return today.getDate() === myBirthday.getDate() && today.getMonth() === myBirthday.getMonth()
// }

// console.log(isTodayMyBirthday())


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file


const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]




/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
  */
//  const newestMovie = function() {

//   // creo una variabile dando per scontato che il più nuovo sia il film a posizione 0
//       let newest = movies[0]

      //ciclo tutti i film partendo da posizione 1 per confrontare tra di loro quale dei valori parseInt delle stringhe all'interno di Year sia maggiore, dopodichè lo confronto con il rispettivo valore della variabile newest.

//       for (let i = 1; i < movies.length; i++) {
//         if (parseInt(movies[i].Year) > parseInt(newest.Year)) {
//             newest = movies[i] //
//         }
//     } return newest
// }
  
//   console.log(newestMovie())
  

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
// const countMovies = function() {
  
//   return movies.length
// }
// console.log(countMovies())


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
// const onlyTheYears = function () {

//   // creo un array vuoto da riempire
//   let arrayOfYears = []
//   // ciclo l'array movies per identificare e successivamente inserire i valori alla voce Years e li pusho dentro l'array vuoto
//   for (let i = 0; i < movies.length; i++) {
//     arrayOfYears.push(movies[i].Year)
//     }
//     return arrayOfYears  
// }
// console.log(onlyTheYears())

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

// const onlyInLastMillennium = function(){

//   //filtro tutte le voci dell'array movies creando un nuovo array con solo i film che hanno nella sezione year un valore che inizia con '19'
//   return movies.filter(function(movie) {
//     return movie.Year.startsWith('19')
// })
// }
  

// console.log(onlyInLastMillennium())

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

// const sumAllTheYears = function(){
//   //creo una variabile per la somma
//   let sum = 0
//   //ciclo tutte le voci dell'array che mi servono e sommo i loro valori trasformati in numero con parseInt
//   for (let i = 0; i < movies.length; i++) {
//     sum += parseInt(movies[i].Year)
//   }
//   return sum
// }

// console.log(sumAllTheYears())

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
  */
//   //filtro tutte le voci dell'array movies creando un nuovo array con solo i film che hanno all'interno del titolo il valore str esplicitato nella stringa in basso

//   const searchByTitle = function (str) {
//     return movies.filter(function(movie) {
//       return movie.Title.toLowerCase().includes(str.toLowerCase())
//   })
// }

// console.log(searchByTitle('The'))
  

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/




/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/



// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

// const select = document.getElementById('container')

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.

*/ 
// const select2 = document.getElementsByTagName('td')

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// const forCicle = function(){
// // identifico l'elemento usando il tag
//   let td = document.getElementsByTagName('td')
// //ottenendo un "array" devo ciclare ogni elemento per mostrarlo in console
//   for (let i = 0; i < td.length; i++) {
//     console.log(td[i].innertext)
//   }
// }


// /* ESERCIZIO 23
//   Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
// */
// // identifico gli elementi sparando ad un orso polare!
// const paintRed = document.querySelectorAll('a')

// // ciclo la nodelist con foreach per dare il nuovo colore di background a tutti gli elementi
// paintRed.forEach(function(link) {
//   link.style.backgroundColor = 'red'
// })
// /* ESERCIZIO 24
//   Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
// */
// // identifico la lista che mi servirà usando il suo id
// const list = document.getElementById('myList')

// //creo un nuovo elemento li
// const newElement = document.createElement('li')

// //inserisco un testo per visualizzare il nuovo elemento li nella pagina 
// newElement.innerText('prova')

// //appendo il nuovo elemento alla lista precedentemente identificata
// list.appendChild(newElement)

// /* ESERCIZIO 25
//   Scrivi una funzione per svuotare la lista non ordinata con id "myList".
// */

// function clearList() {
 
//   //non identifico nuovamente la lista poichè l'ho già fatto nell'esercizio precedente; faccio un ciclo while per controllare se esiste un primo elemento della lista dopodichè lo cancello finchè questa non si svuota completamente.
  
//   while (list.firstChild) {
//       list.removeChild(list.firstChild);
//   }
// }



// /* ESERCIZIO 26
//   Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
// */

// //sparo di nuovo agli orsi polari per identificare tutti i tr
// const allTr = document.querySelectorAll('tr')

// //ciclo ogni elemento dell'"array" per aggiungere la classe scelta
// allTr.forEach(function(tr) {
//   tr.classList.add('test')
// })
// // [EXTRA] JS Avanzato

// /* ESERCIZIO 27
//   Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

//   Esempio:
//   halfTree(3)

//   *
//   **
//   ***

// */

// /* ESERCIZIO 28
//   Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

//   Esempio:
//   tree(3)

//     *
//    ***
//   *****

// */

// /* ESERCIZIO 29
//   Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
// */

// /* Questo array viene usato per gli esercizi. Non modificarlo. */

