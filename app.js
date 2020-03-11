// 引入express框架
const express = require('express');
//路径处理模块
const path = require('path');
//const bodyParser = require('body-parser')
const formidable = require('formidable');
const fs = require('fs')
    // 引入request请求其他服务器
const request = require('request')

// 创建网站服务器
const app = express();

//静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));



// 监听端口
app.listen(3000);

console.log('网站服务器启动成功')