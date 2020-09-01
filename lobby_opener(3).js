// ==UserScript==

// @name         LobbyOpener(3)
// @namespace    http://tampermonkey.net/
// @version      3.4
// @updateURL    https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/lobby_opener(3).js#bypass=true
// @downloadURL  https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/lobby_opener(3).js#bypass=true
// @match        https://shenpoker.com/game/idnpok*

// @grant        GM_openInTab
// @grant        GM_setClipboard
// @grant        window.close

// @run-at       document-end

// ==/UserScript==

(async function()
{
	'use strict';
	await sleep(3000);

	await GetBalance();

	var gamebtn = document.getElementsByClassName('open-sans play-now-button launchGame');

	for(var i=0; i<gamebtn.length; ++i)
	{
		if(gamebtn[i].innerHTML.includes("立即游戏"))
		{
			gamebtn[i].click();
		}
	}

	await sleep(17000);

	GM_openInTab("http://lobbyidn.com//lobby.php?lang=en");
	GM_openInTab("https://lobbyidn.com//lobby.php?lang=en");

	self.close();
})();

async function GetBalance()
{
	UpdateBalance();
	await sleep(10000);

	var balance = document.getElementsByClassName('totalWallet initAfterMount');
    if(balance.length < 1)
    {
    balance = document.getElementsByClassName('totalWallet ');
    }
	for(var i=0; i<3; ++i)
	{
		var str = balance[0].innerText;

		if(!str.includes("Loading"))
		{
            		str +='¥';
			GM_setClipboard(str, "text");
			break;
		}

		await sleep(2000);
	}
}

function UpdateBalance()
{
	var refreshBtn = document.getElementsByClassName('refreshBalance lazy');
	refreshBtn[0].click();
}

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

