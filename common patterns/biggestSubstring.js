/*\ statement:Given a string, find the biggest substring length
| | input: sameer ==> output: sam
| |
\*/

function subString(str) {
    let maxLength = 1; tempLength = 1;
    //check if str is null?
    if(!str.length) return null;
    if(str.length == 1) return 1;

    let i=0, j=1;
    while(i<str.length-1){
        if( str[i] != str[j]){
            tempLength ++;
            if(tempLength > maxLength){
                maxLength = tempLength;
            }
            
            i=j; j++;
        }else {
            j++;
            tempLength = 0;
            
        }
        
        
    }
    return maxLength;
}

console.log(subString('sameeeasdfgh'))