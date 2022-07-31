let express = require('express');
let app = express();
require('dotenv').config();
let moment = require('moment');
let upbit = require("node-upbit");


//세션설정
let session = require('express-session');
app.use(
    session({
        secret : process.env.session,
        resave : false,
        saveUninitialized : true,
        maxAge : 3600000
    })
)

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//mysql 설정
let mysql = require('mysql2');
let connection = mysql.createConnection({
    host : process.env.host,
    port : process.env.post,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
})

//up-bit 코인 시세 정보 불러오기
let quoation = upbit.QuoationService;
const service = new quoation();
let quoations = new Array;

async function getQuoation(){
    let btc = await service.getTicker(["KRW-BTC"]);
    let eth = await service.getTicker(["KRW-ETH"]);
    let xrp = await service.getTicker(["KRW-XRP"]);
    let neo = await service.getTicker(["KRW-neo"]);

    quoations[0] = btc[0]['trade_price'];
    quoations[1] = btc[0]['signed_change_price'];
    quoations[2] = eth[0]['trade_price'];
    quoations[3] = eth[0]['signed_change_price'];
    quoations[4] = xrp[0]['trade_price'];
    quoations[5] = xrp[0]['signed_change_price'];
    quoations[6] = neo[0]['trade_price'];
    quoations[7] = neo[0]['signed_change_price'];

    console.log(quoations);

    connection.query(
        `update quoation set trade_price = ?, signed_change_price = ? where market = 'btc'`, [quoations[0], quoations[1]],
        function(err){
            if(err){
                console.log('btc 시세 변경 에러: '+err)
            }else{
                console.log('btc 시세변경 성공')
            }
        }
    );
    connection.query(
        `update quoation set trade_price = ?, signed_change_price = ? where market = 'eth'`, [quoations[2], quoations[3]],
        function(err){
            if(err){
                console.log('eth 시세 변경 에러: '+err)
            }else{
                console.log('eth 시세변경 성공')
            }
        }
    );
    connection.query(
        `update quoation set trade_price = ?, signed_change_price = ? where market = 'xrp'`, [quoations[4], quoations[5]],
        function(err){
            if(err){
                console.log('xrp 시세 변경 에러: '+err)
            }else{
                console.log('xrp 시세변경 성공')
            }
        }
    );
    connection.query(
        `update quoation set trade_price = ?, signed_change_price = ? where market = 'neo'`, [quoations[6], quoations[7]],
        function(err){
            if(err){
                console.log('neo 시세 변경 에러: '+err)
            }else{
                console.log('neo 시세변경 성공')
            }
        }
    );
}
setInterval(getQuoation,10000);
