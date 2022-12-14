let a = ['Ace', 'sdsdsdsd', 'pwoiuyhjkujhk'];
let b = [0, 1, 2, 3, 4, 5];
let c = [1,'2'];

function getSecondItems(arr) {
  return arr.reduce((callback, el) => callback + el, 0);
}
console.log(getSecondItems(b));
