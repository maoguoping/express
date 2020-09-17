const express = require('./index')
const app = express()
function timeout() {
  return new Promise((resolve) => {
    console.log('timeout')
    setTimeout(() => {
      console.log('延迟2')
      resolve('Hello World')
    }, 0)
  })
}
app.use('/', async (req, res, next) => {
  console.log('中间件1.1')
  let obj = await next()
  console.log('中间件1.2')
})
app.get('/', async (req, res, next) => {
  let data = await timeout()
  res.send(data);
  console.log('发送')
  
})
app.listen(3000)