console.log('sc');

setTimeout(function() {
    console.log('setTime');
}, 0);

Promise.resolve().then(function() {
    console.log('pro1')
}).then(function() {
    console.log('pro2')
})

//*********************************************************//
console.log('第一次循环主执行栈开始')

setTimeout(function() {
    console.log('第二次循环开始，宏任务队列的第一个宏任务执行中')
    new Promise(function(resolve) {
        console.log('宏任务队列的第一个宏任务的微任务继续执行')
        resolve()
    }).then(function() {
        console.log('第二次循环的微任务队列的微任务执行')
    })
}, 0)

new Promise(function(resolve) {
    console.log('第一次循环主执行栈进行中...')
    resolve()
}).then(function() {
    console.log('第一次循环微任务，第一次循环结束')
    setTimeout(function() {
        console.log('第二次循环的宏任务队列的第二个宏任务执行')
    })
})

console.log('第一次循环主执行栈完成')