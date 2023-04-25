// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

const bodyParser = require('body-parser')
const json = express.json({ type: '*/json' });

app.use(json);
app.use(bodyParser.urlencoded({ extended: false }));

// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())

//配置解析表单数据的中间件 ，注意：这个中间件，只能解析 application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false }))


//路由前，封装res.cc函数
// 响应数据的中间件
app.use(function (req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
        res.send({
            // 状态
            status,
            // 状态描述，判断 err 是 错误对象 还是 字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))



// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})
// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

const carsRouter = require('./router/cars')
app.use('/api', carsRouter)

const buildingsRouter = require('./router/buildings')
app.use('/api', buildingsRouter)

const chartsRouter = require('./router/charts')
app.use('/api', chartsRouter)




// 错误中间件
app.use(function (err, req, res, next) {
    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
    res.cc(err)
})

