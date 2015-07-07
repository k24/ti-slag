function Gesture(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Gesture';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.landscape = properties.landscape || undefined;
	this.orientation = properties.orientation || undefined;
	this.portrait = properties.portrait || undefined;
	return this;
}
Gesture.prototype.addEventListener = function () {
};
Gesture.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Gesture.prototype.fireEvent = function () {
};
Gesture.prototype.getApiName = function () {
	return '';
};
Gesture.prototype.getBubbleParent = function () {
	return true;
};
Gesture.prototype.getLandscape = function () {
	return true;
};
Gesture.prototype.getOrientation = function () {
	return 0;
};
Gesture.prototype.getPortrait = function () {
	return true;
};
Gesture.prototype.isFaceDown = function () {
	return true;
};
Gesture.prototype.isFaceUp = function () {
	return true;
};
Gesture.prototype.isLandscape = function () {
	return true;
};
Gesture.prototype.isPortrait = function () {
	return true;
};
Gesture.prototype.removeEventListener = function () {
};
Gesture.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Gesture(properties);
};