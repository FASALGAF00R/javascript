function isprime(number){
    if(number<=1){
        return false;
    }
    for(let i=0;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}
console.log(isprime(7));
console.log(isprime(12))