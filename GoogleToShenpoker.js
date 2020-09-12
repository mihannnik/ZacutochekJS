// ==UserScript==
// @name         GoogleToShenpoker
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  try to take over the world!
// @author       You
// @match        https://in.yahoo.com/?p=us
// @match        https://www.yahoo.com/
// @grant        GM_openInTab
// @grant        window.close
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    GM_openInTab("https://shenpoker.com/cn",'active');
    self.close();
    self.close();
    self.close();
    self.close();
})();
