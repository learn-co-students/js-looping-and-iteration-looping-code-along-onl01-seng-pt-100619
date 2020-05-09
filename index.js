// Code your solutions in this file


const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, message) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${message} gift!`;
    }
    return messages;
}

// function countDown(integer){
//     let countup = integer;
//     while (countup >= integer) {
//   console.log(countup--);
//     }
// }

function countDown(number) {
    let countup = number;
    while (countup >= 0) {
  console.log(countup--);
    }
}