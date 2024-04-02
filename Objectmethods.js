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
// const merged = Object.assign(target, source);
// console.log(merged); // Output: { a: 1, b: 3, c: 4 }




// const obj = { a: 1, b: 2 };
// Object.freeze(obj);
// obj.b = 3; // Throws an error in strict mode
// console.log(obj); // Output: { a: 1, b: 2 }



// const obj = { a: 1, b: 2 };
// Object.seal(obj);
// delete obj.a; // Returns false in strict mode
// console.log(obj); // Output: { a: 1, b: 2 }

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


