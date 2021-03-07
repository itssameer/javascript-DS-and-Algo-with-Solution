/*\ statement: given two array return true or false base on the values of first array should be present in 2nd array as squared. and frequence should be exac.
| |  -------------------------------------------------
| |  This Solutions Only works for Non negative arrays
| |  Time complexity: N + N + N + C ~ O(N)
| |  Space Complexity: N + N ~ O(N)
| | ----------------------------------------------
| | Possible Questions to can be asked in an interview
| | 1. Are there any negative values in an array? 
| | 2. can the second array have more than the first array?
| | 3. 
\*/


let arr1 = [ 1,2,1,2,5]
let arr2 = [ 4,4,1,1,2]




function same( arr1, arr2){

    if(arr1.length != arr2.length) return false;

    /* Create two new empty object to store the frequecies of the each number 
    {
      item: frequency,
      item2: frequency,
      .....
    }
    */

    const arr1FrequencyObj = {}
    const arr2FrequencyObj = {}

    // square the 1st array and store it in a new Array
    
    arr1.forEach(element => {
        element = element* element;
        arr1FrequencyObj[element] = arr1FrequencyObj[element] + 1 || 1; 
    });

    arr2.forEach(element => {
        arr2FrequencyObj[element] = arr2FrequencyObj[element] + 1 || 1;
    });

    // compare the two Frequency Objects if they match then return true else false;
    console.log(arr1FrequencyObj);
    console.log(arr2FrequencyObj);


    for (const key in arr1FrequencyObj) {
        if( arr2FrequencyObj[key] !== arr1FrequencyObj[key]){
            return false
        }
    }

    return true

}

console.log(same(arr1, arr2));
