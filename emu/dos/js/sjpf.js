;$ysa={"gk":"kuaihou.com%7c11%7c130118029%7c515%7c93%7c05645ceca40760d4020eb354"};!(function (win) {win.eysa = win.eysa || {v: "1.3.6",type: 0,id: 0,url: null,surl: null,title: null,domain: null,referrer: null,sh: 0,sw: 0,cd: 0,nl: null,t: 0,init: function (options, callback) {eysa.config(options, this);if (typeof $ysa != "undefined") {eysa.cfg = $ysa;}if (document) {this.url = document.URL || null;this.title = document.title || null;this.domain = document.domain || null;this.referrer = document.referrer || null;}if (win && win.screen) {this.sh = win.screen.height || 0;this.sw = win.screen.width || 0;this.cd = win.screen.colorDepth || 0;}if (navigator) {this.nl = navigator.language || "";}if (this.autoTrack) {}this.mts = {surl: this.request.path + "gsa" + this.mt.gid + "/" + this.mt.id + ".gif?",gin: this.mt.gc[0].replace("{0}", this.mt.id),nce: navigator.cookieEnabled};t = 1 * new Date();},extend: function (target, source) {if (source != undefined) {for (var pt in source) {if (source.hasOwnProperty(pt))target[pt] = source[pt];}}return target;},clone: function (source, resetatts, target) {target = target || {};eysa.extend(eysa.extend(target, source), resetatts || {});return target;},convert: {atob: function (atob) {},btoa: function (btoa) {}},request: {find: function (name, nval) {var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");if (arr = document.cookie.match(reg)) {return decodeURIComponent(arr[2]);} else {return nval || null;}},get: function (key, nval) {if (!!win.localStorage) { return win.localStorage.getItem(key) || (nval == undefined ? null : nval); }else {var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)", 'i');if (arr = document.cookie.match(reg)) {return decodeURIComponent(arr[2]);}else { return nval == undefined ? null : nval; }}},set: function (key, value, days) {if (!!win.localStorage) { win.localStorage.setItem(key, value); }else {var expires = new Date();expires.setTime(expires.getTime() + (days || 7) * 24 * 60 * 60 * 1000);document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expires.toGMTString();}},path: function () {var doc = document;var path = doc.currentScript ? doc.currentScript.src : function () {var js = doc.scripts, last = js.length - 1, src;for (var i = 0; i < last; i++) {if (js[i].readyState === 'interactive') {src = js[i].src;break;}}return src || js[last].src;}();return path.substring(0, path.lastIndexOf('/') + 1);}()},config: function (config, target) {target = target || eysa;return eysa.extend(target, config), target},action: {url: null,sdata: null,send: function (p, c) {if (p.ekeyid > 0) {var args = '';if ("object" === typeof JSON) {if (Object.keys(p.properties).length > 0) {try {args = encodeURIComponent(window.btoa(JSON.stringify(p.properties)));} catch (e) { }}}p.mts = { ts: parseInt(1 * new Date()), tps: eysa.mts[p.event + encodeURIComponent(p.keyid)] || 0 };if ((p.mts.ts - p.mts.tps) > 3000) {eysa.mts[p.event + encodeURIComponent(p.keyid)] = p.mts.ts;var img = new Image(1, 1);var _surl = eysa.mts.surl;if (!("string" === typeof p.keyid && p.keyid.length > 4 && p.keyid.substr(1, 4) === "tp2-")) {_surl = _surl.replace("//tc1.kekoku.", "//hm.vipfinal.");}_surl+= '$e=' + p.event + '&$k=' + encodeURIComponent(p.keyid) + '&$ek=' + p.ekeyid + '&$kt=' + p.ktype + '&$dt=' + encodeURIComponent(eysa.title) + "&$du=" + encodeURIComponent(eysa.url) + '&$dr=' + encodeURIComponent(eysa.referrer) + "&$cd=" + args + "&t=" + p.mts.ts;img.src = _surl.replace("?", "?$gk=" + eysa.cfg.gk + "&"); }}if ("function" === typeof c) { c(p); }}},track: function (e, p, c) {var _ekeyid = 0;if ("object" === typeof this.ets) { if (this.ets.hasOwnProperty(e)) { _ekeyid = this.ets[e]; } }var _keyid = 0;var _ktype = "";if ("number" === typeof p) { p = { id: p, kt: typeof p }; }else if ("string" === typeof p) { p = { id: p, kt: typeof p }; }if ("object" === typeof p) {if (p.hasOwnProperty("id")) {_keyid = p.id;delete p.id;}if (p.hasOwnProperty("kt")) {_ktype = p.kt;delete p.kt;}}eysa.action.send({type: 'track',event: e,ekeyid: _ekeyid,ktype: _ktype,keyid: _keyid,properties: p}, c);}};if (win.eysa.t === 0) {win.eysa.init({ mt: { gh: "tc3.kekoku.com", gid: "93", id: "e3f515cd8e2e51bc6546e313d33bcf93", dm: "kuaihou.com", gc: ["HMS{0}","IDENTITYID"] }, vt: 212000.92515, ets: {d:0,soft:1,news:2,topic:3,list:4,other:5,index:6,softlist:7,zt:8,down:9,fbcate:13} });}win.ysa = win.ysa || win.eysa || {};})(window);