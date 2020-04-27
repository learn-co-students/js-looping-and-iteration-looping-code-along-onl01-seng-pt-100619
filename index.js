function writeCards(names, occasion) {
  let nameArray = []
  for (let i = 0; names.length > i; i++) {
    nameArray.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return nameArray;
}
function countDown(num) {
  let i = 0
  while (num >= i) {
    console.log(num--);
  }
}