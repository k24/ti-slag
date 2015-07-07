function ResultSet(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Database.ResultSet';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.fieldCount = properties.fieldCount || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.rowCount = properties.rowCount || undefined;
	this.validRow = properties.validRow || undefined;
	return this;
}
ResultSet.prototype.addEventListener = function () {
};
ResultSet.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ResultSet.prototype.close = function () {
};
ResultSet.prototype.field = function () {
	return '';
};
ResultSet.prototype.fieldByName = function () {
	return '';
};
ResultSet.prototype.fieldCount = function () {
	throw new Error('Ti.Database.ResultSet.fieldCount was deprecated, since 3.3.0');
};
ResultSet.prototype.fieldName = function () {
	return '';
};
ResultSet.prototype.fireEvent = function () {
};
ResultSet.prototype.getApiName = function () {
	return '';
};
ResultSet.prototype.getBubbleParent = function () {
	return true;
};
ResultSet.prototype.getFieldCount = function () {
	return 0;
};
ResultSet.prototype.getFieldName = function () {
	return '';
};
ResultSet.prototype.getLifecycleContainer = function () {
	return {};
};
ResultSet.prototype.getRowCount = function () {
	return 0;
};
ResultSet.prototype.getValidRow = function () {
	return true;
};
ResultSet.prototype.isValidRow = function () {
	return true;
};
ResultSet.prototype.next = function () {
	return true;
};
ResultSet.prototype.removeEventListener = function () {
};
ResultSet.prototype.setBubbleParent = function () {
};
ResultSet.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new ResultSet(properties);
};