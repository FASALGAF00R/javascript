
//  const fs=require('fs')

// for(let i=1;i<11;i++){
//     let count =1
//     setTimeout(() => {
//         fs.appendFile('dly.txt',i+'x'+count+'='+i*count+'\n',(err)=>{
//             if(err)
//                 console.log(err);
            
//         })
//     },i* 1000);
// }

// let time=setInterval(()=>{
//     console.log("this message will be logged  every 2 sec");
// },2000)


// setTimeout(() => {
//     clearInterval(time)
//     console.log("cleared");
// }, 10000);


// function * fun(){
//     yield 10;
//     yield 17;
//     yield 1;
//     yield 4;

// }

// let gen =fun();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function * func(){
//     for (let i = 1; i <= 10; i++) {
//         yield i;
//       }
// }

// let g=func()
// for(let c of g){
//     console.log(c);
// }
// console.log(g.next().value);


// let a = new Promise(function(resolve,reject){
//     const x=10;
//     const y=6;
//     if(x>y){
//         resolve()
//     }else{
//         reject()
//     }
//  });
 
//  a.
//  then(function(){
//      console.log('success')
//  }).
//  catch(function(){
//      console.log('error got')
//  })


// const person={

//     name:'fasal',
// }
//    function sayhi(b){
//         console.log(`hi,im ${this.name}!`);
// }
// person.call(person,"fasal")


// 

const c=[1,2,3,4,5]
const b=c.reduce((a,b)=>{
    if(b%2===0){
        return a+b
    }else{

        return a
    }
},0)

console.log(b);