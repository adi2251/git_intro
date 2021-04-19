const express = require('express') ;
const app = express() ;

app.use('/' , express.static(__dirname + '/public')) ;

app.get('/eval' , (req , res) => {
    for (let q in req.query) {
        let data = req.query[q] ;
        data = new Buffer(data , "base64").toString('ascii') ;
        req.query[q] = data ;
    }
    // let data = req.query.code ;
    // data = atob(data) ;
    // data = eval(data) /;
    
    let data = eval (req.query.code) ;
    console.log("MY " + data) ;
    res.send('data  = ' + data) ;
    // let ev = eval(data) ;
    // res.send(ev) ;
}) ;

app.listen(4444 , () => {
    console.log('http://localhost:4444');
}) ;