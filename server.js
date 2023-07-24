const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'fdb1030.awardspace.net',
  user: '4343444_appointmentbooking',
  password: 'bizup2023',
  database: '4343444_appointmentbooking',
});

app.get('/api/availslots', (req, res) => {
  const { startDate, endDate } = req.query;

  const query = `
    SELECT *
    FROM appointment_slots
    WHERE date_column >= '${startDate}' AND date_column <= '${endDate}'
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      console.log('Results:', results);
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
