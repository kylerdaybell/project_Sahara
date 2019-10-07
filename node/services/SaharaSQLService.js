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
    getUserId: async function(username){
        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASS,
            database: DB_DATA
        });
        const [rows] = await con.execute('select ID from USER WHERE EMAIL = ?',[username]);
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
        encryptedpassword = bcrypt.hashSync(password,10);
        await con.execute('INSERT INTO USER (EMAIL,PASSWORD,ROLE) VALUE (?,?,?)',[username,encryptedpassword,"user"]);
        return;
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
    },
    getCategory: async function(id){
        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASS,
            database: DB_DATA
        });
        const [rows] = await con.execute('select * FROM CATEGORY WHERE ID = ?;',[id]);
        if(typeof username,rows[0] !== 'undefined'){
            return rows;
        }else{
            return [];
        }
    },
    getAllCategories: async function(username){
        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASS,
            database: DB_DATA
        });
        const [rows] = await con.execute('select * from USER A inner join CATEGORY B on A.ID = B.USER_ID where A.EMAIL = ?;',[username]);
        if(typeof username,rows[0] !== 'undefined'){
            return rows;
        }else{
            return [];
        }
    },
    addNewCategory: async function(username,title,discription,color){
        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASS,
            database: DB_DATA
        });
        const [rows] = await con.execute('select ID from USER WHERE EMAIL = ?;',[username]);
        if(typeof username,rows[0] != 'undefined'){
            userid = rows[0]['ID'];
            await con.execute('INSERT INTO CATEGORY (USER_ID,TITLE,DISCRIPTION,COLOR) VALUES (?,?,?,?)',[userid,title,discription,color]);
            return true;
        }else{
            return false;
        }

    },
    updateCategory:async function(id,title,description,color){
        console.log("in update category");

        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASS,
            database: DB_DATA
        });
        console.log(id);
        await con.execute('UPDATE CATEGORY SET TITLE=? ,DISCRIPTION=?, COLOR=? WHERE ID=?',[title,description,color,id]);
        return true;
    }

}
module.exports = SaharaSQLService;
