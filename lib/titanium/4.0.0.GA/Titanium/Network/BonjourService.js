function BonjourService(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Network.BonjourService';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.domain = properties.domain || undefined;
	this.isLocal = properties.isLocal || undefined;
	this.name = properties.name || undefined;
	this.socket = properties.socket || undefined;
	this.type = properties.type || undefined;
	return this;
}
BonjourService.prototype.addEventListener = function () {
};
BonjourService.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BonjourService.prototype.fireEvent = function () {
};
BonjourService.prototype.getApiName = function () {
	return '';
};
BonjourService.prototype.getBubbleParent = function () {
	return true;
};
BonjourService.prototype.getDomain = function () {
	return '';
};
BonjourService.prototype.getIsLocal = function () {
	return true;
};
BonjourService.prototype.getName = function () {
	return '';
};
BonjourService.prototype.getSocket = function () {
	return {};
};
BonjourService.prototype.getType = function () {
	return '';
};
BonjourService.prototype.publish = function () {
};
BonjourService.prototype.removeEventListener = function () {
};
BonjourService.prototype.resolve = function () {
};
BonjourService.prototype.setBubbleParent = function () {
};
BonjourService.prototype.setDomain = function () {
};
BonjourService.prototype.setIsLocal = function () {
};
BonjourService.prototype.setName = function () {
};
BonjourService.prototype.setSocket = function () {
};
BonjourService.prototype.setType = function () {
};
BonjourService.prototype.stop = function () {
};
module.exports = function (properties) {
	return new BonjourService(properties);
};