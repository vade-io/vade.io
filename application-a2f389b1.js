/******/ (() => { // webpackBootstrap
/******/ 	/************************************************************************/
var __webpack_exports__ = {};
//= require 'vendor/smoothscroll/dist/smoothscroll.js'
//= require 'vendor/leaflet/leaflet.js'
//= require 'map.js'
//= require 'init.js'

if (console && console.log) {
  console.log("                                                               dddd                             iiii\n                                                               dddd                             iiii\n                                        aaaaa                  dddd\n    %%%%%#####    vvvv        vvvv  aaaaaaaaaaaaa     ddddddddddddd      eeeeeeeeee             iiii      oooooooooo\n    %%%%%#####     vvvv      vvvv   aa      aaaaa    ddddd   dddddd    eeeee    eeee            iiii     ooooo   oooo\n****     #####      vvvv    vvvv        aa   aaaa   dddd       dddd    eeee      eeee           iiii    oooo      oooo\n****     #####       vvvv  vvvv     aaaaaaaaaaaaa   dddd       dddd   eeeeeeeeeeeeeee           iiii    oooo       ooo\n****     #####        vvvvvvvv     aaaaa     aaaa   ddddd     ddddd    eeee             ....    iiii    ooooo     oooo\n::::.....              vvvvvv       aaaaa  aaaaaa    dddddddddddddd     eeeeeeeeeeeee   ....    iiii     oooooooooooo\n::::.....               vvvv         aaaaaaa aaaa      ddddddd dddd       eeeeeeee      ....    iiii       ooooooooo\n\n");
}

function initEMailLinks() {
  var links = document.querySelectorAll('div[itemprop="email"]');
  for (i = 0; i < links.length; ++i) {
    var link = links[i];
    var reversedEmail = link.innerText;
    var email = reversedEmail.split("").reverse().join("");
    var parent = link.parentElement;
    parent.innerHTML = parent.innerHTML.replace(/<(\/?)div/g, '<$1a');
    link = parent.firstElementChild;
    var href = document.createAttribute('href')
    href.value = 'mailto:' + email;
    link.setAttributeNode(href);
  }
}

function init() {
  initEMailLinks();
  // initMap();
  // document.oncopy = textCopied;
}

if (window.addEventListener)
  window.addEventListener("load", init, false);
else if (window.attachEvent)
  window.attachEvent("onload", init);
else window.onload = init;

/******/ })()
;