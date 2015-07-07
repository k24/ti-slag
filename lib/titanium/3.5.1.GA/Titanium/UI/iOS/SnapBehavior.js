function SnapBehavior(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.iOS.SnapBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.damping = properties.damping || undefined;
	this.item = properties.item || undefined;
	this.snapPoint = properties.snapPoint || undefined;
	return this;
}
SnapBehavior.prototype.addEventListener = function () {
};
SnapBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SnapBehavior.prototype.fireEvent = function () {
};
SnapBehavior.prototype.getApiName = function () {
	return '';
};
SnapBehavior.prototype.getBubbleParent = function () {
	return true;
};
SnapBehavior.prototype.getDamping = function () {
	return 0;
};
SnapBehavior.prototype.getItem = function () {
	return {};
};
SnapBehavior.prototype.getSnapPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
SnapBehavior.prototype.removeEventListener = function () {
};
SnapBehavior.prototype.setBubbleParent = function () {
};
SnapBehavior.prototype.setDamping = function () {
};
SnapBehavior.prototype.setItem = function () {
};
SnapBehavior.prototype.setSnapPoint = function () {
};
module.exports = function (properties) {
	return new SnapBehavior(properties);
};