let a = new Promise ((resolve,reject)=>{
    let a=1+7
    if (a==2){
        resolve('success');
    }else{
        reject('failure');
    }
});

a.then((message)=>{
    console.log('completed'+message)
}).catch((message)=>{
    console.log('not completed'+message)
})

// a.then((message)=>{
//     console.log('yes'+message);
// }).catch((message)=>{
//     console.log("not"+message);
// })

// promise all

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));

// promise.race

Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            reject("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result)).catch((error)=>{
        console.log("error");
        
    })
    



// let p = new Promise ((resolve,reject)=>{
//     reject(["uu","00"])
//     // reject("failed")
//     })
    


// const pp=Promise.race([v,p])

// pp.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
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