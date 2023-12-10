// loops - why even use loop 

// function 

//callBackFn

function square(n) {
    return n*n
}



function sumOf(a,b,fn) {
    console.log(fn);
    return fn(a)+fn(b)
}

console.log(sumOf(3,4, n =>  n*n*n));