function Likes(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Likes';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Likes.prototype.create = function () {
};
Likes.prototype.remove = function () {
};
Likes.prototype.getBubbleParent = function () {
	return true;
};
Likes.prototype.setBubbleParent = function () {
};
Likes.prototype.getApiName = function () {
	return '';
};
Likes.prototype.getLifecycleContainer = function () {
	return {};
};
Likes.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Likes(properties);
};