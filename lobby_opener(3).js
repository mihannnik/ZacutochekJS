// ==UserScript==

// @name         LobbyOpener(3)
// @namespace    http://tampermonkey.net/
// @version      3.5

// @updateURL    https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/lobby_opener(3).js#bypass=true
// @downloadURL  https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/lobby_opener(3).js#bypass=true

// @match        https://shenpoker.com/game/idnpok*
// @match        http://shenpoker.com/game/idnpok*

// @match        https://www.shenpoker.com/game/idnpok*
// @match        http://www.shenpoker.com/game/idnpok*

// @grant        GM_setClipboard
// @grant        GM_openInTab
// @grant        window.close

// @run-at       document-end

// ==/UserScript==

(async function()
{
	'use strict';

	await Sleep(3000);

	await GetBalance();

	var gamebtn = document.getElementsByClassName('open-sans play-now-button launchGame');
	
	for(var i=0; i<gamebtn.length; ++i)
	{
		if(gamebtn[i].innerHTML.includes("立即游戏"))
		{
			gamebtn[i].click();
		}
	}

	await Sleep(17000);

	await GM_openInTab("http://lobbyidn.com//lobby.php?lang=en", 'active');
	await GM_openInTab("https://lobbyidn.com//lobby.php?lang=en");

	await SelfClose();
})();

async function GetBalance()
{
	UpdateBalance();

	await Sleep(10000);

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

		await Sleep(2000);
	}
}

function UpdateBalance()
{
	var refreshBtn = document.getElementsByClassName('refreshBalance lazy');

	refreshBtn[0].click();
}

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

