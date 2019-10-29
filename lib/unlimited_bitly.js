'use strict';
const { BitlyClient } = require('bitly');

let bitlys = [];

function _init(_keys) {
	bitlys.length = 0;
	for (let i = 0; i < _keys.length; i++) {
		bitlys.push(new BitlyClient(_keys[i], {}));
	}
	return this;
}

async function _shorten(_longUrl) {
	let result, err;
	for (let i = 0; i < bitlys.length; i++) {
		try {
			result = await bitlys[i].shorten(_longUrl);
			break;
		} catch(e) { err = e; }
	}
	if (result)	return result.url;
	else throw err;
}

module.exports = {
	init : _init,
	shorten : _shorten
};