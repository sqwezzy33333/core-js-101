let a = ['Ace', 10, true];
let b = [0, 1, 2, 3, 4, 5];
let c = [-1, 2, -5, -4, 0] ;

function getArrayOfPositives(arr) {
  return arr.filter((el) => el >= 1);
}

console.log(getArrayOfPositives(c));
