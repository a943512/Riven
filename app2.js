// 引入express框架
const express = require('express');
//路径处理模块
const path = require('path');
//const bodyParser = require('body-parser')
const formidable = require('formidable');

var session = require('express-session');

const fs = require('fs')

// 创建网站服务器
const app = express();

//静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

//拦截所有请求
app.use((req, res, next) => {
    //1. 允许那些客户端访问我
    // 1.1 *代表允许所有的客户端访问我
    res.header('Access-Control-Allow-Origin', '*')
        // 1.2.允许客户端使用那些请求方法访问我
    res.header('Access-Control-Allow-Methods', 'post,get')
    console.log(123);
    next();
})

// 获取用户列表信息
app.get('/users', (req, res) => {
    res.send('当前是获取用户列表信息的路由')
});

// 获取某一个用户具体信息的路由
app.get('/users/:id', (req, res) => {
    // 获取客户端传递过来的用户id
    const id = req.params.id;
    res.send(`当我们在获取id为${id}用户信息`);
})

// 删除某一个用户
app.delete('/users/:id', (req, res) => {
    // 获取客户端传递过来的用户id
    const id = req.params.id
    res.send(`当前我们是在删除id为${id}用户信息`);
})

// 修改某一个用户的信息
app.put('/users/:id', (req, res) => {
    // 获取客户端传过来的用户id
    const id = req.params.id;
    res.send(`当前我们是在修改id为${id}用户信息`);
})


// 监听端口
app.listen(3001);
console.log('网站服务器启动成功')