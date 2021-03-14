// https://www.codewars.com/kata/5b71af678adeae41df00008c/train/javascript

function shortestDistance(a, b, c) {
    let sol1 = Math.sqrt((a+b) ** 2 + c ** 2);
    let sol2 = Math.sqrt((a+c) ** 2 + b ** 2);
    let sol3 = Math.sqrt((b+c) ** 2 + a ** 2);
    
    return sol1 < sol2 && sol1 < sol3 ? sol1 : sol2 < sol1 && sol2 < sol3 ? sol2 : sol3;
}