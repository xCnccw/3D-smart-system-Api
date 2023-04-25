// 用这个包来生成 Token 字符串
const jwt = require("jsonwebtoken");
const config = require("../config");
/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
//导入数据库操作模块
const db = require("../db/ index");

//雷达图
exports.raychartslist = (req, res) => {
  // const userinfo = req.body
  const sql = `select * from raycharts`;
  db.query(sql, function (err, results) {
    res.send(results);
  });
};

exports.updateraycharts = (req, res) => {
  const chartinfo = req.body;
  const sql = `update raycharts set ? where id = ?`;
  db.query(
    sql,
    [
      {
        name: chartinfo.name,
        title: chartinfo.title,
        date: chartinfo.date,
        aqi: chartinfo.aqi,
        pm2: chartinfo.pm2,
        pm10: chartinfo.pm10,
        co: chartinfo.co,
        no2: chartinfo.no2,
        so2: chartinfo.so2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      chartinfo.id,
    ],
    function (err, results) {
      // res.cc(userinfo.id)
      res.cc(chartinfo);
    }
  );
};

//柱状图
exports.barchartslist = (req, res) => {
  const sql = `select * from barcharts`;
  db.query(sql, function (err, results) {
    res.send(results);
  });
};

exports.updatebarcharts = (req, res) => {
  const chartinfo = req.body;
  const sql = `update barcharts set ? where id = ?`;
  db.query(
    sql,
    [
      {
        name: chartinfo.name,
        title: chartinfo.title,
        date: chartinfo.date,
        forecastcount: chartinfo.forecastcount,
        realcount: chartinfo.realcount,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      chartinfo.id,
    ],
    function (err, results) {
      // res.cc(userinfo.id)
      res.cc(chartinfo);
    }
  );
};

//饼图
exports.buildingdetailslist = (req, res) => {
  // const userinfo = req.body
  const sql = `select * from buildingdetails`;
  db.query(sql, function (err, results) {
    res.send(results);
  });
};

exports.updatebuilding = (req, res) => {
  const buildingdetails = req.body;
  const sql = `update buildingdetails set ? where id = ?`;
  db.query(
    sql,
    [
      {
        id: buildingdetails.id,
        name: buildingdetails.name,
        height: buildingdetails.height,
        floor: buildingdetails.floor,
        square: buildingdetails.square,
        malecount: buildingdetails.malecount,
        femalecount: buildingdetails.femalecount,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      buildingdetails.id,
    ],
    function (err, results) {
      res.send(buildingdetails);
    }
  );
};
