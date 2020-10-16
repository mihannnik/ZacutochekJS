// ==UserScript==

// @name         LobbyKiller(4)
// @namespace    http://tampermonkey.net/
// @version      3.5

// @updateURL    https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/lobby_killer(4).js#bypass=true
// @downloadURL  https://raw.githubusercontent.com/mihannnik/ZacutochekJS/master/lobby_killer(4).js#bypass=true

// @match        www.lobbyidn.com/lobby.php?vp*
// @match        lobbyidn.com/lobby.php?vp*

// @match        https://lobbyidn.com/lobby.php?vp*
// @match        http://lobbyidn.com/lobby.php?vp*

// @grant        lobbyidn.com/lobby.php?lang=en
// @grant        window.close

// ==/UserScript==

(async function()
{
	'use strict';
	
	await SelfClose();
})();

function SelfClose()
{
	for(var i=0; i<10; ++i)
	{
		self.close();
	}
}

