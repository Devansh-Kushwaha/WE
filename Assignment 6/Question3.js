let cloneObj={};
function deepClone(obj){
    if (obj==null || typeof obj !=="object"){
        return obj}
    if (Array.isArray(obj)){
        let newArr=[]
    obj.forEach(element => {
            newArr.push(element)
        });
        return newArr
    }
    else if (typeof obj === "object"){
        let nestedobj={}
        for (let key in obj){
            nestedobj[key]=deepClone(obj[key]);
        }
        return nestedobj
    }
}
obj={
    name: "Doe",
    age: 30,
    skills: ["JavaScript", "Python", "C++"],
    address: { city: "Los Angeles", zip: 10001 }
}
for (let key in obj){
    cloneObj[key]=deepClone(obj[key]);
}
console.log(cloneObj)