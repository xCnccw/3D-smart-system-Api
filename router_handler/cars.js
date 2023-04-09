// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
const config = require('../config')
/**
* 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
*/
//导入数据库操作模块
const db = require('../db/ index')


//获取车辆信息
exports.carslist = (req, res) => {
    // const userinfo = req.body
    const sql = `select * from cars`
    db.query(sql, function (err, results) {
        res.send(results)
    })
}

//删除车辆
exports.deletecars = (req, res) => {
    const carinfo = req.body
    const sql = `delete from cars where id=?`
    db.query(sql, carinfo.id, function (err, results) {
        // res.cc(userinfo.id)
        res.cc(carinfo.id)
    })
}

//添加车辆
exports.addcars = (req, res) => {
    const carinfo = req.body
    const sql = `insert into cars set ?`
    db.query(sql, { name: carinfo.name, license: carinfo.license, objectlistId: carinfo.objectlistId, createdAt: new Date(), updatedAt: new Date() }, function (err, results) {
        // res.cc(userinfo.id)
        res.cc(carinfo)
    })
}

//修改车辆信息
exports.updatecars = (req, res) => {
    const carinfo = req.body
    const sql = `update cars set ? where id = ?`
    db.query(sql, [{ id: carinfo.id, name: carinfo.name, license: carinfo.license, objectlistId: carinfo.objectlistId, createdAt: new Date(), updatedAt: new Date() }, carinfo.id], function (err, results) {
        // res.cc(userinfo.id)
        res.cc(carinfo)
    })
}