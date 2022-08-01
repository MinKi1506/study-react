let express = require('express');
let app = express();
require('dotenv').config();
let moment = require('moment');
let upbit = require("node-upbit");

const cors = require('cors')
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


//세션설정
let session = require('express-session');
app.use(
    session({
        secret: process.env.session,
        resave: false,
        saveUninitialized: true,
        maxAge: 3600000
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//mysql 설정
let mysql = require('mysql2');
let connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.post,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})


let port = 3010;
app.listen(port, function(){
    console.log('express 서버를 시작합니다');
})







    // connection.query(
    //     `update quoation set trade_price = ?, signed_change_price = ? where market = 'btc'`, [quoations[0], quoations[1]],
    //     function (err) {
    //         if (err) {
    //             console.log('btc 시세 변경 에러: ' + err)
    //         } else {
    //             console.log('btc 시세변경 성공')
    //         }
    //     }
    // );
    // connection.query(
    //     `update quoation set trade_price = ?, signed_change_price = ? where market = 'eth'`, [quoations[2], quoations[3]],
    //     function (err) {
    //         if (err) {
    //             console.log('eth 시세 변경 에러: ' + err)
    //         } else {
    //             console.log('eth 시세변경 성공')
    //         }
    //     }
    // );
    // connection.query(
    //     `update quoation set trade_price = ?, signed_change_price = ? where market = 'xrp'`, [quoations[4], quoations[5]],
    //     function (err) {
    //         if (err) {
    //             console.log('xrp 시세 변경 에러: ' + err)
    //         } else {
    //             console.log('xrp 시세변경 성공')
    //         }
    //     }
    // );
    // connection.query(
    //     `update quoation set trade_price = ?, signed_change_price = ? where market = 'neo'`, [quoations[6], quoations[7]],
    //     function (err) {
    //         if (err) {
    //             console.log('neo 시세 변경 에러: ' + err)
    //         } else {
    //             console.log('neo 시세변경 성공')
    //         }
    //     }
    // );


// setInterval(getQuoation, 10000);
