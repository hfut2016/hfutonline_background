var mysql      = require('mysql');

var DB_CONFIG = {
  host     : '192.168.1.165',
  user     : 'online',
  password : 'online@hfut',
  database : 'hfutonline-prod'
}

var query = function(sql,fn) {
  //创建一个connection
  var connection = mysql.createConnection(DB_CONFIG);
  //创建一个connection
  connection.connect(function(err) {
    if (err) {
      console.log('[query] - :' + err);
      return;
    }
    console.log('[connection ing]  succeed!');
  });

  // 查询文章表
  // var articleSql = `SHOW INDEX FROM student;`;
  //查
  connection.query(sql, function(err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    fn(result);
    
  });

  //关闭connection
  connection.end(function(err) {
    if (err) {
      return;
    }
    console.log('[connection end] succeed!');
  });
}


module.exports = {'query':query}