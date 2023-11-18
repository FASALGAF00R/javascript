// console.log('hi');
// document.getElementById('button').onclick = fasalu;
// function fasalu(arg){
// console.log(arg);
// }
// // fasalu(10)
// console.log('hi');

// }
function multiply(a,b,callback) {
    let result =a*b;
    callback(result);
}
multiply(2,3,function(result){
    console.log(result);
});
// console.log('hi');
// setTimeout(function() {console.log('Hello, world!');}, 5000);
//   function x(){
//     console.log("x");
//   }
//   x()
