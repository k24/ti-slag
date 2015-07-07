function CDATASection(properties) {
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
	this.apiName = 'Ti.XML.CDATASection';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.data = properties.data || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.length = properties.length || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.localName = properties.localName || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	if (properties.text) {
		throw new Error('Ti.XML.CDATASection.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || undefined;
	return this;
}
CDATASection.prototype.addEventListener = function () {
};
CDATASection.prototype.appendChild = function () {
	return {};
};
CDATASection.prototype.appendData = function () {
};
CDATASection.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CDATASection.prototype.cloneNode = function () {
	return {};
};
CDATASection.prototype.deleteData = function () {
};
CDATASection.prototype.fireEvent = function () {
};
CDATASection.prototype.getApiName = function () {
	return '';
};
CDATASection.prototype.getAttributes = function () {
	return {};
};
CDATASection.prototype.getBubbleParent = function () {
	return true;
};
CDATASection.prototype.getChildNodes = function () {
	return {};
};
CDATASection.prototype.getData = function () {
	return '';
};
CDATASection.prototype.getFirstChild = function () {
	return {};
};
CDATASection.prototype.getLastChild = function () {
	return {};
};
CDATASection.prototype.getLength = function () {
	return 0;
};
CDATASection.prototype.getLifecycleContainer = function () {
	return {};
};
CDATASection.prototype.getLocalName = function () {
	return '';
};
CDATASection.prototype.getNamespaceURI = function () {
	return '';
};
CDATASection.prototype.getNextSibling = function () {
	return {};
};
CDATASection.prototype.getNodeName = function () {
	return '';
};
CDATASection.prototype.getNodeType = function () {
	return 0;
};
CDATASection.prototype.getNodeValue = function () {
	return '';
};
CDATASection.prototype.getOwnerDocument = function () {
	return {};
};
CDATASection.prototype.getParentNode = function () {
	return {};
};
CDATASection.prototype.getPrefix = function () {
	return '';
};
CDATASection.prototype.getPreviousSibling = function () {
	return {};
};
CDATASection.prototype.getText = function () {
	throw new Error('Ti.XML.CDATASection.getText was deprecated, since 2.0.0');
};
CDATASection.prototype.getTextContent = function () {
	return '';
};
CDATASection.prototype.hasAttributes = function () {
	return true;
};
CDATASection.prototype.hasChildNodes = function () {
	return true;
};
CDATASection.prototype.insertBefore = function () {
	return {};
};
CDATASection.prototype.insertData = function () {
};
CDATASection.prototype.isSupported = function () {
	return true;
};
CDATASection.prototype.normalize = function () {
};
CDATASection.prototype.removeChild = function () {
	return {};
};
CDATASection.prototype.removeEventListener = function () {
};
CDATASection.prototype.replaceChild = function () {
	return {};
};
CDATASection.prototype.replaceData = function () {
};
CDATASection.prototype.setBubbleParent = function () {
};
CDATASection.prototype.setData = function () {
};
CDATASection.prototype.setLifecycleContainer = function () {
};
CDATASection.prototype.setLocalName = function () {
};
CDATASection.prototype.setNodeValue = function () {
};
CDATASection.prototype.setPrefix = function () {
};
CDATASection.prototype.splitText = function () {
	return {};
};
CDATASection.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new CDATASection(properties);
};