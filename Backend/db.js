const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // The host where your MySQL server is running (e.g., 'localhost')
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'users' // The name of your MySQL database
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = connection;
