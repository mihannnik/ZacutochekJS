// ==UserScript==

// @name         IDN sitter(5)
// @namespace    http://tampermonkey.net/
// @version      3.5

// @updateURL    https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/sitter(5).js#bypass=true
// @downloadURL  https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/sitter(5).js#bypass=true

// @match        https://lobbyidn.com//lobby.php*
// @match        http://lobbyidn.com//lobby.php*
// @match        www.lobbyidn.com//lobby.php*
// @match        lobbyidn.com//lobby.php*

// @grant        GM_setValue
// @grant        GM_getValue

// @run-at       document-end

// ==/UserScript==

var Size = "SMALL";

var Limit1 = "20K";
var Limit2 = "20K";

//var Sits = 9;
//var SitsMin = 4;

var Sits = 6;
var SitsMin = 2;

(async function()
{
	'use strict';

	while(true)
	{
		await Sleep(5000);
		SetSize();
		await Sleep(5000);

		if(GetTable() == false)
		{
			await Sleep(10000);
			var ReloadButton = document.getElementById("refresh");
			ReloadButton.click();
		}
		else
		{
			return;
		}
	}
})();

function GetTable()
{
	var table = document.getElementById("tabshort");

	if(table != null)
	{
		for(let i=1; i<table.rows.length; ++i)
		{
			if(table.rows[i].cells[0].innerHTML.includes("Fast"))
			{
				if(table.rows[i].cells[1].innerText == Limit1 || table.rows[i].cells[1].innerText == Limit2)
				{
					if(table.rows[i].cells[4].innerText[2] == Sits)
					{
						if(table.rows[i].cells[4].innerText[0] > SitsMin && table.rows[i].cells[4].innerText[0] < Sits)
						{
							table.rows[i].cells[5].firstChild.click();
							return true;
						}
					}
				}
			}
		}

		return false;
	}
}

async function SetSize()
{
	var xresult = document.evaluate("//*[text()='" + Size + "']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	xresult.singleNodeValue.click();

	await Sleep(1500);

	xresult = document.evaluate("//*[text()='Player']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	xresult.singleNodeValue.click();
}

function Sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}
