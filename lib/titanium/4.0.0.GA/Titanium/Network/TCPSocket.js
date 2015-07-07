function TCPSocket(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Network.TCPSocket';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.hostName = properties.hostName || undefined;
	this.isValid = properties.isValid || undefined;
	this.mode = properties.mode || undefined;
	this.port = properties.port || undefined;
	this.stripTerminator = properties.stripTerminator || undefined;
	return this;
}
TCPSocket.prototype.addEventListener = function () {
};
TCPSocket.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TCPSocket.prototype.close = function () {
};
TCPSocket.prototype.connect = function () {
};
TCPSocket.prototype.fireEvent = function () {
};
TCPSocket.prototype.getApiName = function () {
	return '';
};
TCPSocket.prototype.getBubbleParent = function () {
	return true;
};
TCPSocket.prototype.getHostName = function () {
	return '';
};
TCPSocket.prototype.getIsValid = function () {
	return true;
};
TCPSocket.prototype.getMode = function () {
	return 0;
};
TCPSocket.prototype.getPort = function () {
	return 0;
};
TCPSocket.prototype.getStripTerminator = function () {
	return true;
};
TCPSocket.prototype.listen = function () {
};
TCPSocket.prototype.removeEventListener = function () {
};
TCPSocket.prototype.setBubbleParent = function () {
};
TCPSocket.prototype.setHostName = function () {
};
TCPSocket.prototype.setIsValid = function () {
};
TCPSocket.prototype.setMode = function () {
};
TCPSocket.prototype.setPort = function () {
};
TCPSocket.prototype.setStripTerminator = function () {
};
TCPSocket.prototype.write = function () {
};
module.exports = function (properties) {
	return new TCPSocket(properties);
};