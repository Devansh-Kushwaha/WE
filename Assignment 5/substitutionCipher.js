import readline from 'node:readline'
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function askQuestion(question){
    return new Promise(resolve=>{
        rl.question(question,answer=>{
            resolve(answer)
        })
    })
}

let key=[]
let numAl=26

let i=65
let randomKey=0
let characterKey=-1
let newKey=-1
while (i<numAl+65){
    randomKey=Math.floor(Math.random()*26)
    characterKey=String.fromCharCode(i)
    newKey=(((i+randomKey)-65)%26)+65
    if (!key.includes(String.fromCharCode(newKey))){
        key.push(String.fromCharCode(newKey))
        i++
    }
}

let input= await askQuestion("Enter the string to be encoded: ")
input=input.toUpperCase()
let enc=""
let character="a"
let code=0
for (let i = 0; i < input.length; i++) {
    character=input[i];
    code=character.charCodeAt(0)-65;
    if (key.includes(character)){
        enc+=key[code]
  }
    else{
        enc+=character
    }
}

console.log("Key:",key)
console.log("Encoded String:",enc)