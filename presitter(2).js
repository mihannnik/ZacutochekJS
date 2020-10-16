// ==UserScript==

// @name         PreSitter(2)
// @namespace    http://tampermonkey.net/
// @version      3.5

// @updateURL    https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/presitter(2).js#bypass=true
// @downloadURL  https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/presitter(2).js#bypass=true

// @match        shenpoker.com/deposit
// @match        www.shenpoker.com/deposit

// @match        https://shenpoker.com/deposit
// @match        http://shenpoker.com/deposit

// @grant        https://shenpoker.com/game/idnpoker
// @grant        http://shenpoker.com/game/idnpoker

// @grant        GM_openInTab
// @grant        window.close

// @run-at       document-end

// ==/UserScript==

(async function()
{
	'use strict';
	
	GM_openInTab("http://shenpoker.com/game/idnpoker", 'active');
	
	await Sleep(200);
	
	await SelfClose();
})();

function Sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

function SelfClose()
{
	for(var i=0; i<10; ++i)
	{
		self.close();
	}
}

