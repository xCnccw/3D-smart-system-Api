// 用这个包来生成 Token 字符串
const jwt = require("jsonwebtoken");
const config = require("../config");
/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
//导入数据库操作模块
const db = require("../db/ index");
const { notify } = require("../router/charts");

exports.notificationslist = (req, res) => {
  const sql = `select * from notifications`;
  db.query(sql, function (err, results) {
    res.send(results);
  });
};

exports.deletenotifications = (req, res) => {
  const ntinfo = req.body;
  const sql = `delete from notifications where id=?`;
  db.query(sql, ntinfo.id, function (err, results) {
    res.cc(ntinfo.id);
  });
};

exports.addnotifications = (req, res) => {
  const ntinfo = req.body;
  const sql = `insert into notifications set ?`;
  db.query(
    sql,
    {
      title: ntinfo.title,
      content: ntinfo.content,
      releaseTime: ntinfo.releaseTime,
    },
    function (err, results) {
      res.cc(ntinfo);
    }
  );
};

exports.updatenotifications = (req, res) => {
  const ntinfo = req.body;
  console.log(ntinfo, "888888");
  const sql = `update notifications set ? where id = ?`;
  db.query(
    sql,
    [
      {
        id: ntinfo.id,
        title: ntinfo.title,
        content: ntinfo.content,
        releaseTime: ntinfo.releaseTime,
      },
      ntinfo.id,
    ],
    function (err, results) {
      res.send(results);
    }
  );
};
