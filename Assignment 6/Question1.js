let i;
let timer;
function debounce(func,i,delay=0){
    return (()=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func(i)
        },delay)
    })
}
function print(text){
    console.log(text)
}
for (i=0;i<1000000;i++){
    debounce(print,i)()
}
setTimeout(()=>{debounce(print,456)()},100)
