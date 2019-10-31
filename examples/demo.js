'use strict';
const unlimited_bitly = require('../index.js');
const fmlog = require('@waynechang65/fml-consolelog').log;

const LONG_URL1 = 'https://github.com/WayneChang65/ptt-crawler';
const LONG_URL2 = 'https://github.com/WayneChang65/baha-crawler';
const LONG_URL3 = 'https://github.com/WayneChang65/fml-consolelog';
const LONG_URL4 = 'https://github.com/WayneChang65/unlimitied-bitly';
/*
const BITLY_KEYS = [
	'690cexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',	// Bitly Account Key 1
	'98efaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'	// Bitly Account Key 2
	'75044xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',	// Bitly Account Key 3
	'd717cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'	// Bitly Account Key 4
];
*/

const BITLY_KEYS = [
	process.env.TOSMM_BITLY_1_KEY,
	process.env.TOSMM_BITLY_2_KEY,
	process.env.TOSMM_BITLY_3_KEY,
	process.env.TOSMM_BITLY_4_KEY
];

main();

async function main() {
	let ubitly = unlimited_bitly.init(BITLY_KEYS);
	try {
		console.log(await ubitly.getAccountsStatus());
		fmlog('sys_msg', ['shortenedUrl: ' + await ubitly.shorten(LONG_URL1), 
			'longUrl: ' + LONG_URL1]);
		fmlog('sys_msg', ['shortenedUrl: ' + await ubitly.shorten(LONG_URL2), 
			'longUrl: ' + LONG_URL2]);
		fmlog('sys_msg', ['shortenedUrl: ' + await ubitly.shorten(LONG_URL3), 
			'longUrl: ' + LONG_URL3]);
		fmlog('sys_msg', ['shortenedUrl: ' + await ubitly.shorten(LONG_URL4), 
			'longUrl: ' + LONG_URL4]);	
	} catch(e) {
		fmlog('error_msg', ['UNLIMITED-BITLY', e.statusCode, e]);
	}
}