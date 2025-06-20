// const a=[1,2,2,4,5]
//     const c=a.map((num)=> num %2==0 ? num:0 )
// console.log(c)



// let a=[1,2,3,4,5];
// let b=a.reduce((c,d)=>{

//     if(d>c){
//         return d
//     }else{
//         return c
//     }

// },a[0])
// console.log(b);



// call


// const person={
// detail() {
//    return  this.name +""+ this.age
// }
// }

// const c={
//     name:"fasalu",
//     age:8
// }

// console.log(person.detail.call(c));

// apply
// const person={

//     detail (city,job) {
//         return this.name +","+ this.age +","+city+ ","+job
//     }
// }

// const c={
//     name:"fff",
//     age:5,
// }

// let g=(person.detail.apply(c,["hhh","000"]));


// console.log(g);


// const person={
//     name:"fasalu",
//     age:5,
//     detail:function(){
//  return this.dance +""+this.group
//     }
// }

// const person1={
//     dance:"uu",
//     group:"oo",
// }

// let g=person.detail.bind(person1)
// console.log(g());


// d=()=>"gjhbgaj"
// console.log(d());




// const mymap=new Map

// mymap.set('a',1)
// mymap.set('b',2)
// mymap.set('c',3)

// console.log(mymap);

// const value=mymap.get('c')
// console.log(value);

//  mymap.delete('b')
// console.log(mymap);


// const a=[1,22,33,33,33]
// const c=new Set(a)
// console.log(c);


// const arr=[1,2,3,4,5]
// const arr2=arr.map((x)=>{
//     return x*2
// })
// console.log(arr2);

// const arr=[1,2,3,4,5];
// const arr2 =arr.map((ele)=>ele*2)
// console.log(arr2);

// const arr=[5,6,7,8,9];
// const arr2=arr.filter((ele)=> ele%2===1);
// console.log(arr2);

//  const a=[13,4,5,6,77,0];
//  function isprime(num){
//     for(var i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return num>1;
//  }
//  const primenum=a.filter(isprime);
// console.log(primenum);

// const arr=[1,2,3,4,5];
// const c=arr.map(number).reduce((arr,b)=>{
//     return arr+b
// });






// const a=[5,6,4,3,3,3];
// const b=a.reduce((a,b)=>(a+b))
// console.log(b);



// const myArray = [1, 2, 3, 4, 5];
// myArray.map((el) => console.log(el));

// const c=[1,2,3,4,5];
// c.forEach((a,b)=>{
//     if(a+b==23&&a!==0&&b!==0){
//         console.log(a,b);
//     }
// })

// function sum(n1,n2){
//     console.log(n1+n2);
// }
// sum(5,5);

// var a=[1,2,3,4,5];
// a.sort();
// console.log(a);



// const arr=[1,2,3,4,5]
// var i=0;
// while (i<arr.length) {
//     if(arr[i] %2 === 0){
// console.log(arr[i]);

// }
// i++;
// }


// const a=[1,2,3,4,5]
// var i=0;
// do{
//     console.log(a[i]);
//     i++;
// }while(i<a.length)

// deep copy shallow copy

// const orginalobject={
//     name:"fasalu",
//     age:7,
//     address:{
//         city:"cherukara"
//     }
// }

// const c=JSON.parse(JSON.stringify(orginalobject))

// console.log(c.name="ggg");
// console.log(c.address.city="kkkk");


// console.log(orginalobject.name)
// console.log(orginalobject.age);


// shallow copy

// const orginalobject={
//     name:"fasalu",
//     age:7,
//     address:{
//         city:"cherukara"
//     }
// }


// const c=Object.assign(orginalobject)

// console.log(c.name='iiii');
// console.log(orginalobject.name);


// const a =[3,4,5,2,1]
// var s=a[0]
// var s2
// for(let i in a){
// if(a[i] >s){
//     s2=s;
//     s=a[i]
// }else if(s < s2 && s!= s2){
//     s2 = a[i]
// }

// }
// console.log(s);
// console.log(s2);

// const b = [1,2,3,4,5]
// for (let i =b.length-1 ; i >=0; i--) { 
//     console.log(b[i]);
// }

// const v=[1,2,2,3,4]
// var avg
// for(let i=0;i<v.length;i++){
//     var flag=0
//     for(let j=0;j<v.length;j++){
//         if(v[i]==v[j]&&i!=j){
//             flag ++
//         }
//     }
//     if(flag==0){
//             var sum=0
//             sum=sum+v[i]
//             console.log(sum)

// avg=sum/flag
// console.log(avg)
//     }
// }



// let count=10;
// function counddown(){
//     console.log(count);
//     count --;
//     if(count>=0){
//         setTimeout(counddown,1000)
//     }
// }
// counddown()

// const c=[1,3,4,5,6]
// let i=0;
// while(i<c.length){
//     console.log(c[i]);
//     i++
// }

// let num=1;
// do{
//     if(num%2!=0){
//         console.log(num);
//     }
//     num ++
// }while(num<=10)


// let day='p'
// switch(day){
// case 'm':
// console.log("correct");
// break;
// case'y':
// console.log("correct");
// break;
// default:
//     console.log("wrong");
// }

// let number = 4;
// switch (number % 4) {
//   case 0:
//     console.log(`${number} is divisible by 3`);
//     break;
//   default:
//     console.log(`${number} is not divisible by 3`);
// }


// let x=10
// {

//     let x=2

// }

// console.log(x);


// var x = 10;

// function outer() {
//   var x = 20;

//   console.log(x); // 20
// }

// outer();

// console.log(x); // 10






// function calculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }
// }
// console.log(calculateVolume(4)(5)(6));






// for(var i = 0; i<10; i++){
//     setTimeout(() => {
//         console.log(i)
//     },1000*i)
// }


// for(let i = 0; i<10; i++){
//     setTimeout(() => {
//         console.log(i)
//     },1000*i)
// }


// var s="d"
//  let d='o'
// console.log(s);


// for(let i=0;i<10;i++){}

// console.log(i);

// function a() {
//     let i = 7;
//     function c() {
//         console.log(i);
//     }
//     c()
// }
// a();

// console.log(e);
// var e=2
// console.log(e);


// const s = "Of all the gin joints in all the towns in all the world,   "
// const a=s.split(' ')
// console.log(a);