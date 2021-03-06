// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.
//  Stampare a schermo attraverso un ciclo for-in
// tutte le proprietà dell'oggetto.
//
//   Creare un array di oggetti di studenti.
//
// Ciclare su tutti gli studenti e stampare
//    per ognuno di essi, nome e cognome.
//
// Dare la possibilità all’utente,
//     attraverso 3 prompt(),
//  di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var studente = {
  nome: "Vsevolod",
  cognome: "Cerneavschi",
  anni: 34,
}

for (var key in studente) {
  $('.studente').append(" " + studente[key]);
}

// ----------------------------------------------------
var classe = [{
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
];
// ----------------------------------------
var divClasse = $('.classe');

for (var i = 0; i < classe.length; i++) {
  divClasse.append("<div>Nome:  " + classe[i]['nome'] + "</div>");
  divClasse.append("<div>Cognome:  " + classe[i]['cognome'] + "</div>");
  divClasse.append("</br>");

}


// -------------------------------------------------------
var detagli = $('.detagli')

for (var i = 0; i < classe.length; i++) {
  for (var key in classe[i]) {
    detagli.append("<div>" + key + ":  " + classe[i][key] + "</div>");
  }
  detagli.append("</br>");
}

var btnInvia = $('button[name="invia"]');

btnInvia.click(function() {
  var nome = $('input[name="nome"]').val();
  var cognome = $('input[name="cognome"]').val();
  var anni = $('input[name="anni"]').val();


  var nuovoStudente = {
    nome: nome,
    cognome: cognome,
    anni: anni
  };

  classe.push(nuovoStudente);

  var detagli = $('.detagli')

  for (var key in nuovoStudente) {
    detagli.append("<div>" + key + ":  " + nuovoStudente[key] + "</div>");
  }
  detagli.append("</br>");

});
