function fibonacci(n) {
    let arr = [];
    
    arr[0] = 0;
    arr[1] = 1;
    
    if(n <= 0) {
      return [];
    }
    else {
        for(let i = 2; i < n; i++) {
            arr[i] = arr[i - 2] + arr[i - 1];
        }
        return arr;
    }
  
  }