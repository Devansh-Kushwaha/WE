let string1="listen"
let string2="silent"
let i
let a={}
let b={}
let aunique=0
let bunique=0
if (string1.length===string2.length){
    for (i=0;i<string1.length;i++){
        if(a[string1[i]]){
            a[string1[i]]++
        }
        else{
            a[string1[i]]=1
            aunique++
        }
    }
    for (i=0;i<string2.length;i++){
        if(b[string2[i]]){
            b[string2[i]]++
        }
        else{
            b[string2[i]]=1
            bunique++
        }
    }
    if (aunique===bunique){
        for (let variable in a){

            if (a[variable]==b[variable]){
                aunique--
            }}
        if (aunique===0){
            console.log("Strings are anagrams")
        }
        else{
            console.log("Strings are not anagrams")
        }
        
    }
    else{
        console.log("Strings are not anagrams")
    }
}
else{
    console.log("The strings are not anagrams")
}