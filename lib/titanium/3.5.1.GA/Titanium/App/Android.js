function Android(properties) {
	properties = properties || {};
	this.R = properties.R || undefined;
	this.apiName = 'Ti.App.Android';
	this.appVersionCode = properties.appVersionCode || undefined;
	this.appVersionName = properties.appVersionName || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.launchIntent = properties.launchIntent || undefined;
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Android.prototype.fireEvent = function () {
};
Android.prototype.getApiName = function () {
	return '';
};
Android.prototype.getAppVersionCode = function () {
	return 0;
};
Android.prototype.getAppVersionName = function () {
	return '';
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.getLaunchIntent = function () {
	return {};
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};