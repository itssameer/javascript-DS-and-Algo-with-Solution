/*\ statement: Count Unique values
| |  -------------------------------------------------
| |  [1,1,1,1,13,4] ===> 3 
| |  
| |  
\*/


//Using Set Operator on Array

function uniqueCountSetOp(arr) {
    const setOp = new Set();
    arr.forEach(element => {
        setOp.add(element)
    });
    console.log(setOp);
    return setOp.size
}

console.log(uniqueCountSetOp([1,1,1,1,13,4,-2,-10]))


//Using multi pointer 
//Applicable only for Sorted Arrays

function uniqueCount(arr) {
    let i =0,j=1, uniqueCount = 0;
    const ARRAY_LENGTH = arr.length;
    while(i< ARRAY_LENGTH){
        if( arr[i] == arr[j]) j++;
        else {
            uniqueCount++;
            i = j;
            j++;
        }
    }
    return uniqueCount
}

console.log(uniqueCount([1,1,1,1,13,4,-2,-10]))
