// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
const config = require('../config')
/**
* 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
*/
//导入数据库操作模块
const db = require('../db/ index')

//获取图表信息
exports.chartslist = (req, res) => {
    // const userinfo = req.body
    const sql = `select * from raycharts`
    db.query(sql, function (err, results) {
        res.send(results)
    })
}

// //删除车辆
// exports.deletecars = (req, res) => {
//     const carinfo = req.body
//     const sql = `delete from cars where id=?`
//     db.query(sql, carinfo.id, function (err, results) {
//         // res.cc(userinfo.id)
//         res.cc(carinfo.id)
//     })
// }

// //添加车辆
// exports.addcars = (req, res) => {
//     const carinfo = req.body
//     const sql = `insert into cars set ?`
//     db.query(sql, { id: carinfo.id, name: carinfo.name, license: carinfo.license, objectlistId: carinfo.objectlistId, createdAt: new Date(), updatedAt: new Date() }, function (err, results) {
//         // res.cc(userinfo.id)
//         res.cc(carinfo)
//     })
// }

//修改图表信息
exports.updatecharts = (req, res) => {
    const chartinfo = req.body
    const sql = `update raycharts set ? where id = ?`
    db.query(sql, [{ name: chartinfo.name, title: chartinfo.title, date: chartinfo.date, aqi: chartinfo.aqi, pm2: chartinfo.pm2, pm10: chartinfo.pm10, co: chartinfo.co, no2: chartinfo.no2, so2: chartinfo.so2, createdAt: new Date(), updatedAt: new Date() }, chartinfo.id], function (err, results) {
        // res.cc(userinfo.id)
        res.cc(chartinfo)
    })
}

// { id: chartinfo.id, name: chartinfo.name, title: chartinfo.title, data: chartinfo.data, aqi: chartinfo.aqi, pm2: chartinfo.pm2, pm10: chartinfo.pm10, co: chartinfo.co, no2: chartinfo.no2, so2: chartinfo.so2, createdAt: new Date(), updatedAt: new Date() }