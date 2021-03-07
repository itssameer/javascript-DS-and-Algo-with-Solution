/*\ statement: Maximum sub array sum
| |  -------------------------------------------------
| |  [1,1,1,1,13,4] max sum array sum using 2 items  ===> 17   
| | --------------------------------------------------------
| | Possible questions to asked in an interview
| | 1. are there any negative values in an array?
| | 2. how big the n could be ?
\*/

//Brute force method

function maxSubSum(arr, n) {
    let maxSubSumvalue = 0;
    const ARRAY_LENGTH = arr.length;
    
    for( let i=0; i< ARRAY_LENGTH-n+1; i++){
        let sum = 0;
        for(let j=0; j < n; j++){
            sum = sum + arr[i +j];
        }
        if( sum > maxSubSumvalue) maxSubSumvalue = sum
    }

    return maxSubSumvalue
}

console.log(maxSubSum([1,3,2,5,6], 5));

// Sliding Window Approach

function maxSubSumSliding(arr,n) {
    let maxSubSumvalue =0;
    let temp =0;    
    const ARRAY_LENGTH = arr.length;

    for( i=0; i < n; i++){
        maxSubSumvalue += arr[i];
    }
    temp = maxSubSumvalue;

    for( i = n ; i< ARRAY_LENGTH; i++){
        temp = temp - arr[i-n] + arr[i]
        console.log(temp, arr[i-n], arr[i]);
        if( temp > maxSubSumvalue) maxSubSumvalue = temp 
    }

    console.log(maxSubSumvalue);
}
maxSubSumSliding([1,3,2,5,6], 5)