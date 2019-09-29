require('dotenv').config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_DATA = process.env.DB_DATA;

//require('iconv-lite').encodingExists('foo')
const bcrypt = require('bcrypt');
var mysql = require('mysql2/promise');

class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}

var SaharaSQLService ={
    GetUser: async function(username){
        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASS,
            database: DB_DATA
        });
        const [rows] = await con.execute('select PASSWORD from USER WHERE EMAIL = ?',[username]);
        var user = new User(username,rows[0]['PASSWORD']);
        return user;
    },
    CreateNewUser: async function(username,password){
        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASS,
            database: DB_DATA
        });
        const [rows] = await con.execute('select PASSWORD from USER WHERE EMAIL = ?',[username]);
        var user = new User(username,rows[0]['PASSWORD']);
        return user;
    },
    DoseUserExsist: async function(username,password){
        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASS,
            database: DB_DATA
        });
        const [rows] = await con.execute('select PASSWORD from USER WHERE EMAIL = ?',[username]);
        if(typeof username,rows[0] !== 'undefined'){
            return true
        }else{
            return false
        }
    }

}
module.exports = SaharaSQLService;
