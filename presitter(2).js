// ==UserScript==

// @name         PreSitter(2)
// @namespace    http://tampermonkey.net/
// @version      1.0

// @match        shenpoker.com/deposit

// @grant        shenpoker.com/game/idnpoker
// @grant        GM_openInTab
// @grant        window.close

// @run-at       document-end

// ==/UserScript==

(function()
{
	'use strict';
	OpenIDNPlay();
	self.close();
})();

function OpenIDNPlay()
{
	GM_openInTab("http://shenpoker.com/game/idnpoker", 'active');
    Sleep(100);
}

function Sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}