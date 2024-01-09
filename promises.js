// let a = new promise ((resolve,reject)=>{
//     let a=1+1
//     if (a==2){
//         resolve('success');
//     }else{
//         reject('failure');
//     }
// });

// a.then((message)=>{
//     console.log('completed'+message)
// }).catch((message)=>{
//     console.log('not completed'+message)
// })


// var a = new Promise((resolve,reject)=>{
// var a=2+2
//  setTimeout(() => {
//     if(a==4){
//         resolve('success');
//     }else{
//         reject('failure')
//     }
//  }, 2000);
// });

// a.then((message)=>{
//     console.log("yes" +message);
// }).catch((message)=>{
//     console.log("no" +message);
// })








// const addition = (a, b) =>
//   new Promise((resolve, reject) => {
//     if (typeof a == "number" && typeof b == "number") {
//       resolve(a + b);
//     } else {
//       reject("Not a Number");
//     }
//   });

// addition(1, 5)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Numbers are added");
//   });










// var dog = {

//     name: 'Lady',
  
//     friends: '9',
  
//   };
  
//   console.log(dog['friends'])