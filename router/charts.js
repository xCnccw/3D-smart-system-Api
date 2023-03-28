const express = require('express')
const router = express.Router()
// 导入用户路由处理函数模块
const chartsHandler = require('../router_handler/charts')
//获取车辆列表
router.post('/charts/list', chartsHandler.chartslist)
//修改车辆信息
router.post('/charts/update', chartsHandler.updatecharts)



module.exports = router
