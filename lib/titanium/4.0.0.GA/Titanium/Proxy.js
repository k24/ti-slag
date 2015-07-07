function Proxy(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Proxy';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Proxy.prototype.addEventListener = function () {
};
Proxy.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Proxy.prototype.fireEvent = function () {
};
Proxy.prototype.getApiName = function () {
	return '';
};
Proxy.prototype.getBubbleParent = function () {
	return true;
};
Proxy.prototype.getLifecycleContainer = function () {
	return {};
};
Proxy.prototype.removeEventListener = function () {
};
Proxy.prototype.setBubbleParent = function () {
};
Proxy.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Proxy(properties);
};