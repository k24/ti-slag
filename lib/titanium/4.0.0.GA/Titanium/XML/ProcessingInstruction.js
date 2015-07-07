function ProcessingInstruction(properties) {
	properties = properties || {};
	this.apiName = 'Ti.XML.ProcessingInstruction';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.data = properties.data || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.target = properties.target || undefined;
	return this;
}
ProcessingInstruction.prototype.addEventListener = function () {
};
ProcessingInstruction.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProcessingInstruction.prototype.fireEvent = function () {
};
ProcessingInstruction.prototype.getApiName = function () {
	return '';
};
ProcessingInstruction.prototype.getBubbleParent = function () {
	return true;
};
ProcessingInstruction.prototype.getData = function () {
	return '';
};
ProcessingInstruction.prototype.getLifecycleContainer = function () {
	return {};
};
ProcessingInstruction.prototype.getTarget = function () {
	return '';
};
ProcessingInstruction.prototype.removeEventListener = function () {
};
ProcessingInstruction.prototype.setBubbleParent = function () {
};
ProcessingInstruction.prototype.setData = function () {
};
ProcessingInstruction.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new ProcessingInstruction(properties);
};