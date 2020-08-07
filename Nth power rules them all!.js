// Long solution
function modifiedSum(a,n) {

    let nth = 0;
    let sum = 0;
  
    for (let i = 0; i < a.length; i++) {
        nth += a[i]**n;
        sum += a[i];
    }
    return nth - sum;
}

// Short solution 
const modifiedSum = (a,n) => a.reduce((a,b) => a+b**n,0) - a.reduce((a,b) => a+b,0);