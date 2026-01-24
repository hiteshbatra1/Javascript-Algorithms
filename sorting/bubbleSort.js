let arr = [8, 20, -2, 4, -6];
console.log(arr);
let swapped;
function bubbleSort(arr) {
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
bubbleSort(arr);
console.log(arr);

// Output :  [-6, -2, 4, 8, 20]
