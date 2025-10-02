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



// const a = [1, 2, 2, 4, 5]
// function factorial(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n * (factorial(n - 1))
// }
// const c = a.map(factorial)
// console.log(c);


// const a = [1, 2, 2, 4, 5]
// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] == a[j]) {
//             for(let k=j;k<a.length;k++){
//                 a[k]=a[k+1]
//             }
//             a.length--
//             +
//             i--
//         }

//     }

// }``
// console.log(a);


// const a = [1, 5, 4, 3, 4]
// let target=8
// let c=[]
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         let result=a[i]+a[j]
//         if(result==target){
//             c.push([a[i],a[j]])
//         }
//     }
// }

// console.log(c);

// const a = [1, 0, 0, 4, 4]
// var pos=0
// for (let i = 0; i < a.length; i++) {
//     if(a[i] !== 0) {
//         a[pos]=a[i]
//         pos++
//     }

// }
// for (let i = pos; i < a.length; i++) {
//     a[i] = 0;
// }

// console.log(a);

// const a = [1,2,3,4,5,6,7,8,9,10];
// let k = 4;
// let c = [];

// for (let i = a.length - k; i < a.length; i++) {
//     c.push(a[i]);
// }

// for (let i = 0; i < a.length - k; i++) {
//     c.push(a[i]);
// }

// console.log(c);


// function reversearray(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     return reversearray(arr.slice(1)).concat(arr[0])

// }

// const arr=[1,2,3,4,5]
// const res=reversearray(arr)
// console.log(res);


// const s='leveluuu'
// const c=s.split('')

// function a(c){
//     for(let i=0;i<c.length/2;i++){
//         if(c[i]==c[c.length-1-i]){
//             return true
//         }else{
//             return false
//         }
//     }
// }
// const res=a(c)
// console.log(res);


// const s='level'
// const c=s.split('')

// function palindrome(c){
//     if(c.length<=1){
//         return true
//     }
//     if(c[0]==c[c.length-1]){
//         return palindrome(c.slice(1,-1))
//     }else{
//         return false
//     }

// }
// console.log(palindrome(c));


// const num=[1,2,3,4,5]
// var fact=1
//     for (i = 1; i <= num.length; i++) {
//         fact =fact*i;
//     }
//     console.log(fact)


// const num=[1,2,3,4,5]
// function factorial (num){
//    if(num==1||num ==0){
//        return 1
//    }

//    return  num * factorial(num-1)

// }
// const factorialarray=num.map(n=>factorial(n))
// console.log( factorialarray);





// let arr = [1, 2, 3, 2, 3, 4, 5];

// const count = {};

// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     if (count[ele]) {
//         count[ele] += 1;
//     } else {
//         count[ele] = 1;
//     }
// }
// console.log(count);

// find square of an array elements
// const a=[1,2,3,4,5]; 
// const  square=function(a){
//     const output=[];
//     for(var i=0;i<a.length;i++){
//         output.push(a[i]*2);
//     }
//     return output;
// }
// console.log(square(a));


// const a=[1,2,3,4,5]
// const b=[6,7,8,9,10]
// var c=[]
// for(let i=0;i<a.length;i++){
//     c.push(a[i])
// }

// for(let j=0;j<b.length;j++){
// c.push(b[j])
// }
// console.log(c);

// const str="pwwkew"
// let set=new Set()
// var length=0
// var left=0

// for(let i=0;i<str.length;i++){
//     while(set.has(str[i])){
//         set.delete(str[left])
//         left ++
//     }

//     set.add(str[i])
//     length=Math.max(length,i-left +1)

// }
// console.log(set);
// console.log(length);


// var a = []
// for (let i = 1; i < 6; i++) {
//     a[a.length] = i
// }
// console.log(a);

// create a 2 dimensional array with m row and n colums

// words1 = ["leetcode","is","leetcode","is","amazing","and","fantastic"]
// words2 = ["leetcode","is","leetcode","is","fantastic"]

// var count=0
// for (let i = 0; i < words1.length; i++) {
//     let flag1 = 0
//     let flag2 = 0
//     for (let j = 0; j < words1.length; j++) {
//         if (words1[i] == words1[j]) {
//             flag1++
//         }
//     }

//     for (let k = 0; k < words2.length; k++) {
//         if (words1[i] == words2[k]) {
//             flag2++
//         }
//     }
//     if (flag1 == flag2) {
//     count++;
//     }

// }
// console.log(count,"count");



// words1 = ["pay", "attention", "practice", "attend"]
// words2 = ["attention", "practice", "pay", "pay"]

// var count = 0
// for (let i = 0; i < words1.length; i++) {
//     let flag1 = 0
//     let flag2= 0
//         for (let j = 0; j < words1.length; j++) {
//         if (words1[i] == words1[j]) {
//             flag1++
//         }
//     }

//     for (let k = 0; k < words2.length; k++) {
//         if (words1[i] == words2[k]) {
//             flag2++
//         }
//     }
//         if (flag1 == flag2) {
//             count++;     
//                  }
// }
// console.log(count, "count");

// var nums = [-1,-2,3,4]
// var k = 2
// const a=nums.sort((a,b)=>b-a)
// var ans=[]
// for(let i=0;i<k;i++){
//     if(a[i]>0){
//         ans[ans.length]=a[i]
//     }
// }

// console.log(ans);
// for(let i=5;i>0;i--){
//     let line = "";
//     for(let j=i;j<=i;j--){
//         line+=j

//     }
//     console.log(line);
    
// }

const c=[]
console.log(typeof c,"//");

