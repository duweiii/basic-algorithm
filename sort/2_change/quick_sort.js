const createRandomArray = require('../utils/index.js')
function quickSort(arr, low, high){
  if( low < high ){
    let middleIndex = partition(arr, low, high);
    quickSort( arr, low, middleIndex - 1 );
    quickSort( arr, middleIndex + 1, high );
  }
}
function partition(arr, low, high){
  let pivot = arr[low];
  while( low < high ){
    while( low < high && pivot <= arr[high]) --high;
    arr[low] = arr[high]
    while( low < high && arr[low] <= pivot ) ++low;
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

let arr = createRandomArray(100);
console.log( arr )
quickSort( arr, 0, arr.length-1 ) 
console.log( arr )