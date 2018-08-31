// NUMBER 1: There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// for example, findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2

function findUniq(arr) {
  if(arr[0] === arr[1] && arr[1] === arr[2]){
  for(let i = 2; i < arr.length ; i++){
  if(arr[i] !== arr[i+1]){
    return arr[i+1];
  }
  }
  }
  else{
    if(arr[0] === arr[1] && arr[0] !== arr[2]){
      return arr[2]
    }
    else if(arr[1] === arr[2] && arr[0] !== arr[1]){
      return arr[0]
    }
    else{
      return arr[1];
    }
  }
}
