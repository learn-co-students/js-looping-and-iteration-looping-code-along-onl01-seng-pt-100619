// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];
const holiday = "birthday";

function writeCards(names, holiday) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${holiday} gift!`
        // console.log('Thank you, ${names[i]}, for the wonderful ${holiday} gift!');
        messages.push(message);
    }
    return messages;

}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}