const { Pool } = require("pg");

const connectionString =
  "postgres://znlaohca:AauOkly0Cx8XE7hHW5rUD2rlmykBmDJ5@horton.db.elephantsql.com/znlaohca";

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = pool;
