function printNumber(num) {
    console.log(num);
    //Base condition
    if(num<=0) return 0
    //reduced input
    return printNumber(num -1)
}

printNumber(5)