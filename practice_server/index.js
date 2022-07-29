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
async function getQuoation(){
    let quoations = new Array;
    let btc = await service.getTicker(["KRW-BTC"]);
    let eth = await service.getTicker(["KRW-ETH"]);
    let xrp = await service.getTicker(["KRW-XRP"]);
    let neo = await service.getTicker(["KRW-neo"]);

    console.log( btc[0]['opening_price']);
    // console.log(await eth);
    // console.log(await xrp);
    // console.log(await neo);
    quoations.push(btc[0]['trade_price'], eth[0]['trade_price'], xrp[0]['trade_price'], neo[0]['trade_price']);
    console.log(quoations);

}
setInterval(getQuoation,10000);
