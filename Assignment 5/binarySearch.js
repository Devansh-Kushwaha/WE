import readline from 'node:readline'
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let length=0

function askQuestion(question){
    return new Promise(resolve=>{
        rl.question(question,answer=>{
            resolve(answer)
        })
    })
}

async function askLength(){

    length= await askQuestion("Enter the number of elements in array: ")
    length=parseInt(length);
}


async function populate(){
    let arr=[]
    for(let i=0;i<length;i++){
        let num=await askQuestion(`Enter element ${i+1}: `);
        arr.push(parseInt(num))
    }
    return arr
}

await askLength()
let arr = await populate();
// let arr=[1,2,3,4]
console.log(arr)
let k= await askQuestion("What number is to be found? ")
k=parseInt(k)
arr.sort((a,b)=>a-b);
rl.close();

let found=false
let r=length;
let l=0;
let index=-1;
let mid=-1;
while (r>l && !found){
    console.log(l,r)
    mid=Math.floor((r+l)/2)
    if(arr[mid]==k){
        found=true
        index=mid
        break
        }
    else if(arr[mid]>k){
        r=mid
        }
    else{
        l=mid
        }            
}

if (found){
    console.log(`Number ${k} is found at index ${index}`)
}
else{
    console.log(`Number ${k} is not found in the array`)
}
