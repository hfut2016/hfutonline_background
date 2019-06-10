const http = require('http');
const {query} = require('./mysql')
const {statistics} = require('./statistics')
const {feedback} = require('./feedback')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  req.statusCode = 200;
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  // res.end('Hello World\n');
  if (req.url==='/show'){
    let sql = `SELECT state,name,clazz,major,department FROM student `

    query(sql,function (result){
      let num = statistics(result)
      res.end(JSON.stringify(num));
      console.log(req.url);
    });
  } else if(req.url==='/feedback'){
    let sql = `SELECT * FROM feedback `;

    query(sql, function(result){
      let data = feedback(result)
      res.end(JSON.stringify(data))
    });
  } else {
    res.end(JSON.stringify({'message':'NOT FOUND!!!','success':false}))
  }
});

server.listen(port, hostname, ()=>{
  console.log(`server running at http://${hostname}:${port}`)
});