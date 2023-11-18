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
var a = new Promise((resolve,reject)=>{
var a=2+2
if(a==4){
    resolve('success');
}else{
    reject('failure')
}
});
a.then((message)=>{
console.log('completed'+message);
}).catch((message)=>{
    console.log('not done'+message);
})











// var dog = {

//     name: 'Lady',
  
//     friends: '9',
  
//   };
  
//   console.log(dog['friends'])