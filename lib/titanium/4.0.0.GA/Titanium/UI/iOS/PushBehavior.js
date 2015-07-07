function PushBehavior(properties) {
	properties = properties || {};
	this.active = properties.active || undefined;
	this.angle = properties.angle || undefined;
	this.apiName = 'Ti.UI.iOS.PushBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.items = properties.items || undefined;
	this.magnitude = properties.magnitude || undefined;
	this.pushDirection = properties.pushDirection || undefined;
	this.pushMode = properties.pushMode || undefined;
	return this;
}
PushBehavior.prototype.addEventListener = function () {
};
PushBehavior.prototype.addItem = function () {
};
PushBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PushBehavior.prototype.fireEvent = function () {
};
PushBehavior.prototype.getActive = function () {
	return true;
};
PushBehavior.prototype.getAngle = function () {
	return 0;
};
PushBehavior.prototype.getApiName = function () {
	return '';
};
PushBehavior.prototype.getBubbleParent = function () {
	return true;
};
PushBehavior.prototype.getItems = function () {
	return [];
};
PushBehavior.prototype.getMagnitude = function () {
	return 0;
};
PushBehavior.prototype.getPushDirection = function () {
	return {
		x: 0,
		y: 0
	};
};
PushBehavior.prototype.getPushMode = function () {
	return 0;
};
PushBehavior.prototype.removeEventListener = function () {
};
PushBehavior.prototype.removeItem = function () {
};
PushBehavior.prototype.setActive = function () {
};
PushBehavior.prototype.setAngle = function () {
};
PushBehavior.prototype.setBubbleParent = function () {
};
PushBehavior.prototype.setMagnitude = function () {
};
PushBehavior.prototype.setPushDirection = function () {
};
PushBehavior.prototype.setPushMode = function () {
};
module.exports = function (properties) {
	return new PushBehavior(properties);
};