// const obj = { a: 1, b: 2, c: 3 };
// const keys = Object.keys(obj);
// console.log(keys); 



// const obj = { a: 1, b: 2, c: 3 };
// const values = Object.values(obj);
// console.log(values);


// const obj = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(obj);
// console.log(entries); 


// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };
// const merged = Object.assign( target,source);
// console.log(merged); // Output: { a: 1, b: 3, c: 4 }


// changes is not possible new adding not possible

// const obj = { a: 1, b: 2 };
// Object.freeze(obj);
// delete obj.a
// obj.b = 3; 
// obj.c=8
// console.log(obj); // Output: { a: 1, b: 2 }


// changes is possible new adding not possible

// const obj = { a: 1, b: 2 };
// Object.seal(obj);
// delete obj.a
//  obj.a=4
//  obj.c=8
// console.log(obj);

// const obj = { a: 1, b: 2 };
// const properties = Object.getOwnPropertyNames(obj);
// console.log(properties); // Output: ["a", "b"]

// const obj = [{a: 5, b: 7}, {c: 2, d: 4}];
// obj.forEach((item)=>{
//     let num=0
//     let num1=0
//     for(let ele in item){
//         if(num===0){
//             num=item[ele]
//         }else{
//             num1=item[ele]
//         }
//     }

//     for(let i=1;i<=num1;i++){
//         console.log(`${i} * ${num} =${i*num1}`);
//     }
// })

// const c = [[1, 2], [3, 4]];
// console.log(c[1][0]); // Output: 1


// gr questions

// const c=10
// function a(){
// return c
// }
// let f=a()
// console.log(f);


// pass by value

// function a(x){
// x=10
// }
// var y=5;
// a(y)
// console.log(y);

// pass by reference

// const obj={
//     name:'fasal',
//     age:22
// }

// function a(b){
// b.name="hkfb"
// b.age=23
// }

// a(obj)
// console.log(obj.name);
// console.log(obj.age);

// closure,nested functions

// function a(name){
//     let a=10
//     function b(){
//         console.log("hi bro"+name);
//         console.log(a);
//     }
//     b()
// }

// a('fasalu')


// returning a function from another function

// function a(name){
//     function b(){
// console.log("helo"+name);
//     }
//     return b
// }

// let n=a("kj")
// n()



// const s = "loveleetcode";
// const c = "e";

// // Initialize the answer array with a large number (Infinity)
// const answer = new Array(s.length).fill(Infinity);

// // Left-to-right pass
// let prev = -Infinity;
// for (let i = 0; i < s.length; i++) {
//     if (s[i] === c) {
//         prev = i;
//     }
//     answer[i] = Math.abs(i - prev);
// }

// // Right-to-left pass
// prev = Infinity;
// for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === c) {
//         prev = i;
//     }
//     answer[i] = Math.min(answer[i], Math.abs(i - prev));
// }

// console.log(answer); // Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]


