// ==UserScript==

// @name         IDNLogIn(1)
// @namespace    http://tampermonkey.net/
// @version      3.5

// @match        shenpoker.com/
// @match        www.shenpoker.com/

// @match        https://shenpoker.com/
// @match        http://shenpoker.com/

// @match        https://www.shenpoker.com/
// @match        http://www.shenpoker.com/

// @grant        shenpoker.com/deposit

// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        window.close

// @exclude      shenpoker.com/message*

// @run-at       document-end

// ==/UserScript==

var username = "";
var password = "";

(function()
{
	'use strict';

	SetUserData();
	ClickLogin();
})();

function SetUserData()
{
	var UserInput = document.getElementsByTagName('input');

	for(var i=0; i<UserInput.length; ++i)
	{
		if(UserInput[i].name == 'username')
		{
			UserInput[i].value = username;
			continue;
		}
		else if(UserInput[i].name == 'password')
		{
			UserInput[i].value = password;
		}
	}
}

function ClickLogin()
{
	var loginbtn = document.getElementsByClassName('bg-login');

	for(var j=0; j<loginbtn.length; ++j)
	{
		loginbtn[j].click();
	}
}

