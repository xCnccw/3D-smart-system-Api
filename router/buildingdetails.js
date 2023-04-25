const express = require('express')
const router = express.Router()
// 导入用户路由处理函数模块
const buildingdetailsHandler = require('../router_handler/buildingdetails')
//获取车辆列表
router.post('/buildingdetails/list', buildingdetailsHandler.buildingdetailslist)
// //删除车辆
// router.post('/buildingdetails/delete', buildingdetailsHandler.deletebuildingdetails)
// //增加车辆
// router.post('/buildingdetails/add', buildingdetailsHandler.addbuildingdetails)
// //修改车辆信息
// router.post('/buildingdetails/update', buildingdetailsHandler.updatebuildingdetails)



module.exports = router
