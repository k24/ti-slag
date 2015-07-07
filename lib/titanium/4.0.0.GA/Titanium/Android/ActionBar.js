function ActionBar(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Android.ActionBar';
	this.backgroundImage = properties.backgroundImage || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.displayHomeAsUp = properties.displayHomeAsUp || undefined;
	this.homeButtonEnabled = properties.homeButtonEnabled || undefined;
	this.icon = properties.icon || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.logo = properties.logo || undefined;
	this.navigationMode = properties.navigationMode || undefined;
	this.onHomeIconItemSelected = properties.onHomeIconItemSelected || undefined;
	this.subtitle = properties.subtitle || undefined;
	this.title = properties.title || undefined;
	return this;
}
ActionBar.prototype.addEventListener = function () {
};
ActionBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ActionBar.prototype.fireEvent = function () {
};
ActionBar.prototype.getApiName = function () {
	return '';
};
ActionBar.prototype.getBubbleParent = function () {
	return true;
};
ActionBar.prototype.getLifecycleContainer = function () {
	return {};
};
ActionBar.prototype.getNavigationMode = function () {
	return 0;
};
ActionBar.prototype.getSubtitle = function () {
	return '';
};
ActionBar.prototype.getTitle = function () {
	return '';
};
ActionBar.prototype.hide = function () {
};
ActionBar.prototype.removeEventListener = function () {
};
ActionBar.prototype.setBackgroundImage = function () {
};
ActionBar.prototype.setBubbleParent = function () {
};
ActionBar.prototype.setDisplayHomeAsUp = function () {
};
ActionBar.prototype.setDisplayShowHomeEnabled = function () {
};
ActionBar.prototype.setDisplayShowTitleEnabled = function () {
};
ActionBar.prototype.setHomeButtonEnabled = function () {
};
ActionBar.prototype.setIcon = function () {
};
ActionBar.prototype.setLifecycleContainer = function () {
};
ActionBar.prototype.setLogo = function () {
};
ActionBar.prototype.setNavigationMode = function () {
};
ActionBar.prototype.setOnHomeIconItemSelected = function () {
};
ActionBar.prototype.setSubtitle = function () {
};
ActionBar.prototype.setTitle = function () {
};
ActionBar.prototype.show = function () {
};
module.exports = function (properties) {
	return new ActionBar(properties);
};