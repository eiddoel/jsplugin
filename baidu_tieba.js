// ==UserScript==
// @name         贴吧解除限制
// @namespace    http://tampermonkey.net/
// @author       eiddoel
// @version      0.0.3
// @description  解除不能看帖的限制，去广告
// @icon         https://raw.githubusercontent.com/eiddoel/jsplugin/main/tools.png
// @include        http*://*.baidu.com/*
// @createTime   2019-10-18
// @updateTime   2020-12-24
// ==/UserScript==

(function () {
  var whiteList = ['tieba.baidu.com', 'm.tieba.com', 'jump2.bdimg.com', 'tiebac.baidu.com', 'c.tieba.baidu.com'];
  var hostname = window.location.hostname;
  var key = encodeURIComponent('Track13:贴吧去广告:执行判断');
  if (whiteList.indexOf(hostname) < 0 || window[key]) {
    return;
  };
  window[key] = true;
  const kad = document.createElement('style');
  kad.innerText = 'div[data-metadata],.nav-bar-wrapper,.tb-hotthread-wrapper,.recommend-list,.bottom-guide-box{display:none!important}';
  document.head.appendChild(kad);
  let reg = /\/p\/.*/gi;
  const pathname = window.location.pathname;
  if (reg.test(pathname)) {
    const tid = pathname.replace(/[^0-9]/ig, "");
    window.location.replace(`https://byokpg.smartapps.cn/pages/pb/pb?tid=${tid}`);
    return
  };
  function QueryString(item) {
    var sValue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
    return sValue ? sValue[1]: sValue;
  };
  if (pathname === '/f') {
    if (QueryString('kz')) {
      window.location.replace(`https://byokpg.smartapps.cn/pages/pb/pb?tid=${QueryString('kz')}`);
    } else {
      const tname = QueryString('kw');
      window.location.replace(`https://byokpg.smartapps.cn/pages/frs/frs?kw=${tname}`);
    };
  };
})();
