

var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName )

var favAnimal = prompt("What is your fav Animal  ?");

 while(favAnimal == 'dog') {

document.write("<p> Welcome to our center </p>")
document.write('<img src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"/>')
break;

  
 }

var catsBreeds = prompt('how many cats do you want?') ;

for(var i = 0; i < catsBreeds; i++) {

  document.write('<img src="https://trupanion.com/-/media/trupanion/images/breed--guide--new/bengal/bengal-cat.jpg?la=en&hash=6BF0EEDC7DDCDDE7C9184D44BA9B2920F345BFA2" />')

 
 
  
}










let name1 = prompt('Please enter your name');
let familyName = prompt('Please enter your family name');

function printFullname(firstName, lastName) {
 console.log('Fullname is', lastName, firstName);
document.write(`Fullname is <b> ${firstName} </b> ${lastName} <br>`);
 }

 
 printFullname(name1, familyName);


