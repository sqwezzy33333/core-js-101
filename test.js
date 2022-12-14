let a = ['Ace', 'sdsdsdsd', 'pwoiuyhjkujhk'];
let b = [0, 1, 2, 3, 4, 5];
let c = [-1, 2, -5, -4, 0];

function getSecondItems(arr) {
  // return arr.map((item, index) => new Array(index + 1).fill(item));
  return arr.map((item, index) => new Array(index + 1).fill(item));
}
console.log(getSecondItems(b));
