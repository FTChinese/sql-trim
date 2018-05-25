/**
 * @description Tag function to trim whitespaces and turn template string into one line. This is mainly used to write fomatted sql statement.
 * @example
 * const stmt = sql`
 * SELECT name AS name,
 *  email AS email,
 *  mobile_phone AS mobilePhone
 * FROM user
 * WHERE id = :id
 * LIMIT 1`;
 * Result is one line of string: 'SELECT name AS name, email AS email, mobile_phone AS mobilePhone FROM user WHERE id = :id LIMIT 1'.
 */
module.exports = function sql(strings, ...values) {
	let output = '';
	for (let i = 0; i < values.length; i++) {
		output += strings[i] + values[i];
	}
	output += strings[values.length];

	let lines = output.split(/(?:\r\n|\n|\r)/g);

	return lines.map(line => {
		return line.replace(/^\s+|\s+$/gm, '');
	}).join(' ').trim();
};