function Event(properties) {
	properties = properties || {};
	this.alerts = properties.alerts || undefined;
	this.allDay = properties.allDay || undefined;
	this.apiName = 'Ti.Android.Calendar.Event';
	this.begin = properties.begin || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.description = properties.description || undefined;
	this.end = properties.end || undefined;
	this.extendedProperties = properties.extendedProperties || undefined;
	this.hasAlarm = properties.hasAlarm || undefined;
	this.hasExtendedProperties = properties.hasExtendedProperties || undefined;
	this.id = properties.id || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.location = properties.location || undefined;
	this.reminders = properties.reminders || undefined;
	this.status = properties.status || undefined;
	this.title = properties.title || undefined;
	this.visibility = properties.visibility || undefined;
	return this;
}
Event.prototype.addEventListener = function () {
};
Event.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Event.prototype.createAlert = function (params) {
	var Alert = require('./Event/Alert');
	return Alert(params);
};
Event.prototype.createReminder = function (params) {
	var Reminder = require('./Event/Reminder');
	return Reminder(params);
};
Event.prototype.fireEvent = function () {
};
Event.prototype.getAlerts = function () {
	return [];
};
Event.prototype.getAllDay = function () {
	return true;
};
Event.prototype.getApiName = function () {
	return '';
};
Event.prototype.getBegin = function () {
	return new Date();
};
Event.prototype.getBubbleParent = function () {
	return true;
};
Event.prototype.getDescription = function () {
	return '';
};
Event.prototype.getEnd = function () {
	return new Date();
};
Event.prototype.getExtendedProperties = function () {
	return {};
};
Event.prototype.getExtendedProperty = function () {
	return '';
};
Event.prototype.getHasAlarm = function () {
	return true;
};
Event.prototype.getHasExtendedProperties = function () {
	return true;
};
Event.prototype.getId = function () {
	return '';
};
Event.prototype.getLifecycleContainer = function () {
	return {};
};
Event.prototype.getLocation = function () {
	return '';
};
Event.prototype.getReminders = function () {
	return [];
};
Event.prototype.getStatus = function () {
	return 0;
};
Event.prototype.getTitle = function () {
	return '';
};
Event.prototype.getVisibility = function () {
	return 0;
};
Event.prototype.removeEventListener = function () {
};
Event.prototype.setBubbleParent = function () {
};
Event.prototype.setExtendedProperty = function () {
};
Event.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Event(properties);
};