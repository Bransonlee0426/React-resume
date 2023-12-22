const mysql = require('mysql2');
// 以下信息是你的数据库信息
const option = {
  host: 'localhost',
  user: 'root',
  password: '19890426',
  database: 'sys',
  connectTimeout: 5000, // 连接超时
  multipleStatements: true, // 支持执行多条 sql 语句
};

let pool;
rePool();

function rePool() {
  // 断线重连机制，每隔3s重连一次
  pool = mysql.createPool({
    // 创建连接池
    ...option,
    waitForConnections: true, // 当无连接池可用时，等待（true）还是报错（false）
    connectionLimit: 100, // 连接数限制
    queueLimit: 0, // 最大连接等待数（0为不限制）
  });
  pool.on('error', (err) => err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(rePool, 3000));
}

let db = function (sql, res, params = []) {
  return new Promise((resolve, reject) => {
    // 一、创建一个连接池,也就是上面的pool
    // rePool();
    // 二、连接
    pool.getConnection((err, connection) => {
      // 三、使用sql语句操作
      connection.query(sql, params, (err, results) => {
        if (err) {
          // res是调用接口时，如果执行mysql执行出错，直接返回报错信息
          let $errData = {
            code: 500,
            msg: `服务器内部错误${err.message}`,
            data: null,
          };
          return res.json(new Result($errData));
        } else {
          // return res.json(new Result({ data: results }))
          resolve(results);
        }
        // 释放连接池
        connection.release();
      });
    });
  });
};

function Result({ code = 200, msg = '成功', data = null }) {
  this.code = code;
  this.msg = msg;
  this.data = data;
}

module.exports = { db, Result };
