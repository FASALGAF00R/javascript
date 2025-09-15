const a=[1,2,6,4,5]
a.sort()
console.log(a)

// let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// let new_cars = cars.slice(2);
// console.log("cars :", cars);
// console.log("new_cars :", new_cars);

let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log("cars :", cars);

var b=["f","r","t","y"]
b.splice(1,2)
console.log(b);

const  ar=[1,2,3,4,5]
const ans=ar.map(vl=>(vl*vl))
console.log(ans);
const res=ar.filter((el)=>el%2==0)
console.log(res);
const g=ar.reduce((acc,db)=>acc+db)
console.log(g);


// const n = [1, 2, 3, 4, 5];
// const fEven = n.find((num) => num % 2 === 0);
// console.log(fEven);

const n = [1, 2, 3, 4, 5];
const hasNeg = n.every((num) => num > 0);
console.log(hasNeg);