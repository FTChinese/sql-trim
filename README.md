Tag function to trim whitespaces and turn template string into one line. This is mainly used to write fomatted sql statement.

Example
```js
const sql = require('@ftchinese/sql-trim');

const stmt = sql`
SELECT name AS name,
    email AS email,
    mobile_phone AS mobilePhone
FROM user
WHERE id = :id
LIMIT 1`;

const [rows, ] = conn.execute(stmt, {1});
```
`stmt` will be one line of string: `SELECT name AS name, email AS email, mobile_phone AS mobilePhone FROM user WHERE id = :id LIMIT 1`.
