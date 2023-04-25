const express = require('express')
const router = express.Router()
// 导入用户路由处理函数模块
const buildingsHandler = require('../router_handler/buildings')
//获取车辆列表
router.post('/buildings/list', buildingsHandler.buildingslist)
//删除车辆
router.post('/buildings/delete', buildingsHandler.deletebuildings)
//增加车辆
router.post('/buildings/add', buildingsHandler.addbuildings)
//修改车辆信息
router.post('/buildings/update', buildingsHandler.updatebuildings)



module.exports = router
