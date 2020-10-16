// ==UserScript==

// @name         StartShenpoker

// @namespace    http://tampermonkey.net/
// @version      3.4

// @match        https://www.duckduckgo.com/
// @match        http://www.duckduckgo.com/

// @match        https://duckduckgo.com/
// @match        http://duckduckgo.com/

// @grant        GM_openInTab
// @grant        window.close

// @run-at       document-end

// ==/UserScript==

(async function()
{
    'use strict';

    GM_openInTab("https://shenpoker.com/cn", 'active');

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

