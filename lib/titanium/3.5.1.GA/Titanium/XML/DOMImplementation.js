function DOMImplementation(properties) {
	properties = properties || {};
	this.apiName = 'Ti.XML.DOMImplementation';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
DOMImplementation.prototype.addEventListener = function () {
};
DOMImplementation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DOMImplementation.prototype.createDocument = function (params) {
	var Document = require('./DOMImplementation/Document');
	return Document(params);
};
DOMImplementation.prototype.createDocumentType = function (params) {
	var DocumentType = require('./DOMImplementation/DocumentType');
	return DocumentType(params);
};
DOMImplementation.prototype.fireEvent = function () {
};
DOMImplementation.prototype.getApiName = function () {
	return '';
};
DOMImplementation.prototype.getBubbleParent = function () {
	return true;
};
DOMImplementation.prototype.hasFeature = function () {
	return true;
};
DOMImplementation.prototype.removeEventListener = function () {
};
DOMImplementation.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new DOMImplementation(properties);
};