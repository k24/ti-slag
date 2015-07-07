function GravityBehavior(properties) {
	properties = properties || {};
	this.angle = properties.angle || undefined;
	this.apiName = 'Ti.UI.iOS.GravityBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.gravityDirection = properties.gravityDirection || undefined;
	this.items = properties.items || undefined;
	this.magnitude = properties.magnitude || undefined;
	return this;
}
GravityBehavior.prototype.addEventListener = function () {
};
GravityBehavior.prototype.addItem = function () {
};
GravityBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
GravityBehavior.prototype.fireEvent = function () {
};
GravityBehavior.prototype.getAngle = function () {
	return 0;
};
GravityBehavior.prototype.getApiName = function () {
	return '';
};
GravityBehavior.prototype.getBubbleParent = function () {
	return true;
};
GravityBehavior.prototype.getGravityDirection = function () {
	return {
		x: 0,
		y: 0
	};
};
GravityBehavior.prototype.getItems = function () {
	return [];
};
GravityBehavior.prototype.getMagnitude = function () {
	return 0;
};
GravityBehavior.prototype.removeEventListener = function () {
};
GravityBehavior.prototype.removeItem = function () {
};
GravityBehavior.prototype.setAngle = function () {
};
GravityBehavior.prototype.setBubbleParent = function () {
};
GravityBehavior.prototype.setGravityDirection = function () {
};
GravityBehavior.prototype.setMagnitude = function () {
};
module.exports = function (properties) {
	return new GravityBehavior(properties);
};