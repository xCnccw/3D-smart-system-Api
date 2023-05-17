const express = require('express')
const router = express.Router()
// 导入用户路由处理函数模块
const notificationsHandler = require('../router_handler/notifications')
//获取车辆列表
router.post('/notifications/list', notificationsHandler.notificationslist)
//删除车辆
router.post('/notifications/delete', notificationsHandler.deletenotifications)
//增加车辆
router.post('/notifications/add', notificationsHandler.addnotifications)
//修改车辆信息
router.post('/notifications/update', notificationsHandler.updatenotifications)

module.exports = router
