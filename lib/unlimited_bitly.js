'use strict';
const { BitlyClient } = require('bitly');


let bitlys = [];

function _init(_keys) {
	bitlys.length = 0;

	for (let i = 0; i < _keys.length; i++) {
		bitlys.push({key: _keys[i], isvalid: true});
	}
	console.log(bitlys);
	return this;
}

async function _shorten(_longUrl) {
	let result, err;
	let bitlyObj;
	for (let i = 0; i < bitlys.length; i++) {
		try {
			if (!bitlys[i].isvalid) {
				console.log('[Continue] bitlys[' + i + '].isvalid = ' + bitlys[i].isvalid);
				continue;
			}
			bitlyObj = new BitlyClient(bitlys[i].key, {});
			result = await bitlyObj.shorten(_longUrl);
			console.log('[Await] bitlys['+ i + '].isvalid = ' + bitlys[i].isvalid);
			break;
		} catch(e) {
			err = e;
			bitlys[i].isvalid = false;
			console.log('[Catch] bitlys[' + i +'].isvalid = ' + bitlys[i].isvalid);
		}
	}
	if (result)	return result.url;
	else throw err;
}

async function _getAccountsStatus() {
	let testLongUrl = 'https://github.com/WayneChang65/unlimited-bitly';
	let bitlyObj;
	let result = {
		valid: 0,
		total: bitlys.length
	};
	for (let i = 0; i < bitlys.length; i++) {
		try {
			bitlyObj = new BitlyClient(bitlys[i].key, {});
			await bitlyObj.shorten(testLongUrl);
			result.valid++;
		}catch(e){
			continue;
		}
	}
	return result;
}

module.exports = {
	init : _init,
	shorten : _shorten,
	getAccountsStatus : _getAccountsStatus
};