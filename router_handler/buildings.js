// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
const config = require('../config')
/**
* 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
*/
//导入数据库操作模块
const db = require('../db/ index')


exports.buildingslist = (req, res) => {
    // const userinfo = req.body
    const sql = `select * from buildings`
    db.query(sql, function (err, results) {
        res.send(results)
    })
}

exports.deletebuildings = (req, res) => {
    const buildinginfo = req.body
    const sql = `delete from buildings where id=?`
    db.query(sql, buildinginfo.id, function (err, results) {
        res.cc(buildinginfo.id)
    })
}

exports.addbuildings = (req, res) => {
    const buildinginfo = req.body
    const sql = `insert into buildings set ?`
    db.query(sql, { name: buildinginfo.name, livecount: buildinginfo.livecount, floorcount: buildinginfo.floorcount, checkinrate: buildinginfo.checkinrate, objectlistId: buildinginfo.objectlistId, createdAt: new Date(), updatedAt: new Date() }, function (err, results) {
        res.cc(buildinginfo)
    })
}

exports.updatebuildings = (req, res) => {
    const buildinginfo = req.body
    const sql = `update buildings set ? where id = ?`
    db.query(sql, [{ id: buildinginfo.id, name: buildinginfo.name, livecount: buildinginfo.livecount, floorcount: buildinginfo.floorcount, checkinrate: buildinginfo.checkinrate, objectlistId: buildinginfo.objectlistId, createdAt: new Date(), updatedAt: new Date() }, buildinginfo.id], function (err, results) {
        res.cc(buildinginfo)
    })
}
