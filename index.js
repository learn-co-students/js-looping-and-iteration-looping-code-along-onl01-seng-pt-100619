// Code your solutions in this file

function writeCards( names , event) {
    let array = [];

    for (let i = 0; i < names.length; i++) {
    
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 return array;
}
 
writeCards(names, event);

function countDown(number){
for (let countDown = number; countDown >= 0; countDown--) {
    console.log(countDown);
  }

}