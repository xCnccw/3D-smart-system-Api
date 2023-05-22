// 用这个包来生成 Token 字符串
const jwt = require("jsonwebtoken");
const config = require("../config");
/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
//导入数据库操作模块
const db = require("../db/ index");

//保存登录用户的id
var id = 0;

// 注册用户的处理函数
exports.regUser = (req, res) => {
  const userinfo = req.body;
  console.log(userinfo);

  const sql = `select * from users where username=?`;
  db.query(sql, userinfo.userName, function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err);
    }
    // 用户名被占用
    if (results.length > 0) {
      return res.cc("用户名被占用，请更换其他用户名！");
    }
    // TODO: 用户名可用，继续
    const sql = "insert into users set ?";
    //插入新用户
    db.query(
      sql,
      {
        username: userinfo.userName,
        password: userinfo.passWord,
        type: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      function (err, results) {
        // 执行 SQL 语句失败
        // if (err) return res.send({ status: 1, message: err.message })
        if (err) return res.cc(err);
        // SQL 语句执行成功，但影响行数不为 1
        if (results.affectedRows !== 1) {
          return res.cc("注册用户失败，请稍后再试！");
        }
        // 注册成功
        // console.log(result);
        // res.send({ status: 0, message: '注册成功！！' })
        res.cc("注册成功！", 0);
      }
    );
  });
  // res.send('regUser OK')
};

// 登录的处理函数
exports.login = (req, res) => {
  const userinfo = req.body;
  const sql = `select * from users where username=?`;
  db.query(sql, userinfo.username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) return res.cc(err);
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if (results.length !== 1) return res.cc("登录失败！");
    console.log(userinfo.password, results[0].password);
    if (userinfo.password !== results[0].password) {
      return res.cc("密码错误");
    }
    // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
    const user = { ...results[0], password: "" };
    //存取id
    id = user.id;
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn,
    });
    console.log(tokenStr);
    res.send({
      status: 0,
      message: "登录成功",
      token: tokenStr,
      userInfo: user,
    });
  });
};

//获取用户信息
exports.userlist = (req, res) => {
  const sql = `select * from users`;
  db.query(sql, function (err, results) {
    res.send(results);
  });
};

//删除用户
exports.deleteuser = (req, res) => {
  const userinfo = req.body;
  const sql = `delete from users where id=?`;
  db.query(sql, userinfo.id, function (err, results) {
    // res.cc(userinfo.id)
    res.cc(userinfo.id);
  });
};

//添加用户
exports.adduser = (req, res) => {
  const userinfo = req.body;
  const sql = `insert into users set ?`;
  db.query(
    sql,
    {
      username: userinfo.username,
      password: userinfo.password,
      type: userinfo.type,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    function (err, results) {
      res.cc(userinfo);
    }
  );
};

//修改用户信息
exports.updateuser = (req, res) => {
  const userinfo = req.body;
  const sql = `update users set ? where id = ?`;
  db.query(
    sql,
    [
      {
        username: userinfo.username,
        password: userinfo.password,
        type: userinfo.type,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      userinfo.id,
    ],
    function (err, results) {
      res.cc(userinfo);
    }
  );
};

//修改个人密码
exports.updatepwd = (req, res) => {
  const info = req.body;
  const sql = `update users set ? where id = ? and password = ?`;
  db.query(
    sql,
    [{ password: info.newpwd }, id, info.oldpwd],
    function (err, results) {
      if (results.affectedRows == 0) {
        res.cc(false);
      } else {
        res.cc(true);
      }
    }
  );
};
