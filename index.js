function writeCards(name) {
    const arr = []
    for (let n = 0; n < name.length; n++) {
        arr.push(`Thank you, ${name[n]}, for the wonderful surprise gift!`);
    }
    return arr;
}





function countDown(i) {
    let countdown = 0
    while(countdown <= i) {
        console.log(i--);
    }

}