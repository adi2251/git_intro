const express = require('express');
const app = express();

app.get('/', (req, res) => {

});
function m1(req, res, next) {
    console.log('m1');
    next();
}
function m2(req, res, next) {
    console.log('m2');
    next();
}
function m3(req, res, next) {
    console.log('m3');
    next();
}

app.get('/hello', m1, m2, (req, res) => {
    res.send("HI");
});

app.listen(4444, () => {
    console.log('http://localhost:4444');
});