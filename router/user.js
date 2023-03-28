const express = require('express')
const router = express.Router()
// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')
// 注册新用户
router.post('/reguser', userHandler.regUser)
// 登录
router.post('/login', userHandler.login)
//获取用户列表
router.post('/admin/list', userHandler.userlist)
//删除用户
router.post('/admin/delete', userHandler.deleteuser)
//增加用户
router.post('/admin/add', userHandler.adduser)
//修改用户信息
router.post('/admin/update', userHandler.updateuser)
//修改密码
router.post('/admin/pwd', userHandler.updatepwd)


module.exports = router
