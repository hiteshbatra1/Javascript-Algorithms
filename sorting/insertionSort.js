let arr = [8, 20, -2, 4, -6];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let d = i - 1;
    while (d >= 0 && arr[d] > numberToInsert) {
      arr[d + 1] = arr[d];
      d = d - 1;
    }
    arr[d + 1] = numberToInsert;
  }
}
insertionSort(arr);
console.log(arr);

// Output : [-6, -2, 4, 8, 20]
