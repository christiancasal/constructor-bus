var StudentRenderer = require('./student.js')
// inside the bus.js file, make a bus constructor function, that has the following properties:
//
var Bus = function(driverName, color, gas){
  this.studentsOnTheBus = [];
  this.driverName = driverName;
  this.color = color;
  this.gas = parseInt(gas);
  this.studentEntersBus = function(name, gender, grade,gpa,detentions, sleepingInClass, catchPhrase){
    // console.log('hello');
    this.studentsOnTheBus.push(new StudentRenderer(name, gender, grade,gpa,detentions, sleepingInClass, catchPhrase))
  }
  this.busChatter = function(){
    for(i=0; i < studentsOnTheBus.length; i++){
      console.log(studentsOnTheBus[i].catchPhrase);
    }
  }
}
// studentsOnTheBus (array)
//
// driverName (string)
//
// color (string)
//
// gas (integer)
//
// studentEntersBus (function that adds a student to the studentsOnTheBus property)
//
// busChatter (function that outputs the students' catch phrases if they can have fun one by one)
// at the bottom of bus.js, export the constructor function
//
module.exports = Bus;
