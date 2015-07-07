function Attr(properties) {
	properties = properties || {};
	this.ATTRIBUTE_NODE = properties.ATTRIBUTE_NODE || undefined;
	this.CDATA_SECTION_NODE = properties.CDATA_SECTION_NODE || undefined;
	this.COMMENT_NODE = properties.COMMENT_NODE || undefined;
	this.DOCUMENT_FRAGMENT_NODE = properties.DOCUMENT_FRAGMENT_NODE || undefined;
	this.DOCUMENT_NODE = properties.DOCUMENT_NODE || undefined;
	this.DOCUMENT_TYPE_NODE = properties.DOCUMENT_TYPE_NODE || undefined;
	this.ELEMENT_NODE = properties.ELEMENT_NODE || undefined;
	this.ENTITY_NODE = properties.ENTITY_NODE || undefined;
	this.ENTITY_REFERENCE_NODE = properties.ENTITY_REFERENCE_NODE || undefined;
	this.NOTATION_NODE = properties.NOTATION_NODE || undefined;
	this.PROCESSING_INSTRUCTION_NODE = properties.PROCESSING_INSTRUCTION_NODE || undefined;
	this.TEXT_NODE = properties.TEXT_NODE || undefined;
	this.apiName = 'Ti.XML.Attr';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.localName = properties.localName || undefined;
	this.name = properties.name || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.ownerElement = properties.ownerElement || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.specified = properties.specified || undefined;
	if (properties.text) {
		throw new Error('Ti.XML.Attr.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || undefined;
	this.value = properties.value || undefined;
	return this;
}
Attr.prototype.addEventListener = function () {
};
Attr.prototype.appendChild = function () {
	return {};
};
Attr.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Attr.prototype.cloneNode = function () {
	return {};
};
Attr.prototype.fireEvent = function () {
};
Attr.prototype.getApiName = function () {
	return '';
};
Attr.prototype.getAttributes = function () {
	return {};
};
Attr.prototype.getBubbleParent = function () {
	return true;
};
Attr.prototype.getChildNodes = function () {
	return {};
};
Attr.prototype.getFirstChild = function () {
	return {};
};
Attr.prototype.getLastChild = function () {
	return {};
};
Attr.prototype.getLifecycleContainer = function () {
	return {};
};
Attr.prototype.getLocalName = function () {
	return '';
};
Attr.prototype.getName = function () {
	return '';
};
Attr.prototype.getNamespaceURI = function () {
	return '';
};
Attr.prototype.getNextSibling = function () {
	return {};
};
Attr.prototype.getNodeName = function () {
	return '';
};
Attr.prototype.getNodeType = function () {
	return 0;
};
Attr.prototype.getNodeValue = function () {
	return '';
};
Attr.prototype.getOwnerDocument = function () {
	return {};
};
Attr.prototype.getOwnerElement = function () {
	return {};
};
Attr.prototype.getParentNode = function () {
	return {};
};
Attr.prototype.getPrefix = function () {
	return '';
};
Attr.prototype.getPreviousSibling = function () {
	return {};
};
Attr.prototype.getSpecified = function () {
	return true;
};
Attr.prototype.getText = function () {
	throw new Error('Ti.XML.Attr.getText was deprecated, since 2.0.0');
};
Attr.prototype.getTextContent = function () {
	return '';
};
Attr.prototype.getValue = function () {
	return '';
};
Attr.prototype.hasAttributes = function () {
	return true;
};
Attr.prototype.hasChildNodes = function () {
	return true;
};
Attr.prototype.insertBefore = function () {
	return {};
};
Attr.prototype.isSupported = function () {
	return true;
};
Attr.prototype.normalize = function () {
};
Attr.prototype.removeChild = function () {
	return {};
};
Attr.prototype.removeEventListener = function () {
};
Attr.prototype.replaceChild = function () {
	return {};
};
Attr.prototype.setBubbleParent = function () {
};
Attr.prototype.setLifecycleContainer = function () {
};
Attr.prototype.setLocalName = function () {
};
Attr.prototype.setNodeValue = function () {
};
Attr.prototype.setPrefix = function () {
};
Attr.prototype.setValue = function () {
};
module.exports = function (properties) {
	return new Attr(properties);
};