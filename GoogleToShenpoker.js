// ==UserScript==
// @name         GoogleToShenpoker
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       You
// @match        https://google.com/
// @grant        GM_openInTab
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
    GM_openInTab("https://shenpoker.com/cn",'active');
    self.close();

})();
