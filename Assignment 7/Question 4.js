function pushElements(arr,result){
    arr.forEach(element => {
        if(Array.isArray(element)){
            pushElements(element,result)
        }
        else{
            result.push(element)
        }
    });
}

arr=[[1,2,3],[4,5,[6,7],8],9,10]
result=[]
pushElements(arr,result);
console.log(result);
