// Inside student.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.
var Student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender;
  this.grade = grade;
  this.gpa = gpa;
  this.detentions = detentions;
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;
  this.canStudentHaveFun = function(){
    if(this.detentions < 10 && this.gpa > 2.0){
      console.log(this.name + ' can have fun!');
    }else{
      console.log(this.name + ' cannot have fun!');
    }
  }
}

// export the student constructor at the bottom of the file
module.exports = Student;
