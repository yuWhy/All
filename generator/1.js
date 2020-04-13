function* generator() {
    yield 'status one'
    return 'hellp'
}

let ii = generator();
let a = ii.next()
let b= ii.next()
console.log(ii);
console.log(a)
console.log(b)
console.log(ii.next())
