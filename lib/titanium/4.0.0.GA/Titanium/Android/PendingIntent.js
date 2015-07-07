function PendingIntent(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Android.PendingIntent';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.flags = properties.flags || undefined;
	this.intent = properties.intent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.updateCurrentIntent = properties.updateCurrentIntent || undefined;
	return this;
}
PendingIntent.prototype.addEventListener = function () {
};
PendingIntent.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PendingIntent.prototype.fireEvent = function () {
};
PendingIntent.prototype.getApiName = function () {
	return '';
};
PendingIntent.prototype.getBubbleParent = function () {
	return true;
};
PendingIntent.prototype.getFlags = function () {
	return 0;
};
PendingIntent.prototype.getIntent = function () {
	return {};
};
PendingIntent.prototype.getLifecycleContainer = function () {
	return {};
};
PendingIntent.prototype.getUpdateCurrentIntent = function () {
	return true;
};
PendingIntent.prototype.removeEventListener = function () {
};
PendingIntent.prototype.setBubbleParent = function () {
};
PendingIntent.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new PendingIntent(properties);
};