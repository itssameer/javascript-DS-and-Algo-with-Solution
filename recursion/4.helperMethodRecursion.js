//when something we need to do on global scope using recursion
// simple recursion-> every function call has its own data and can't be used outside.


function collectOdds(arr) {
    let result = [];
    function helper(input) {
        //Base case
        if(input.length === 0) return

        //if the current input is odd push the input the result arr
        if(input[0] % 2 !== 0){
            result.push(input[0])
        }
        input.shift()
        helper(input)
    }

    helper(arr);
    console.log(result);
}

collectOdds([5,3,1,4,8,5,1,9,10])
