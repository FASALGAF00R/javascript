// const arr=[1,2,3,4,5,5]
// let flag
// for(let i=0;i<arr.length;i++){
//     flag=0
//     for(let j=1;j<=arr[i];j++){
//         if(arr[i]%j===0){
//             flag ++
//         }
//     }
//         if(flag==2){
//             console.log(arr[i]);
//         }
    
// }

// const arr=[3,4,5,5,6,7,7]
// for(let i=0;i<arr.length;i++){
        
// console.log(arr[i]);
// }

let arr=[6,2,9,3,2]
let count =0
for(let i=0;i<arr.length;i++){
    let flag=0
    for(let j=1;j<=arr[i];j++){
        if (arr[i]%j==0) {
            flag ++
        }
    }
    if (flag===2) {
        count ++
    }
}
console.log(count);       















