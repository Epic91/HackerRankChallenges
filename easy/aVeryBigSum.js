function aVeryBigSum(ar){
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
        }
        return sum;
}

//in case the array gets really long:
function aVeryBigSum(ar){
    return ar.reduce((a, b) => a + b);
  }