// function a(fn){
//     fn();

// }
// function b(){
// console.log("hi guys");
// }
// a(b);

// a is higher order function
// b is the callback function  

// find square of an array elements
const a=[1,2,3,4,5]; 
const  square=function(a){
    const output=[];
    for(var i=0;i<a.length;i++){
        output.push(a[i]*2);
    }
    return output;
}
console.log(square(a));