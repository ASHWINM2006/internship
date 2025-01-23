//objects (i.e) map stores key value pairs which is in json format
obj={
    firstname:"bala",
    lastname:"chandar"
}
array=[10,'a',"bala",[10,20]]
console.log(array);
console.log(obj);
console.log(typeof(obj));
//ways of accessing the object
console.log(obj.firstname);
console.log(obj["lastname"]);
//ways for declaring the objects
obj1={}
obj2=new Object()
console.log(obj1);
obj1["dept"]='cse'
obj1['sec']="A"
obj2.cnt=150
obj2.sub=10
console.log(obj2)
console.log(obj1);
console.log(obj2);
set =new Set(["ii",8])
console.log(typeof(set));
console.log(set);