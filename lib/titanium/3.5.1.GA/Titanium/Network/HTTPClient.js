var crypto = require('crypto');
function HTTPClient(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'DONE',
			'HEADERS_RECEIVED',
			'LOADING',
			'OPENED',
			'UNSENT',
			'allResponseHeaders',
			'apiName',
			'autoEncodeUrl',
			'autoRedirect',
			'bubbleParent',
			'cache',
			'connected',
			'connectionType',
			'domain',
			'enableKeepAlive',
			'file',
			'location',
			'ondatastream',
			'onerror',
			'onload',
			'onreadystatechange',
			'onsendstream',
			'password',
			'readyState',
			'responseData',
			'responseText',
			'responseXML',
			'securityManager',
			'status',
			'statusText',
			'timeout',
			'tlsVersion',
			'username',
			'validatesSecureCertificate',
			'withCredentials',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.DONE) {
		throw new Error('Ti.Network.HTTPClient.DONE is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DONE = undefined;
	} else {
		this.DONE = 0;
	}
	if (__SLAG_PROPERTIES.HEADERS_RECEIVED) {
		throw new Error('Ti.Network.HTTPClient.HEADERS_RECEIVED is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HEADERS_RECEIVED = undefined;
	} else {
		this.HEADERS_RECEIVED = 0;
	}
	if (__SLAG_PROPERTIES.LOADING) {
		throw new Error('Ti.Network.HTTPClient.LOADING is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LOADING = undefined;
	} else {
		this.LOADING = 0;
	}
	if (__SLAG_PROPERTIES.OPENED) {
		throw new Error('Ti.Network.HTTPClient.OPENED is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OPENED = undefined;
	} else {
		this.OPENED = 0;
	}
	if (__SLAG_PROPERTIES.UNSENT) {
		throw new Error('Ti.Network.HTTPClient.UNSENT is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNSENT = undefined;
	} else {
		this.UNSENT = 0;
	}
	if (__SLAG_PROPERTIES.allResponseHeaders) {
		throw new Error('Ti.Network.HTTPClient.allResponseHeaders is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allResponseHeaders = undefined;
	} else {
		this.allResponseHeaders = '';
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Network.HTTPClient.apiName is read only property');
	}
	this.apiName = 'Ti.Network.HTTPClient';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.autoEncodeUrl = undefined;
	} else {
		this.autoEncodeUrl = __SLAG_PROPERTIES.autoEncodeUrl || true;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.autoRedirect = undefined;
	} else {
		this.autoRedirect = __SLAG_PROPERTIES.autoRedirect || true;
	}
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cache = undefined;
	} else {
		this.cache = __SLAG_PROPERTIES.cache || true;
	}
	if (__SLAG_PROPERTIES.connected) {
		throw new Error('Ti.Network.HTTPClient.connected is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.connected = undefined;
	} else {
		this.connected = true;
	}
	if (__SLAG_PROPERTIES.connectionType) {
		throw new Error('Ti.Network.HTTPClient.connectionType is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.connectionType = undefined;
	} else {
		this.connectionType = '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.domain = undefined;
	} else {
		this.domain = __SLAG_PROPERTIES.domain || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.enableKeepAlive = undefined;
	} else {
		this.enableKeepAlive = __SLAG_PROPERTIES.enableKeepAlive || true;
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.file = undefined;
	} else {
		this.file = __SLAG_PROPERTIES.file || '';
	}
	if (__SLAG_PROPERTIES.location) {
		throw new Error('Ti.Network.HTTPClient.location is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.location = undefined;
	} else {
		this.location = '';
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ondatastream = undefined;
	} else {
		this.ondatastream = __SLAG_PROPERTIES.ondatastream || {};
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.onerror = undefined;
	} else {
		this.onerror = __SLAG_PROPERTIES.onerror || {};
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.onload = undefined;
	} else {
		this.onload = __SLAG_PROPERTIES.onload || {};
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.onreadystatechange = undefined;
	} else {
		this.onreadystatechange = __SLAG_PROPERTIES.onreadystatechange || {};
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.onsendstream = undefined;
	} else {
		this.onsendstream = __SLAG_PROPERTIES.onsendstream || {};
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.password = undefined;
	} else {
		this.password = __SLAG_PROPERTIES.password || '';
	}
	if (__SLAG_PROPERTIES.readyState) {
		throw new Error('Ti.Network.HTTPClient.readyState is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.readyState = undefined;
	} else {
		this.readyState = 0;
	}
	if (__SLAG_PROPERTIES.responseData) {
		throw new Error('Ti.Network.HTTPClient.responseData is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.responseData = undefined;
	} else {
		this.responseData = {};
	}
	if (__SLAG_PROPERTIES.responseText) {
		throw new Error('Ti.Network.HTTPClient.responseText is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.responseText = undefined;
	} else {
		this.responseText = '';
	}
	if (__SLAG_PROPERTIES.responseXML) {
		throw new Error('Ti.Network.HTTPClient.responseXML is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.responseXML = undefined;
	} else {
		this.responseXML = {};
	}
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.securityManager = undefined;
	} else {
		this.securityManager = __SLAG_PROPERTIES.securityManager || {};
	}
	if (__SLAG_PROPERTIES.status) {
		throw new Error('Ti.Network.HTTPClient.status is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.status = undefined;
	} else {
		this.status = 0;
	}
	if (__SLAG_PROPERTIES.statusText) {
		throw new Error('Ti.Network.HTTPClient.statusText is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.statusText = undefined;
	} else {
		this.statusText = '';
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.timeout = undefined;
	} else {
		this.timeout = __SLAG_PROPERTIES.timeout || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tlsVersion = undefined;
	} else {
		this.tlsVersion = __SLAG_PROPERTIES.tlsVersion || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.username = undefined;
	} else {
		this.username = __SLAG_PROPERTIES.username || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.validatesSecureCertificate = undefined;
	} else {
		this.validatesSecureCertificate = __SLAG_PROPERTIES.validatesSecureCertificate || true;
	}
	if ([
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.withCredentials = undefined;
	} else {
		this.withCredentials = __SLAG_PROPERTIES.withCredentials || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
HTTPClient.prototype.abort = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.addAuthFactory = function () {
	if ([
			'android',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.addKeyManager = function () {
	throw new Error('Ti.Network.HTTPClient.addKeyManager was deprecated, since 3.3.0');
};
HTTPClient.prototype.addTrustManager = function () {
	throw new Error('Ti.Network.HTTPClient.addTrustManager was deprecated, since 3.3.0');
};
HTTPClient.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
HTTPClient.prototype.clearCookies = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.getAllResponseHeaders = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allResponseHeaders;
};
HTTPClient.prototype.getApiName = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
HTTPClient.prototype.getAutoEncodeUrl = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.autoEncodeUrl;
};
HTTPClient.prototype.getAutoRedirect = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.autoRedirect;
};
HTTPClient.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
HTTPClient.prototype.getCache = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.cache;
};
HTTPClient.prototype.getConnected = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.connected;
};
HTTPClient.prototype.getConnectionType = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.connectionType;
};
HTTPClient.prototype.getDomain = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.domain;
};
HTTPClient.prototype.getEnableKeepAlive = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.enableKeepAlive;
};
HTTPClient.prototype.getFile = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.file;
};
HTTPClient.prototype.getLocation = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.location;
};
HTTPClient.prototype.getOndatastream = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ondatastream;
};
HTTPClient.prototype.getOnerror = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onerror;
};
HTTPClient.prototype.getOnload = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onload;
};
HTTPClient.prototype.getOnreadystatechange = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onreadystatechange;
};
HTTPClient.prototype.getOnsendstream = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onsendstream;
};
HTTPClient.prototype.getPassword = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.password;
};
HTTPClient.prototype.getReadyState = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.readyState;
};
HTTPClient.prototype.getResponseData = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.responseData;
};
HTTPClient.prototype.getResponseHeader = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
HTTPClient.prototype.getResponseText = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.responseText;
};
HTTPClient.prototype.getResponseXML = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.responseXML;
};
HTTPClient.prototype.getSecurityManager = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.securityManager;
};
HTTPClient.prototype.getStatus = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.status;
};
HTTPClient.prototype.getStatusText = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.statusText;
};
HTTPClient.prototype.getTimeout = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.timeout;
};
HTTPClient.prototype.getTlsVersion = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tlsVersion;
};
HTTPClient.prototype.getUsername = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.username;
};
HTTPClient.prototype.getValidatesSecureCertificate = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.validatesSecureCertificate;
};
HTTPClient.prototype.getWithCredentials = function () {
	if ([
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.withCredentials;
};
HTTPClient.prototype.open = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.send = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.setAutoEncodeUrl = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.autoEncodeUrl = __SLAG__PROPERTY;
};
HTTPClient.prototype.setAutoRedirect = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.autoRedirect = __SLAG__PROPERTY;
};
HTTPClient.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
HTTPClient.prototype.setCache = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.cache = __SLAG__PROPERTY;
};
HTTPClient.prototype.setDomain = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.domain = __SLAG__PROPERTY;
};
HTTPClient.prototype.setEnableKeepAlive = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.enableKeepAlive = __SLAG__PROPERTY;
};
HTTPClient.prototype.setFile = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.file = __SLAG__PROPERTY;
};
HTTPClient.prototype.setOndatastream = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ondatastream = __SLAG__PROPERTY;
};
HTTPClient.prototype.setOnerror = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onerror = __SLAG__PROPERTY;
};
HTTPClient.prototype.setOnload = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onload = __SLAG__PROPERTY;
};
HTTPClient.prototype.setOnreadystatechange = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onreadystatechange = __SLAG__PROPERTY;
};
HTTPClient.prototype.setOnsendstream = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onsendstream = __SLAG__PROPERTY;
};
HTTPClient.prototype.setPassword = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.password = __SLAG__PROPERTY;
};
HTTPClient.prototype.setRequestHeader = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
HTTPClient.prototype.setTimeout = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.timeout = __SLAG__PROPERTY;
};
HTTPClient.prototype.setTlsVersion = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tlsVersion = __SLAG__PROPERTY;
};
HTTPClient.prototype.setUsername = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.username = __SLAG__PROPERTY;
};
HTTPClient.prototype.setValidatesSecureCertificate = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.validatesSecureCertificate = __SLAG__PROPERTY;
};
HTTPClient.prototype.setWithCredentials = function (__SLAG__PROPERTY) {
	if ([
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.withCredentials = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new HTTPClient(properties);
};