var express = require('express')
var path = require('path')
// var mongoose = require('mongoose');
var port = 3001
var http = require('http')
var app = express()
var bodyParser = require('body-parser')
var db = require('./mongoTest')



app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(__dirname + '/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.listen(port);
app.use(express.static(path.join(__dirname, '../jade/bower_components')))
app.use(express.static(path.join(__dirname, '../jade/routes')))

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.raw({
    limit: '5mb'
}));
app.use(bodyParser.text({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}));
app.locals.moment = require('moment')

console.log('oit started on port ' + port);

//404
// app.use(function(req, res, next) {
//   res.status(404).send('Sorry cant find that!');
// });
//所有请求，这里可以做登录验证
// app.all('*',function(req,res){
//   res.render('404')
// })

//500
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.get('/bost', function (req, res) {
    res.render('bost', {
        title: 'oit 新模板'
    })
})

app.post('/test', function (req, res) {
    console.log(req.body);
})


app.post('/newMsg/save', function (req, res) {
    console.log(req.body.htmlBody.length);
    db.open(function () {
        db.collection(req.body.tab, function (err, collection) {
            collection.findOne({
                title: req.body.title
            }, function (err, doc) {
                if (doc) {
                    //名字相同无法保存，但是现在没有返回值做提醒
                    // console.log(doc);
                } else {
                    collection.insert({
                        tab: req.body.tab,
                        title: req.body.title,
                        htmlBody: req.body.htmlBody,
                        isPush: 0,
                        time: Date.now()
                    })
                }
            })
        })
    })
    res.json({
        name: 'success'
    })
})

//index page
app.get('/', function (req, res) {
    res.render('divmove', {
        title: 'jade'
    })
})
app.get('/system', function (req, res) {
    res.render('system', {
        title: 'oit main'
    })
})

app.get('/main/spanish', function (req, res) {

    db.open(function () {
        db.collection('spanish', function (err, collection) {
            collection.stats(function (err, docs) {
                console.log(docs.count);
                var count = docs.count
                var pages
                count % 10 == 0 ? pages = parseInt(count / 10) : pages = Math.ceil(count / 10)
                var results = {
                    pages: pages,
                    pageNum: '1'
                }


                collection.find().sort({
                    'time': -1
                }).limit(10).toArray(function (err, docs) {
                    console.log(results);
                    // console.log(docs);
                    res.render('main/spanish', {
                        title: 'oit 西语',
                        lists: docs,
                        num: results
                    })
                })
            })
        })
    })
})

app.get('/main/life', function (req, res) {

    db.open(function () {
        db.collection('life', function (err, collection) {
            collection.stats(function (err, docs) {
                console.log(docs.count);
                var count = docs.count
                var pages
                count % 10 == 0 ? pages = parseInt(count / 10) : pages = Math.ceil(count / 10)
                var results = {
                    pages: pages,
                    pageNum: '1'
                }


                collection.find().sort({
                    'time': -1
                }).limit(10).toArray(function (err, docs) {
                    console.log(results);
                    // console.log(docs);
                    res.render('main/life', {
                        title: 'oit life',
                        lists: docs,
                        num: results
                    })
                })
            })
        })
    })
})

app.get('/main/travel', function (req, res) {
    db.collection('travel', function (err, collection) {
        collection.stats(function (err, docs) {
            console.log(docs.count);
            var count = docs.count
            var pages
            count % 10 == 0 ? pages = parseInt(count / 10) : pages = Math.ceil(count / 10)
            var results = {
                pages: pages,
                pageNum: '1'
            }


            collection.find().sort({
                'time': -1
            }).limit(10).toArray(function (err, docs) {
                console.log(results);
                // console.log(docs);
                res.render('main/travel', {
                    title: 'oit travel',
                    lists: docs,
                    num: results
                })
            })
        })
    })
})
app.get('/setting/userSetting', function (req, res) {
    res.render('setting/userSetting', {
        title: 'oit userSetting'
    })
})

app.get('/message/newMsg', function (req, res) {
    res.render('message/newMsg', {
        title: 'oit 新消息'
    })
})

app.delete('/removeMsg/:id/:tab/:title', function (req, res) {
    console.log(req.params);
    db.open(function () {
        db.collection(req.params.tab, function (err, collection) {
            if (err) {
                console.log(err);
            }
            collection.remove({
                title: req.params.title
            })
        })
    })
    res.json({
        name: 'success'
    })
})


app.get('/push/:tab/:title', function (req, res) {
    console.log(req.params);
    db.open(function () {
        db.collection(req.params.tab, function (err, collection) {
            if (err) {
                console.log(err);
            }
            collection.update({
                title: req.params.title
            }, {
                $set: {
                    isPush: new Date()
                }
            })
        })
    })
    res.json({
        name: 'success'
    })
})
