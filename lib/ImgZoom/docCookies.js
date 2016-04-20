'use strict';

var _base = require('./base64');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base64 = new _base2.default(); // docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
// docCookies.getItem(name)
// docCookies.removeItem(name[, path], domain)
// docCookies.hasItem(name)
// docCookies.keys()

var docCookies = {
	getItem: function getItem(sKey) {
		return decodeURIComponent(base64.decode(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1'))) || null;
	},
	setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
			return false;
		}
		var sExpires = '';
		if (vEnd) {
			switch (vEnd.constructor) {
				case Number:
					sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
					break;
				case String:
					sExpires = '; expires=' + vEnd;
					break;
				case Date:
					sExpires = '; expires=' + vEnd.toUTCString();
					break;
			}
		}
		document.cookie = encodeURIComponent(sKey) + '=' + base64.encode(encodeURIComponent(sValue)) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
		return true;
	},
	removeItem: function removeItem(sKey, sPath, sDomain) {
		if (!sKey || !this.hasItem(sKey)) {
			return false;
		}
		document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
		return true;
	},
	hasItem: function hasItem(sKey) {
		return new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(document.cookie);
	},
	keys: /* optional method: you can safely remove it! */function keys() {
		var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
		for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
			aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
		}
		return aKeys;
	}
};

module.exports = docCookies;