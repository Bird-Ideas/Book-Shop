const mariadb = require('mariadb');
require('dotenv').config(); 

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME, 
    connectTimeout: 50000, 
    connectionLimit: 5
});
module.exports = pool;

// async function request() { 
//     let conn; 
//     try {
//         conn = await pool.getConnection(); 
//         const query = await conn.query('select user, host from user;'); 
//         console.table(query); 
//     } catch (error) {
//         console.log(error); 
//     } finally {
//         if(conn){
//             await conn.end(); 
//             await pool.end();
//         } return;  
//     }
// }
// request(); 
