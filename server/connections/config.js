// const { connect, connection } = require("mongoose");

// const connectionString =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1/agile-lake";

// connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// module.exports = connection;

const sequelize = require('sequelize');
requrie('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
