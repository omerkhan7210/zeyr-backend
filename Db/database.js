import mysql from 'mysql';

const pool = mysql.createConnection({
  host: '185.97.146.100', // Host should only contain the IP or domain
  port: 3306,             // Add port number separately
  user: 'root',           // Your MySQL username
  password: 'Umerkhan@1122@', // Your MySQL password
  database: 'zeyr-custom',    // Your database name
});

// db

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

export default pool;
