var express = require("express")//这里主要是引用所必须要的模块，当然，这些模块是需要使用"npm install 模块名"安装的
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose');
var db = require('./mongoTest')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')//定义了一些路径和所用到的引擎
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({extended: true}))
//app.use(require('body-parser').urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname,'bower_components')))
app.use(express.static(__dirname + '/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.listen(port);
app.use(express.static(path.join(__dirname, '../jade/bower_components')))
app.use(express.static(path.join(__dirname, '../jade/routes')))
console.log('oit started on port ' + port);

//index page    这里以及下面皆是路由以及赋值，这里的字段如title, poster等都会在相应的jade如index.jade中用到，实际上是将这里的值传入相应的jade以渲染页面

app.get('/system', function(req, res) {
    res.render('system', {
        title: 'oit main'
    })
})

app.get('/system', function(req, res) {
    res.render('system', {
        title: 'oit main'
    })
})

app.get('/main/spanish', function(req, res) {
    // spanish.fetch(function(err, spanish) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log(spanish);
    db.open(function() {
            db.collection('questiny', function(err, collection) {
                collection.find().toArray(function(err, docs) {
                    res.render('main/spanish', {
                        title: 'oit 西语',
                        spanishList: docs
                    })
                })
            })
        })
        // })
})

app.get('/main/life', function(req, res) {
    res.render('main/life', {
        title: 'oit 文化/生活'
    })
})
app.get('/main/travel', function(req, res) {
    res.render('main/travel', {
        title: 'oit 旅行'
    })
})
app.get('/setting/userSetting', function(req, res) {
    res.render('setting/userSetting', {
        title: 'oit userSetting'
    })
})

app.get('/message/newMsg', function(req, res) {
    res.render('message/newMsg', {
        title: 'oit 新消息'
    })
})


app.post('/newMsg/save', function(req, res) {
    console.log(req.body);
    db.open(function() {
        db.collection('spanish', function(err, collection) {
            collection.insert({
                tab: req.body.tab,
                title: req.body.title,
                htmlBody: req.body.htmlBody
            })
        })
    })
    res.json({name:'success'})
})
