function AudioRecorder(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Media.AudioRecorder';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.compression = properties.compression || undefined;
	this.format = properties.format || undefined;
	this.paused = properties.paused || undefined;
	this.recording = properties.recording || undefined;
	this.stopped = properties.stopped || undefined;
	return this;
}
AudioRecorder.prototype.addEventListener = function () {
};
AudioRecorder.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AudioRecorder.prototype.fireEvent = function () {
};
AudioRecorder.prototype.getApiName = function () {
	return '';
};
AudioRecorder.prototype.getBubbleParent = function () {
	return true;
};
AudioRecorder.prototype.getCompression = function () {
	return 0;
};
AudioRecorder.prototype.getFormat = function () {
	return 0;
};
AudioRecorder.prototype.getPaused = function () {
	return true;
};
AudioRecorder.prototype.getRecording = function () {
	return true;
};
AudioRecorder.prototype.getStopped = function () {
	return true;
};
AudioRecorder.prototype.pause = function () {
};
AudioRecorder.prototype.removeEventListener = function () {
};
AudioRecorder.prototype.resume = function () {
};
AudioRecorder.prototype.setBubbleParent = function () {
};
AudioRecorder.prototype.setCompression = function () {
};
AudioRecorder.prototype.setFormat = function () {
};
AudioRecorder.prototype.start = function () {
};
AudioRecorder.prototype.stop = function () {
	return {};
};
module.exports = function (properties) {
	return new AudioRecorder(properties);
};