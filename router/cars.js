const express = require('express')
const router = express.Router()
// 导入用户路由处理函数模块
const carsHandler = require('../router_handler/cars')
//获取车辆列表
router.post('/cars/list', carsHandler.carslist)
//删除车辆
router.post('/cars/delete', carsHandler.deletecars)
//增加车辆
router.post('/cars/add', carsHandler.addcars)
//修改车辆信息
router.post('/cars/update', carsHandler.updatecars)



module.exports = router
