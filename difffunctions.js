

(function(){
    let t=9
    console.log(t);
})()

function a(){
    let i=8
    console.log(i);
}
a()


const s=[1,2,3,4,5,9,12,15]
for(let i=0;i<s.length;i++){
    if(s[i]%3==0){
        for(let k=i;k<s.length;k++){
            s[k]=s[k+1]
            k--;
        }
    }
}
console.log(s);





