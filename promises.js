// let a = new Promise ((resolve,reject)=>{
//     let a=1+7
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

// a.then((message)=>{
//     console.log('yes'+message);
// }).catch((message)=>{
//     console.log("not"+message);
// })

// promise all

// const promise1=new Promise((resolve,reject)=>{
//         resolve("apple")     
// })

// const promise2=new Promise((resolve,reject)=>{
//         reject("reject")  
// })

// const promisereject=new Promise((resolve,reject)=>{
//         resolve("mango")     
// })

// const result=Promise.all([
//     promise1,promise2,promisereject
// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));

// promise.race

// Promise.race([
//     new Promise((resolve) =>
//         setTimeout(() =>
//             reject("Task 1 finished"), 1000)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 2 finished"), 500)),
// ]).then((result) =>
//     console.log(result)).catch((error)=>{
//         console.log("error");
        
//     })
    

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("succ")
//     }, 5000);
// })

// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(() => {    
//         resolve("su")
//     }, 500);
// })

// const result=Promise.any([
//     promise1,promise2
// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));



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




const a=new Promise ((res,rej)=>{
    res("welcome fasla")
})

const result=async ()=> {
const response=await a
console.log(response);
}

result()




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