function ThreeDMatrix(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.3DMatrix';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.m11 = properties.m11 || undefined;
	this.m12 = properties.m12 || undefined;
	this.m13 = properties.m13 || undefined;
	this.m14 = properties.m14 || undefined;
	this.m21 = properties.m21 || undefined;
	this.m22 = properties.m22 || undefined;
	this.m23 = properties.m23 || undefined;
	this.m24 = properties.m24 || undefined;
	this.m31 = properties.m31 || undefined;
	this.m32 = properties.m32 || undefined;
	this.m33 = properties.m33 || undefined;
	this.m34 = properties.m34 || undefined;
	this.m41 = properties.m41 || undefined;
	this.m42 = properties.m42 || undefined;
	this.m43 = properties.m43 || undefined;
	this.m44 = properties.m44 || undefined;
	return this;
}
ThreeDMatrix.prototype.addEventListener = function () {
};
ThreeDMatrix.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ThreeDMatrix.prototype.fireEvent = function () {
};
ThreeDMatrix.prototype.getApiName = function () {
	return '';
};
ThreeDMatrix.prototype.getBubbleParent = function () {
	return true;
};
ThreeDMatrix.prototype.getM11 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM12 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM13 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM14 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM21 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM22 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM23 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM24 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM31 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM32 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM33 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM34 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM41 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM42 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM43 = function () {
	return 0;
};
ThreeDMatrix.prototype.getM44 = function () {
	return 0;
};
ThreeDMatrix.prototype.invert = function () {
	return {};
};
ThreeDMatrix.prototype.multiply = function () {
	return {};
};
ThreeDMatrix.prototype.removeEventListener = function () {
};
ThreeDMatrix.prototype.rotate = function () {
	return {};
};
ThreeDMatrix.prototype.scale = function () {
	return {};
};
ThreeDMatrix.prototype.setBubbleParent = function () {
};
ThreeDMatrix.prototype.setM11 = function () {
};
ThreeDMatrix.prototype.setM12 = function () {
};
ThreeDMatrix.prototype.setM13 = function () {
};
ThreeDMatrix.prototype.setM14 = function () {
};
ThreeDMatrix.prototype.setM21 = function () {
};
ThreeDMatrix.prototype.setM22 = function () {
};
ThreeDMatrix.prototype.setM23 = function () {
};
ThreeDMatrix.prototype.setM24 = function () {
};
ThreeDMatrix.prototype.setM31 = function () {
};
ThreeDMatrix.prototype.setM32 = function () {
};
ThreeDMatrix.prototype.setM33 = function () {
};
ThreeDMatrix.prototype.setM34 = function () {
};
ThreeDMatrix.prototype.setM41 = function () {
};
ThreeDMatrix.prototype.setM42 = function () {
};
ThreeDMatrix.prototype.setM43 = function () {
};
ThreeDMatrix.prototype.setM44 = function () {
};
ThreeDMatrix.prototype.translate = function () {
	return {};
};
module.exports = function (properties) {
	return new ThreeDMatrix(properties);
};