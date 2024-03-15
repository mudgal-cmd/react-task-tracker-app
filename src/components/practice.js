let arr = [10, 20, 30, 50];

let ele = 100;

let pos = 1;

for (let i = arr.length; i >= pos; i--) {
  if (arr.length === pos) { arr[i] = ele; break }
  else {
    arr[i] = arr[i-1];
    if (i === pos) { arr[i] = ele; break }
  }

  // console.log(i);

}

console.log(arr);