const myArray=[]
var limit=parseInt(prompt("Enter the Limit: "));

for(i=0;i<limit;i++){
   myArray[i]=parseInt(prompt("Enter array elements"));
}
function sumCheck(array){
    var len=array.length
    var sum=0
    for(i=0;i<len;i++){
        sum=sum+myArray[i]
    }
    var x=(sum%2==0)?true:false;
    return {x,sum}
}
function myFilter(array, callback) {
    var sum=callback(array).sum
   return sum;
}

console.log("Sum = "+myFilter(myArray,sumCheck));
