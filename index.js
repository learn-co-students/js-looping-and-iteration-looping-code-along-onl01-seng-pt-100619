function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  return messages;
}
 

function countDown(num) {
    //let num = 0;
    while (num > -1) {
        console.log(num--);
    }
}