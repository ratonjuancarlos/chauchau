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
              'En este día cargado de emociones y recuerdos, quisiera agradecerles de haberme acompañado durante mi estadía con ustedes. ',
              'Termino oficialmente mi relación de empleo hoy. ',
              'Tuve el gran honor y el privilegio de haberme beneficiado de la sabiduría y del profesionalismo de personas extraordinarias y apasionadas, durante mi estadía. ',
              'Puedo decir, ahora, que veo las tareas cotidianas desde una nueva perspectiva.  ',
              'A todos gracias por su colaboración, paciencia y por su amistad sincera. ',
              'No crean que por mis nuevos retos vaya a desaparecer.  ',
              'Por el contrario, los tendré siempre presente y aquellos que quieran contactarme, lo pueden hacer a mi email.  ',
              'Siempre los recordaré y sobre todo la amistad de algunos de ustedes. ',
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

      Template.frases.onRendered(function() {
        var clipboard = new Clipboard('.btn-copy-link');
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
