const { db } = require('../Until/MySQL');

// 通过用户名查询对应数据
exports.getCard = (res) => {
  let sql = 'SELECT * FROM cards';
  let data = db(sql, res);
  return data;
};
