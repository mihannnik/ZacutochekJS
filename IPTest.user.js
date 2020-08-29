// ==UserScript==
// @name         IPTest
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://2ip.ru/
// @grant        GM_openInTab
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';

    var elem = document.getElementById("d_clip_button").children[0];
    if(elem.innerText == "217.8.127.18")
    {
    GM_openInTab("http://shenpoker.com/cn");
    }

})();