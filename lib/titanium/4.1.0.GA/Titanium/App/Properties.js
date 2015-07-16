function Properties(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.App.Properties';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Properties.prototype.addEventListener = function () {
};
Properties.prototype.removeEventListener = function () {
};
Properties.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Properties.prototype.fireEvent = function () {
};
Properties.prototype.getBool = function () {
	return true;
};
Properties.prototype.getDouble = function () {
	return 0;
};
Properties.prototype.getInt = function () {
	return 0;
};
Properties.prototype.getList = function () {
	return [];
};
Properties.prototype.getObject = function () {
	return {};
};
Properties.prototype.getString = function () {
	return '';
};
Properties.prototype.hasProperty = function () {
	return true;
};
Properties.prototype.listProperties = function () {
	return [];
};
Properties.prototype.removeProperty = function () {
};
Properties.prototype.setBool = function () {
};
Properties.prototype.setDouble = function () {
};
Properties.prototype.setInt = function () {
};
Properties.prototype.setList = function () {
};
Properties.prototype.setObject = function () {
};
Properties.prototype.setString = function () {
};
Properties.prototype.getBubbleParent = function () {
	return true;
};
Properties.prototype.setBubbleParent = function () {
};
Properties.prototype.getApiName = function () {
	return '';
};
Properties.prototype.getLifecycleContainer = function () {
	return {};
};
Properties.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Properties(properties);
};