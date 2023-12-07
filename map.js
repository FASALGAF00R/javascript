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


// const a=[1,2,3,4,5]
// var i=0;
// do{
//     console.log(a[i]);
//     i++;
// }
// while(i<5);




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




