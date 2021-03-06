/*\ Statement: Given an array finded the elements sums up to Zero
| |  -------------------------------------------------
| |  
| |  Time complexity: N + N + N + C ~ O(N)
| |  Space Complexity: N + N ~ O(N)
\*/

// [-2,-1,0,1,2]

function zeroSum(arr){

    for( let i=0; i< arr.length; i++){
        for( let j = i+1; j < arr.length; j++){
            if( arr[i] + arr[j] == 0){
                return [i,j]
            }
        }
    }
        
}

console.log(zeroSum([-3,-2,-1,0,3,4]))

// Now the Optimum solution with Order of O(N)
// This Solutions Only works for sorted arrays

// -3 + 2 => -1


function zeroSumOpt( arr ){

    let i=0,j=arr.length -1;
    while( i < arr.length){
        if( arr[i] + arr[j] == 0) return [i,j];
        else if( arr[i] + arr[j] < 0) i++;
        else j--;
    }

}

console.log(zeroSumOpt([-3,-2,-1,0,3,4]))