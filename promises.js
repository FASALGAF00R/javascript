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

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>resolve, 300, "resolved");
  }); //will be resolved after 300ms
  
//  const promise2 = 93; //non-promise
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>reject, 100, "resolved2");
  }); // will be resolved after 100ms
  
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(()=>reject, 100, "rejected");
  }); 


  Promise.race([promise1,promise3, promise4])
    .then((values) => {
      console.log(values);
    })
    .catch((err) => {
      console.log(err);
    });






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