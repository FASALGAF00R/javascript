// const arr=[1,2,3,4,7]
// let sum=0
// let avg
// var arr2=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==1){
//         arr2.push(arr[i])
//         sum=sum+arr[i]
//         avg=sum/arr2.length
//     }
// }
// console.log(avg);  


// const arr=[3,2,2,3,4]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             console.log(arr[i]); 
//         }
//     }
// }

// const arr=[1,2,2,4,5]
// let flag
// for(let i=0;i<arr.length;i++){
//     flag=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j] && i!=j){
//             flag++       
//         }
//     }
//     if(flag==0){
//         console.log(arr[i]);   
//     }
// }

// const arr=[4,5,6,8,3]
// let flag
// for(let i=0;i<arr.length;i++){
//     flag=0
//     for(let j=1;j<=arr[i];j++){
//         if(arr[i]%j==0){
//             flag++
//         }
//     }
//     if(flag==2){
//         console.log(arr[i]);       
//     }
// }

// const arr=[5,2,-3,1,20,8]
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

// for(let i=0;i<arr.length/2;i++){
//     const temp=arr[i]
//     arr[i]=arr[arr.length-i-1]
//     arr[arr.length-i-1]=temp
// }
// console.log(arr);

// const arr=[9,6,2,2,5]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             const temp =arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr);


// const arr = [1,-6,7,8,11]
// var L = arr[0]
// var sl
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > L) {
//         sl=L
//         L = arr[i]
//     }else if(sl<L && arr[i] >sl ){
//         sl=arr[i]
//     }
// }

// console.log(sl);



// const arr = [1,-6,7,8,11]
// var s = arr[0]
// var ss
// for (var i = 0; i < arr.length; i++){
//     if (arr[i] < s) {
//         ss=s
//     s = arr[i]
// }else if(ss>s && arr[i] <ss){
//         ss=arr[i]
//     }
// }
// console.log(ss);
// console.log(s);



// const largest = Math.min(...arr);
// console.log(largest);

// const v=[1,2,3,4,5]
// var pos=3
// for(let i=pos;i<v.length;i++){
//         v[i]=v[i+1]
// }
//     v.length--;
// console.log(v);


// const v=[1,25,3,4,5]
// for(let i=0;i<v.length;i++){
//     if(v[i]% 5==0){
//         console.log(v[i]);  
//     }
// }


// const v = [1, 1, 25, 3, 3, 4, 5]
// var count;
// var f = []
// for (let i = 0; i < v.length; i++) {
//     count = 1
//     if (v[i] != -1) {
//         for (let j = i + 1; j < v.length; j++) {
//             if (v[i] == v[j]) {
//                 count++
//                 v[j] = -1
//             }
//         }
//             f[i] = count

//     }
// }

// for (let i = 0; i < v.length; i++) {
//     if(v[i]!=-1){
//         console.log(v[i] ,":", f[i]);
//     }
// }



const a = [1, 2, 3, 4, 5]
function factorial(n) {
    if (n == 1) {
        return 1
    }
    return n * (factorial(n - 1))
}
const c = a.map(factorial)
console.log(c);


