function Buffer(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Buffer';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.byteOrder = properties.byteOrder || undefined;
	this.length = properties.length || undefined;
	this.type = properties.type || undefined;
	this.value = properties.value || undefined;
	return this;
}
Buffer.prototype.addEventListener = function () {
};
Buffer.prototype.append = function () {
	return 0;
};
Buffer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Buffer.prototype.clear = function () {
};
Buffer.prototype.clone = function () {
	return {};
};
Buffer.prototype.copy = function () {
	return 0;
};
Buffer.prototype.fill = function () {
};
Buffer.prototype.fireEvent = function () {
};
Buffer.prototype.getApiName = function () {
	return '';
};
Buffer.prototype.getBubbleParent = function () {
	return true;
};
Buffer.prototype.getByteOrder = function () {
	return 0;
};
Buffer.prototype.getLength = function () {
	return 0;
};
Buffer.prototype.getType = function () {
	return '';
};
Buffer.prototype.getValue = function () {
	return 0;
};
Buffer.prototype.insert = function () {
	return 0;
};
Buffer.prototype.release = function () {
};
Buffer.prototype.removeEventListener = function () {
};
Buffer.prototype.setBubbleParent = function () {
};
Buffer.prototype.setLength = function () {
};
Buffer.prototype.toBlob = function () {
	return {};
};
Buffer.prototype.toString = function () {
	return '';
};
module.exports = function (properties) {
	return new Buffer(properties);
};