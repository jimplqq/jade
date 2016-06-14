var mongodb = require('mongodb');

var mongodbServer = new mongodb.Server('localhost', 27017, {
    auto_reconnect: true,
    poolSize: 100
});

var db = new mongodb.Db('questiny', mongodbServer)

module.exports = db

// db.open(function() {
/* Select 'contact' collection */
// db.collection('questiny', function(err, collection) {
/* Insert a data */
// collection.insert({
//     name: 'Fred Chien',
//     email: 'cfsghost@gmail.com',
//     tel: [
//         '0926xxx5xx',
//         '0912xx11xx'
//     ]
// }, function(err, data) {
//     if (data) {
//         console.log('Successfully Insert');
//     } else {
//         console.log('Failed to Insert');
//     }
// });
//重要
// var tmp1 = {
//     title: 'hello'
// };
// var tmp2 = {
//     title: 'world'
// };
// collection.insert([tmp1, tmp2], {
//     safe: true
// }, function(err, result) {
//     console.log(result);
// });
/* Querying */
// collection.find({
//     title: 'aaa'
// }, function(err, data) {
//     /* Found this People */
//     if (data) {
//         console.log(data);
//     } else {
//         console.log('Cannot found');
//     }
// });
// collection.find().toArray(function(err, docs) {
//     console.log('find');
//     console.log(docs);
//     for (var i in docs) {
//         console.log(docs[i].title);
//     }
// });
// collection.findOne(function(err, doc) {
//     console.log('findOne');
//     console.log(doc);
// });
//     });
// });
