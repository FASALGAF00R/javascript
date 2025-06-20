// var a=[1,2,3,4,5];
// const c=a.forEach((e)=>(console.log(e)))

// const a=[1,2,3,4,5];
// function myfunction(arg){
//     console.log(arg);
// }
// a.forEach(myfunction);


// const originalArray = [1, 2, 3];
// const shallowCopy = originalArray.slice();
// shallowCopy[1]=4
// console.log(originalArray);
// console.log(shallowCopy);

// const c=[1,2,3,4,5]
//  const v=c.slice(1,3)
// console.log(v);


const original = ["apple", "banana", "cherry"];

const shallowCopy = original.slice(); 

const deepCopy = JSON.parse(JSON.stringify(original));

shallowCopy[0] = "apricot";

deepCopy[0] = "avocado";

console.log(original);   // Output: ["apple", "banana", "cherry"]
console.log(shallowCopy); // Output: ["apricot", "banana", "cherry"]
console.log(deepCopy);    
