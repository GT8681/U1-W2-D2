/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 5;
const num2 = 10;

if(num1>num2){

  console.log(num1 + " "+  "maggiore" + " " + num2);

}
else{

  console.log(num1 + " " + "minore" + " " + num2);
}




/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number = 6;
console.log(number!=5);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let g = 10;
if(g%5 ===0){

console.log("divisibile per 5");
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a =18;
let b= 10;
if(a=== 8||b=== 8 ||a + b === 8 ||a - b=== 8 || b + a ===8 ){
        console.log("si e uguale a 8");
        
}





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40;
let totalCost = 10;
let amoutTot = totalShoppingCart;

if(totalShoppingCart < 50){
     amoutTot += totalCost;


}

console.log("totale da pagare:", amoutTot);



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let totalShoppingCart2 = 55 ;
totalShoppingCart2 = totalShoppingCart2*0.8;
let totalCost2 = 10;
let amoutTot2 = totalShoppingCart2;

if(totalShoppingCart2 < 50){
     amoutTot2 += totalCost2;

}
console.log("totale da pagare:", amoutTot2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let g1 = 6;
let g2 = 15;
let g3 = 10;

if(g1 >= g2){
 if(g3 >= g1){
      console.log(g3,g1,g2);

 }else{
  if(g3 >= g2){
     console.log(g1,g3,g2);

  }else{console.log(g1,g2,g3);

  }


 }

}





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1= 10;
let n2= "flour"
console.log(typeof n1);
console.log(typeof n2);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("divisibele per 2",n1%2);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    
    } 
    else{
    if (val < 5) {
      console.log("Meno di 5");
    
    } else {
      console.log("Uguale a 10 o maggiore");
    }
    } */

/* SCRIVI QUI LA TUA RISPOSTA */


let val = 7


  if (val < 5) {
      console.log("Meno di 5");
    
  }else{if(val < 10) {
      console.log("Meno di 10");
    
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  }
    





/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],

}



/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(me.lastName);
delete me.lastName;
console.log(me);
;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let numeri = [];
numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.push(6);
numeri.push(7);
numeri.push(8);
numeri.push(9);
numeri.push(10);
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numeri[9] = 100;
console.log(numeri);
