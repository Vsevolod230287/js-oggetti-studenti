// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.
//  Stampare a schermo attraverso un ciclo for-in
// tutte le proprietà dell'oggetto.

//   Creare un array di oggetti di studenti.

// Ciclare su tutti gli studenti e stampare
//    per ognuno di essi, nome e cognome.

// Dare la possibilità all’utente,
//     attraverso 3 prompt(),
//  di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
  nome: "Vsevolod",
  cognome: "Cerneavschi",
  anni: 34,
}

var nome = $('#nome');
var cognome = $('#cognome');
var anni = $('#anni');

for (var key in studente) {
  $('.studente').append(" " + studente[key]);
}
// ----------------------------------------------------
var arrayOggetti = [
  {
    nome: "Vsevolod",
    cognome: "Cerneavschi",
    anni: 34,

  },
  {
    nome: "Ernesto",
    cognome: "Cighevara",
    anni: 36,
  },
  {
    nome: "Bernardo",
    cognome: "Stolnici",
    anni: 35,
  }
]

var divArrayOgetti = $('.array-oggetti');

for (var i = 0; i < arrayOggetti.length; i++) {
  for (var key in arrayOggetti[i]) {
    console.log(arrayOggetti[i][key]);
     divArrayOgetti.append("</div>" + arrayOggetti[i][key] + "<div>")

  }
}
