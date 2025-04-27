let Array1=[1,3,6,10,11,12,13]
let Array2=[2,4,5,7,8,9]
let i=0
let j=0
let mergedArray=[]
while (i<Array1.length && j<Array2.length){
    if (Array1[i]<Array2[j]){
        mergedArray.push(Array1[i])
        i++;
    }
    else{
        mergedArray.push(Array2[j])
        j++;
    }
}
if (i==Array1.length){
    Array2.slice(j).forEach(element => {
        mergedArray.push(element)
    });
}
if (j==Array2.length){
    Array1.slice(i).forEach(element => {
        mergedArray.push(element)
    });
}
console.log(mergedArray)