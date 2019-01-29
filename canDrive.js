let firstName = 'John';
let lastName = 'Doe';
var age = 20;
const minAge = 16;

if (age >= minAge){
  console.log(firstName + ' ' + lastName + ' ' + 'is old enough to drive!');
  console.log(firstName + ' ' + 'has been driving for ' + (age - minAge) + ' year/s');
}
else{
  console.log(firstName + ' ' + lastName + ' ' + 'is NOT old enough to drive');
  console.log('Try again in ' + (minAge - age) + ' ' + 'year/s ');
}