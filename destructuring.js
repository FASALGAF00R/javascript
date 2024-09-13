// const a=[1,2,3,4,5]
// const[first,second]=a;
// console.log(first);
// console.log(second);

// const person={
//     firstname:'fasal',
//     age:10
// }
// const {firstname,age}=person;
// console.log(firstname);
// console.log(age);


// const alphabets={
//     "":1,
//     b:2
// }
// console.log(alphabets[""]);

// const name="hi",wish="how are you"
// console.log(`${name} fasal ${wish}`);


// var x=1;
// {
//     var x=2;
// }
// console.log(x);


// const favouriteanimal ="dog"
// switch(favouriteanimal){
// case "kangaroo":
//     console.log("got kangarooo");
//     break;
// case "cat":
//     console.log("got cat");
//     break;
//     case "dog":
//         console.log("got dog");
//         break;
//         default:
//             console.log("nothing");

// }








// try {
//     console.log("hiiiiiiiiiiii");
//     ghdfb;
// } catch (err) {
//     console.log("error");
// }finally{
//     console.log("gjdfgdjng");
// }
// console.log("end");



// var arr=[1,2,5,4,6]
// var target=5;
// for(let i=0;i<arr.length;i++){
// if(arr[i]==target)
// break;
// console.log(arr[i]);
// }

// const person={
//     name:"sundar",
//     age:33,
//     city:"pmna"
// };

//  for(let ele in person){
//     console.log( ele + ":" +person[ele]);
//  }


// const myArray = [10, 20, 30];

// for (let value of myArray) {
//   console.log(value);
//   console.log(myArray[value]);
// }


// console.log("i"+1)
// console.log("6"+2)
// console.log("i"-1)
// console.log("i"+1+1)
// console.log("1"+1+1)
// console.log(1+"1"+1)
// console.log(1+"1"*1)
// console.log("6"*2)
// console.log("6"+2)
// console.log("6"-2)
// console.log(2-"i")
// console.log("1"*1)


// console.log("start");

// setTimeout(() => {
//     console.log("hii");
// },2000);

// let promise = new Promise(function (resolve, reject) {
// 	const x = "geeksforgeeks";
// 	const y = "geeksforgeeks"
// 	if (x === y) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// promise.
// 	then(function () {
		// console.log('Success, You are a GEEK');
// 	}).
// 	catch(function () {
// 		console.log('Some error has occurred');
// 	});
// console.log('helloooo');

//     setTimeout(() => {
//         console.log("lastt");
//     }, 1000);

//     console.log("kdfjshkgj");



// let a=new Promise ((resolve,reject)=>{


// setTimeout(()=>{
// console.log("jji");
// },2000)

//     var x=5;
//     vary=5;
//     if(x==y){
//         resolve("doo")
//     }else{
//         reject("jjj")
//     }
// })

// a.then(()=>{
//     console.log("ok");
// }).catch(()=>{
//     console.log("bdfjhbjdf");
// })








// function *generator(){
// yield 'hello1'
// yield 'hello2'
// yield 'hello3'
// yield 'hello4'
// }

// let g= generator()

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);



// iife
// (function(){

// console.log("hiii");

// })()

// carring function

// function calculate(l,b,h){
//     return l*b*h;
// }
//   console.log(calculate(2,3,4,));

// factory function
// function a(n,a){
//     return {
//         n,
//         a,
//         greet(){
//             return this.n +""+this.a
//         }
//     }
// }


// let i=a("fasalu",4)

// console.log(i.greet());

// function * generator(){
// let i=1;
// while(true){
//     yield i=i+2
// }
// }
// let g= generator()
// for(let i=0;i<10;i++){
// console.log(g.next().value);
// }





// let a=[1,2,3]
// let b=[4,5,6]

// let c=[...a,...b]

// let sum=c.reduce((acc,curr)=>{
//  return acc+curr
// },0)
// console.log(sum);



// let arr=[1,[2,3,[4]]]

// let newarr=arr.flat(Infinity)
// let sum=newarr.reduce((acc,curr)=> curr+acc,0)
// console.log(newarr);





// rest parameter 

// function sum(...s){
// let total=0;
// for(let i of s){
//     total=total+i
// }
// return total
// }
// console.log(sum(1,2,3,4,5,6,99))

// closure
// function a(){
// var name="fasalu"
//     function b(){
//         console.log(name);
//     }
//     b()
// }
// a()

//  call back

// function a(){
//     console.log("ji");

//     setTimeout(()=>{
// console.log("time");
// b()
//     },2000)
// }

// function b(){
//     console.log('kk');
// }

// a(b)


// let a={ab:{as:14,al:20,ad:30},ar:[4,6,8,9],af:90}
// console.log(a.af);
// console.log(a.ab.as-a.ar[0]);

// const a = [{d:54,ld:45},{aa:4,lod:45},{df:8,add:9},{fg:50,a:90}]

// const arr=a.map((ele)=>{
//     let key=Object.keys(ele)
//     return Math.abs(ele[key[0]]-ele[key[1]])
// })

