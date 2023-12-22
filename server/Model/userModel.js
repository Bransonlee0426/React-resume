const { db } = require('../Until/MySQL');

// 通过用户名查询对应数据
exports.getUser = (res) => {
  let sql = 'SELECT * FROM user;';
  let data = db(sql, res);
  return data;
};

// 通过用户名查询skills
exports.getSkills = (res) => {
  let sql = 'SELECT * FROM skills;';
  let data = db(sql, res);
  return data;
};

// 通过用户名查询experience
exports.getExperience = (res) => {
  let sql = 'SELECT * FROM experience;';
  let data = db(sql, res);
  return data;
};