function a(fn){
 console.log("Please wait...");
 setTimeout(fn,5000)

}
function b(){
console.log("hi guys");
}
a(b);

// a is higher order function
// b is the callback function  

