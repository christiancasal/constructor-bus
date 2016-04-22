var BusRenderer = require('./bus.js');
var prompt = require('prompt');

// console.log('hello');

// Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.
prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(error, result){
  if(!error){
    var shortBus = new BusRenderer('Steve', 'Orange', 20);
    shortBus.studentEntersBus(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)

      for(i = 0; i < dataObj.name.length; i++){
        shortBus.studentEntersBus(dataObj.name[i], dataObj.gender[i], dataObj.grade[i], dataObj.gpa[i], dataObj.detentions[i], dataObj.sleepingInClass[i], dataObj.catchPhrase[i])
        shortBus.studentsOnTheBus[i].canStudentHaveFun();
      }

  }else{
    console.log(error);
  }
});
// var myBus = new Bus('Steve', 'Orange', 20)
//
// myBus.studentEntersBus();

var dataObj = {
    name: ['emily', 'leb', 'matt', 'james', 'joe',
           'nick', 'cory', 'carla', 'carlos', 'carmen',
           'pepper', 'eddie','ildy', 'karen', 'mara',
           'riti', 'fredline', 'rachel', 'amisha'],
    gender: ['f', 'm', 'm', 'm', 'm',
             'm', 'm','f', 'm', 'f',
             'm', 'm','f', 'f', 'f',
             'm', 'f', 'f', 'f'
           ],
    grade: ['A', 'B', 'C', 'D', 'D',
             'C', 'B','A', 'A', 'B',
             'B', 'C','D', 'D', 'C',
             'A', 'A', 'B', 'B'
           ],
    gpa: ['4', '3', '2', '1', '1',
          '2', '3','4', '4', '3',
          '3', '3','1', '1', '2',
          '4', '4', '2', '3'
         ],
    detentions: ['4', '30', '2', '10', '1',
          '2', '3','42', '4', '3',
          '32', '13','11', '8', '2',
          '24', '14', '2', '0'],
    sleepingInClass: ['Y', 'N', 'Y', 'N', 'Y',
             'N', 'Y','Y', 'N', 'Y',
             'N', 'Y','Y', 'N', 'Y',
             'N', 'N', 'N', 'N'
           ],
    catchPhrase:[
      'taste the rainbow', 'going, going, gone',
      'no hijinks without hygiene', 'DOS is dead!',
      'I like cheese!', 'Bigfoot\'s real!',
      'These aren\'t my pants!', 'The Twin Cities are crap!',
      'I DON\'T LIKE TO YELL!', 'giggity giggity giggity ',
      'I AMMM Lorde. LAWDY LAWDY LORDE', 'vengeance is mine!',
      'Soon Canada will be advanced as Michigan!', 'i have a belly button',
      'are you my conscience?', 'NEMOOOOO',
      'mine! mine! mine! mine!', 'YOU. ARE. A. TOYCAR!!',
      'ka-chow!', 'eat my shorts',
      'no work and all play make christian something something',
    ]
  }
