import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: "fdb1030.awardspace.net",
    database: "4343444_appointmentbooking",
    // port: 8889,
    user: "4343444_appointmentbooking",
    password: "bizup2023",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  });
  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}