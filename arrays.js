const a = [1, 1, 2, 2, 4]
let count
let f = []
for (let i = 0; i < a.length; i++) {
    count = 1
    if (a[i] != -1) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                count++
                a[j] = -1
            }
        }
        f.push({vl:a[i],fre:count})
    
}
}
console.log(f);


