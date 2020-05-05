const db = require('../adapter');

function list() {
	return db.get('songs').value();
}

module.exports = { list };
