/*\ statement: Given Two strings return True if they are Anagrams else flase
| |  Anagram : Cinema --> iceman letters are rearrenged but they are same.
| |  -------------------------------------------------
| |  This Solutions Only works for Non negative arrays
| |  Time complexity: N + N + N + C ~ O(N)
| |  Space Complexity: N + N ~ O(N)
\*/


//Input: 
const str1 = 'cinema';
const str2 = 'iceman';

//This is also follow the patter of Frequence counter
function anagram(str1, str2){

    if(str1.length !== str2.length) return false


// Create Objects with Respect frequencies

const obj1 = {};

for (const i of str1) {
    obj1[i] = obj1[i] + 1 || 1
}


console.log(obj1);

for (let i of str2) {
    if( ! obj1[i] ) return false;
    obj1[i] = obj1[i] - 1;
}

return true

}

console.log(anagram( str1, str2))