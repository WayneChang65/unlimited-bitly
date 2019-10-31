'use strict';
const unlimited_bitly = require('../index.js');
const fmlog = require('@waynechang65/fml-consolelog').log;

const LONG_URL1 = 'https://www.actcommunity.ca/information/act-in-chinese/what-is-aba-in-chinese';
const LONG_URL2 = 'https://www.moneydj.com/KMDJ/Wiki/wikiViewer.aspx?keyid=d429ee2b-e524-4878-9e4a-3c03d10b2f59';
const LONG_URL3 = 'https://finance.yahoo.com/quote/QQQq?ltr=1';
const LONG_URL4 = 'https://news.ltn.com.tw/news/politics/breakingnews/2959320';
/*
const BITLY_KEYS = [
	'690cexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',	// Bitly Account Key 1
	'98efaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'	// Bitly Account Key 2
	'75044xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',	// Bitly Account Key 3
	'd717cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'	// Bitly Account Key 4
];
*/
const BITLY_KEYS = [
	process.env.TOSMM_BITLY_4_KEY,
	process.env.TOSMM_BITLY_3_KEY,
	process.env.TOSMM_BITLY_2_KEY,
	process.env.TOSMM_BITLY_1_KEY
];
/*
const BITLY_KEYS = [
	process.env.TOSMM_BITLY_1_KEY,
	process.env.TOSMM_BITLY_2_KEY,
	process.env.TOSMM_BITLY_3_KEY,
	process.env.TOSMM_BITLY_4_KEY
];
*/
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