if (Meteor.isClient) {

    var getFrases = function(){
        var frasesLoaded = [
              'Me alegro de haber tenido la oportunidad de haber tenido esta experiencia. ',
              'Siento que pude aportar mucho. ',
              'Me llevo un monton de cosas. ',
              'Aprendi un monton. ',
              'Fue un placer trabajar con ustedes. ',
              'Esta oportunidad que aparece en mi camino es algo que no puedo dejar pasar. ',
              'Tuve buenas y malas experiencias, pero todo me sirvio. ',
              'Esta es una decision dificil para mi, pero siento que es mi camino. ',
              'Me llevo un monton de gente. ',
              'Siento que logre muchos objetivos y los que no logre, me dejaron cosas de las que aprendi. ',
        ];
        frasesLoaded.sort(function() { return  Math.random() });
        var frasesAMostrar = [];
        var frasesAMostrar = frasesLoaded;
    
        frasesAMostrar.forEach(function(frase){
          while (frasesAMostrar.length > 4) {
              frasesAMostrar.splice(Math.floor(Math.random()*frasesAMostrar.length), 1);
          }
        });


        Session.set('frasesAMostrar', frasesAMostrar);

    };


  Template.frases.helpers({
    frases: function () {
        getFrases();
        return  Session.get('frasesAMostrar');
    }
  });



  Template.frases.events({
    'click a#generate': function () {
        getFrases();
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
