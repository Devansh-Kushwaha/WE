let a=-1
let b=1
let n=10
let memo={};
function fibonacci(n) {
    if (n===0){
        return 0;
    }
    else if (n==1){
        return 1;
    }
    else if (n in memo){
        return memo[n]
    }
    else {
        let result = fibonacci(n-1) + fibonacci(n-2);
        memo[n]=result;
        return result;
        }
    }
for (i=0;i<n;i++){
    console.log(fibonacci(i))
}
