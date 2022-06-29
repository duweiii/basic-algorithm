function createRandomArray(length){
  let arr = [];
  for( let i = 0; i < length; i++ ){
    arr.push(i+1);
  }
  arr.sort((prev,next) => {
    return Math.random() - Math.random();
  })
  return arr;
}



module.exports = createRandomArray;