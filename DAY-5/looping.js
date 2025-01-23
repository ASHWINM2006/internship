/*
two kinds of loops: 
normal:
  for while do...while
advanced:
    for...in for...of forEach 
*/
// for loop
var a=[10,20,30]
var b={"count":70,"abs":1}
/*for(let i in a){
    console.log(i)
}
for(let i in b){
    console.log(i,b[i])
}*/
/*set=new Set(["hello",1,2,"SECE",44])
for(let i of set){
    console.log(i)
}
for(const key in set){
    if(Object.hasOwnProperty.call(set,key)){
        const element = set[key];
        console.log(element)
    }
}*/
//o/p:it will not print anything in my set.
//for of loop
for(let [i,j] of Object.entries(b) ){
    console.log(i,j)
}