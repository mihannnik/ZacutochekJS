// ==UserScript==
// @name         IPTest
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       You
// @match        https://2ip.ru/
// @grant        GM_openInTab
// @grant        window.close
// @run-at       document-end
// ==/UserScript==

(async function() {
    'use strict';

        var elem = document.getElementById("d_clip_button").children[0];
    if(elem.innerText == "")
    {
        GM_openInTab("https://yahoo.com/");
        self.close();
    }
    else if(elem.innerText == "217.8.127.18")
    {
        await sleep(1000);
        location.reload();
    }
    self.close();
})();

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}