// console.log(arr);

// const a = {ad:[{df:45,d:9,ad:4,lk:34}]}


// const sum=a.ad[0].df+a.ad[0].d
// console.log(sum);

// const index=a.ad.indexOf(a.ad[0])
// console.log(index);


// const abc = [[5,4],[9,10],[5,1],[10,3]]

// const a = abc.flat(Infinity)
// for(let i=0; i<a.length; i++){
//     if(i%2 ==0){
//         let m = ''
//         for(let j=0; j<a[i+1]; j++){
//             m += a[i]
//         }
//         console.log(m);
//     }
// }




// 5*5*5*5
// 9*9*9*9*9*9*9*9*9
// 5
// 10*10*10

// const c=abc.findIndex(e=>e[0]===5 &&e[1]===1)


// console.log(c);




// const arr = [[1, 2, 3], [5, 6, 7]];
// var result = [];

// for (let i = 0; i < arr[0].length; i++) {
//     var c = [];
//     for (let j = 0; j < arr.length; j++) {
//         c.push(arr[j][i]);
//     }
//     result.push(c);
// }

// console.log(result);



// const obj={a:1,b:2,c:3}

// const keys=Object.keys(obj);

// console.log(keys);


// const obj={a:1,b:2,c:3}

// const values=Object.values(obj)

// console.log(values);


//  const obj={a:1,b:2,c:3}

//  const entries=Object.entries(obj)
//  console.log(entries);


// const object1 = {
//     a: 1,
//     b: 2
//   };
  
//   const object2 = {
//     c: 3,
//     d: 4
//   };
  
//   const object3 = Object.assign({},object1, object2);
  
//   console.log(object3);

// const obj={a:1,c:3}

// const prop=obj.hasOwnProperty("d")

// console.log(prop);


// const obj={a:1,b:2}

//  Object.freeze(obj);

// obj.c=3

// delete obj.a

// obj.a=4

// console.log(obj);


// const obj = { a: 1, b: 2, c: 3 };

// Object.freeze(obj)

// delete obj.c
// console.log(obj);


// const obj = { a: 1, b: 2 };

// Object.seal(obj)

// obj.c=3;

// delete obj.a;

// obj.b=6;

// console.log(obj);


//proxyobject

// const target={
//     name:"fasalu",
//     age:10
// }

// const handler= {};

// const proxy1=new Proxy (target,handler)

// console.log(proxy1.name); 
// console.log(proxy1.age); 


// const obj ={
//   name:"fasalu",
//   age:10,
//   detail (){
// console.log(`hi from ${this.name}`);
//   }  
// }

// obj.detail()



// debounce
// function a(){
//     console.log("jiii");
// }

// let timer=setTimeout(a,1000)

// console.log("timer"+ timer);


// throttle

// flatmap

// const num=[1,2,3,4,5]

// const c=num.flatMap(x=>[x*2,x*3])


// console.log(c);







// function exampleFunction() {
//     if (true) {
//       var functionScopedVar = "I am function-scoped!";
//     }
  
//     console.log(functionScopedVar); // Accessible within the function
//   }
  
//   exampleFunction();


// function exampleFunction() {
//     if (true) {
//       let blockScopedVar = "I am block-scoped!";
//       const anotherBlockScopedVar = "I am also block-scoped!";
      
//   console.log(blockScopedVar); // Error: blockScopedVar is not defined outside the block
//   console.log(anotherBlockScopedVar);
//     }
//    // Error: anotherBlockScopedVar is not defined outside the block
//   }
  
//   exampleFunction();

// let a=10;
// let b=this

// console.log(a==b);





// vishnu gr

// class Car {
//   constructor(brand) {  
//     this.carname = brand;
//   }
// }
// mycar = new Car("Ford");

// subclass
// propertyadd
// cappedcollection
// queue concept
// vowels count
// spread
// arrayreverse
// reduce largest
// js memoryallocation
// variable swapping

// var x=12
// var y=34

// x=x+y
// y=x-y
// x=x-y
// console.log(x,y)


// spawn
// fork
// childvariables
// .env
// csrf prevation
// sertbot
// prototypeobject
// prototypeinheritance

// let arr=[1,2,3,4,5];
// let s=3
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==s){
//         for(let k=i;k<arr.length;k++){
//             arr[i]=arr[k];
//             arr--;
//         }
       
//     }
// }
// console.log(arr)



// const adventurer = {
// 	name: 'Alice',
// 	cat: {
// 	  name: 'Dinah',
// 	},
//   };


//   const dogName = adventurer.dog?.name;
// console.log(dogName);

// const a = {
// 	name:'fasal'
// }

// console.log(a.name); 

// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(person['firstName'],person['lastName']);



//   const person ={
// 	firstname:'fasalu',
// 	lastname:'gafoor',
// 	fullName:function(){
// 		return this.firstname+''+this.lastname
// 	}

//   }
//   console.log(person.fullName());


