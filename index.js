// Code your solutions in this file
let names = [];

let event = "birthday";

function writeCards( names , event) {
    for (let i = 0; i !== names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return names;

}
 
writeCards(names, event);

function countDown(number){
for (let countDown = number; countDown >= 0; countDown--) {
    console.log(countDown);
  }

}