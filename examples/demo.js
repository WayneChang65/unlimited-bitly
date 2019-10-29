'use strict';
const unlimited_bitly = require('../index.js');
const fmlog = require('@waynechang65/fml-consolelog').log;

const LONG_URL = 'https://news.ltn.com.tw/news/politics/breakingnews/2959320';
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
		fmlog('sys_msg', ['shortenedUrl: ' + await ubitly.shorten(LONG_URL), 
			'longUrl: ' + LONG_URL]);
	} catch(e) {
		fmlog('error_msg', ['UNLIMITED-BITLY', e.statusCode, e]);
	}
}