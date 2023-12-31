const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); //解析参数用的
const mainRouter = require('./Router/index');
const userRouter = require('./Router/userRouter');

const PORT = 8080;
app.use(cors()); // 解决跨域
app.use(bodyParser.json()); // json请求
app.use(bodyParser.urlencoded({ extended: false })); // 表单请求
app.all('*', (req, res, next) => {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type');
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  // 在请求的回调函数汇中遇见next()，就会继续执行后面的代码
  next();
});
app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
