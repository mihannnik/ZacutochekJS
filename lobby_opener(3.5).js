// ==UserScript==

// @name         LobbyOpener(3)
// @namespace    http://tampermonkey.net/
// @version      1.0

// @match        shenpoker.com/game/idnpok*

// @grant        GM_openInTab
// @grant        GM_setClipboard
// @grant        window.close

// @run-at       document-end

// ==/UserScript==

(async function()
{
	'use strict';
	await sleep(3000);

	GetBalance();

	await sleep(5000);

    GetBalance();

	var gamebtn = document.getElementsByClassName('open-sans play-now-button launchGame');

	for(var i = 0; i< gamebtn.length; i++)
	{
		if(gamebtn[i].innerHTML.includes("立即游戏"))
		{
			gamebtn[i].click();
		}
	}

	await sleep(15000);

    GetBalance();

	GM_openInTab("https://lobbyidn.com//lobby.php?lang=en");

    self.close();
})();

async function GetBalance()
{
    var balance = document.getElementsByClassName('totalWallet initAfterMount');

	if(balance[0].innerText.includes("¥"))
	{
        var value = balance[0].innerText;

		for(var j=0; j<3; ++j)
		{
			GM_setClipboard(value, "text");
			sleep(100);
		}
    }
}

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}