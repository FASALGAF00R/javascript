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


// const arr=[99,2,10,4,-9]
// var search=2
// for(let i=0;i<arr.length;i++){
//      if( search==arr[i]){
//         console.log("value found at ",i + "th position");
//         break;
//     }
// }

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
//     flag=1
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j] && i!=j){
//             flag++       
//         }
//     } 
//     if(flag==1){
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

// const arr=[4,3,4,5,6]
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



// const a = [1, 2, 3, 4, 5]
// function factorial(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n * (factorial(n - 1))
// }
// const c = a.map(factorial)
// console.log(c);


// const a=[1,2,3,4,5];b=[6,7,8,9,10]
// const c=[]

// for(let i=0;i<a.length;i++){
//     c[i]=a[i]
// }

// for(let i=0;i<b.length;i++){
//     c[i+a.length]=b[i]
// }
// console.log(c);


// const str='malayalam'
// const a=str.split('')
// function checkpali(string){
//     for (let i = 0; i <a.length/ 2; i++) {
//         if (a[i] !== a[a.length - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     return 'It is a palindrome';
// }
// }
// const string =a;
// const vl=checkpali(string)

// console.log(vl);



// const arr = [1, 3, 2, 5, 9]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 0) {
//         for (let j = i; j < arr.length; j++) {
//             arr[j] = arr[j + 1]
//         }
//         arr.length--
//     }
// }

// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i]
//     arr[i] = arr[arr.length - i - 1]
//     arr[arr.length - i - 1] = temp
// }
// console.log(arr)

// const a = [1, 2, 7, 3, 5]
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 3 == 0) {
//         for(let j=i;j<a.length;j++){
//         const temp = a[j - 1]
//         a[j - 1] = a[i]
//         a[i] = a[j + 1]
//         }
//         a.length--;
//         i--;
//     }
// }
// console.log(a);

// const a = [1, 3, 79, 4, 5];
// let n = a.length;

// for (let i = 0; i < n; i++) {
//     if (a[i] % 3 === 0) {       
//         for (let j = i - 1; j < n - 1; j++) {
//             a[j] = a[j + 1];
//         }
//         n--; 
//         i--; 
//         for (let j = i + 1; j < n - 1; j++) {
//             a[j] = a[j + 1];
//         }
//         n--; 
//         break; 
//     }
// }
// for (let i = 0; i < n; i++) {
//     console.log(a[i]);
// }


// const a = [1, 3, 3, 4, 5]
// for (let i = 0; i < a.length; i++) {
//     for (let k = i + 1; k < a.length; k++) {
//         if (a[i] == a[k]) {
//             for (let j = i; j < a.length; j++) {
//                 a[j] = a[j + 1]
//             }
//             i--;
//             a.length--;

//         }
//     }
// }



// console.log(a);

// const a=[1,2,3,0,-5]

// function check(a){
//     for(let i=0;i<a.length;i++){
//         if(a[i]>a[i+1]){
//             return false;
//         }
//     }
//     return true
// }

// console.log(check(a));

// pushing of elements to the end of the array

// const a = [0, 1, 0, 3, 12]
// const c = []
// for (let i = 0; i < a.length; i++) {
//     if (a[i] != 0) {
//         c.push(a[i])
//     }
// } 
// for (let j = 0; j < a.length; j++) {
//     if(a[j]==0){
//         c.push(a[j])
//     }

// }
// console.log(c);

// next approach

// const a = [0, 1, 0, 3, 12];

// let j = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] != 0) {
//         // swap a[i] with a[j]
//         let temp = a[i];
//         a[i] = a[j];
//         a[j] = temp;
//         j++;
//     }
// }

// console.log(a); 

