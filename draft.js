const http = require('http')
const https = require('https')
const path = require('path')
const os = require('os')


// fs.writeFileSync('hello.txt', 'Hello!')


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1000);
    })
    return promise
}

setTimeout(() => {
    console.log("OVER")
    fetchData().then(data => {
        console.log(data)
        return fetchData()
    }).then(data2 => {
        console.log(data2)
    })
}, 1000);

for (let i = 0; i < 10; i++) {
    console.log('START')
}