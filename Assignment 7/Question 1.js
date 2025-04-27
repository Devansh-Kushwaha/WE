const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", function(name) {
    let i=0
    name=name[0].toUpperCase() + name.slice(1)
    for(i=0;i<name.length;i++){
        if (name[i]==" "){
            name=name.slice(0,i+1)+name[i+1].toUpperCase() + name.slice(i+2)
        }
    }
    
    console.log(name)
  rl.close();
});
