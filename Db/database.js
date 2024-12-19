import mysql from 'mysql';

const pool = mysql.createConnection({
  host: '185.97.146.100:3306',
  user: 'root',
  password: 'Umerkhan@1122@',
  database: 'zeyr-custom',
});
// db

export default pool;
