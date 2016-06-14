var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '330793279',
    database: 'test',
    port: 3306
});
conn.connect();
try {
    conn.query('SELECT * from user', function(err, result) {
        console.log(result[0].name);
    });
} catch (e) {
    throw e
} finally {
    conn.end();
}
