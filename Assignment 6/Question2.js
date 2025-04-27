let numbers = [5, 2, 9, 1, 7];
let indices={}
for(i=0;i<numbers.length;i++){
    indices[numbers[i]]=i
}
let key=[3,5,6,8,2];
numbers.sort((a,b)=>key[indices[a]]-key[indices[b]])
console.log(numbers)