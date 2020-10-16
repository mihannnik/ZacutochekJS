// ==UserScript==

// @name         IPTest
// @namespace    http://tampermonkey.net/
// @version      3.5

// @updateURL    https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/IPTest.js#bypass=true
// @downloadURL  https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/IPTest.js#bypass=true

// @match        https://www.myip.com/
// @match        http://www.myip.com/

// @match        https://myip.com/
// @match        http://myip.com/

// @grant        GM_openInTab
// @grant        window.close

// @run-at       document-end

// ==/UserScript==

var PassIp = "";

(async function()
{
    'use strict';
	
    var elem = document.getElementById("ip");
	
    if(elem.innerText == PassIp)
    {
        GM_openInTab("https://duckduckgo.com/");        
		await SelfClose();
    }
    else
	{
		if(elem.innerText == "217.8.127.18")
		{
			await Sleep(2000);
			location.reload();
		}
	}
	
    SelfClose();
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

