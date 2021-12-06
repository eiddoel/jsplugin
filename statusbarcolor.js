// ==UserScript==
// @name         statusbarcolor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         *://*/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let metac = document.createElement("meta");
    metac.setAttribute('name','theme-color');
    metac.setAttribute('content','#111');
    document.head.append(metac);
})();
