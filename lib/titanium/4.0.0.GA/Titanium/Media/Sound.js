function Sound(properties) {
	properties = properties || {};
	this.STATE_BUFFERING = properties.STATE_BUFFERING || undefined;
	this.STATE_INITIALIZED = properties.STATE_INITIALIZED || undefined;
	this.STATE_PAUSED = properties.STATE_PAUSED || undefined;
	this.STATE_PLAYING = properties.STATE_PLAYING || undefined;
	this.STATE_STARTING = properties.STATE_STARTING || undefined;
	this.STATE_STOPPED = properties.STATE_STOPPED || undefined;
	this.STATE_STOPPING = properties.STATE_STOPPING || undefined;
	this.STATE_WAITING_FOR_DATA = properties.STATE_WAITING_FOR_DATA || undefined;
	this.STATE_WAITING_FOR_QUEUE = properties.STATE_WAITING_FOR_QUEUE || undefined;
	this.allowBackground = properties.allowBackground || undefined;
	this.apiName = 'Ti.Media.Sound';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.duration = properties.duration || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.looping = properties.looping || undefined;
	this.paused = properties.paused || undefined;
	this.playing = properties.playing || undefined;
	this.time = properties.time || undefined;
	this.url = properties.url || undefined;
	this.volume = properties.volume || undefined;
	return this;
}
Sound.prototype.addEventListener = function () {
};
Sound.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Sound.prototype.fireEvent = function () {
};
Sound.prototype.getApiName = function () {
	return '';
};
Sound.prototype.getBubbleParent = function () {
	return true;
};
Sound.prototype.getDuration = function () {
	return 0;
};
Sound.prototype.getLifecycleContainer = function () {
	return {};
};
Sound.prototype.getTime = function () {
	return 0;
};
Sound.prototype.getUrl = function () {
	return '';
};
Sound.prototype.getVolume = function () {
	return 0;
};
Sound.prototype.isLooping = function () {
	return true;
};
Sound.prototype.isPaused = function () {
	return true;
};
Sound.prototype.isPlaying = function () {
	return true;
};
Sound.prototype.pause = function () {
};
Sound.prototype.play = function () {
};
Sound.prototype.release = function () {
};
Sound.prototype.removeEventListener = function () {
};
Sound.prototype.reset = function () {
};
Sound.prototype.setBubbleParent = function () {
};
Sound.prototype.setLifecycleContainer = function () {
};
Sound.prototype.setLooping = function () {
};
Sound.prototype.setPaused = function () {
};
Sound.prototype.setTime = function () {
};
Sound.prototype.setUrl = function () {
};
Sound.prototype.setVolume = function () {
};
Sound.prototype.stop = function () {
};
module.exports = function (properties) {
	return new Sound(properties);
};