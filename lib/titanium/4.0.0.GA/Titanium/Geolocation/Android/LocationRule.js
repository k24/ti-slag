function LocationRule(properties) {
	properties = properties || {};
	this.accuracy = properties.accuracy || undefined;
	this.apiName = 'Ti.Geolocation.Android.LocationRule';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.maxAge = properties.maxAge || undefined;
	this.minAge = properties.minAge || undefined;
	this.name = properties.name || undefined;
	return this;
}
LocationRule.prototype.addEventListener = function () {
};
LocationRule.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LocationRule.prototype.fireEvent = function () {
};
LocationRule.prototype.getAccuracy = function () {
	return 0;
};
LocationRule.prototype.getApiName = function () {
	return '';
};
LocationRule.prototype.getBubbleParent = function () {
	return true;
};
LocationRule.prototype.getLifecycleContainer = function () {
	return {};
};
LocationRule.prototype.getMaxAge = function () {
	return 0;
};
LocationRule.prototype.getMinAge = function () {
	return 0;
};
LocationRule.prototype.getName = function () {
	return '';
};
LocationRule.prototype.removeEventListener = function () {
};
LocationRule.prototype.setAccuracy = function () {
};
LocationRule.prototype.setBubbleParent = function () {
};
LocationRule.prototype.setLifecycleContainer = function () {
};
LocationRule.prototype.setMaxAge = function () {
};
LocationRule.prototype.setMinAge = function () {
};
LocationRule.prototype.setName = function () {
};
module.exports = function (properties) {
	return new LocationRule(properties);
};