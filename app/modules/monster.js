"use strict" ;

define([
  './coffin'
],function(coffin){
  var estimated_age = 99+1 ;
  var spookySaying = "I vant to suck your blooood!" ;
  
  return {
    name: 'Dracula',
    home: 'Florida',
    age: estimated_age,
    saySomethingSpooky: function(){
      console.log(spookySaying) ;
    },
    goToSleep: function(){
      console.log("Time for bed!") ;
      coffin.open() ;
    }
  } ;
}) ;