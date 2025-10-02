// var a=[1,2,3,4,5];
// const c=a.forEach((e)=>(console.log(e)))

// const a=[1,2,3,4,5];
// function myfunction(arg){
//     console.log(arg);
// }
// a.forEach(myfunction);

// shallqow copy arrays
// const originalArray = [1, 2, 3];
// const shallowCopy = originalArray.concat();
// shallowCopy[1]=4
// console.log(originalArray);
// console.log(shallowCopy);

// shallow copy objects
// const originalObject = [{ a: 1},{b: 2}];
// const shallowCopyobj=originalObject.concat();
// shallowCopyobj[0].a=8
// console.log(shallowCopyobj);
// console.log(originalObject);




// const c=[1,2,3,4,5]
//  const v=c.slice(1,3)
// console.log(v);


const original = ["apple", "banana", "cherry"];

const shallowCopy = original.slice(); 

const deepCopy = JSON.parse(JSON.stringify(original));

shallowCopy[0] = "apricot";

deepCopy[0] = "avocado";

console.log(original);   
console.log(shallowCopy); 
console.log(deepCopy);    
