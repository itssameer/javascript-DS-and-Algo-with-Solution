function sumRange(num) {
    if(num <= 0) return 0 // Base condition
    return num + sumRange(num-1); // reducing orginal input
}

console.log(sumRange(5));