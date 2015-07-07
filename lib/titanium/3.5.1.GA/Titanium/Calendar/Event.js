function Event(properties) {
	properties = properties || {};
	this.alerts = properties.alerts || undefined;
	this.allDay = properties.allDay || undefined;
	this.apiName = 'Ti.Calendar.Event';
	this.availability = properties.availability || undefined;
	this.begin = properties.begin || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.description = properties.description || undefined;
	this.end = properties.end || undefined;
	this.extendedProperties = properties.extendedProperties || undefined;
	this.hasAlarm = properties.hasAlarm || undefined;
	this.id = properties.id || undefined;
	this.isDetached = properties.isDetached || undefined;
	this.location = properties.location || undefined;
	this.notes = properties.notes || undefined;
	if (properties.recurenceRule) {
		throw new Error('Ti.Calendar.Event.recurenceRule was deprecated, since 3.1.3');
	}
	this.recurenceRules = properties.recurenceRules || undefined;
	this.reminders = properties.reminders || undefined;
	this.status = properties.status || undefined;
	this.title = properties.title || undefined;
	this.visibility = properties.visibility || undefined;
	return this;
}
Event.prototype.addEventListener = function () {
};
Event.prototype.addRecurrenceRule = function () {
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
Event.prototype.createRecurenceRule = function (params) {
	var RecurenceRule = require('./Event/RecurenceRule');
	return RecurenceRule(params);
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
Event.prototype.getAvailability = function () {
	return 0;
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
Event.prototype.getId = function () {
	return '';
};
Event.prototype.getIsDetached = function () {
	return true;
};
Event.prototype.getLocation = function () {
	return '';
};
Event.prototype.getNotes = function () {
	return '';
};
Event.prototype.getRecurenceRule = function () {
	throw new Error('Ti.Calendar.Event.getRecurenceRule was deprecated, since 3.1.3');
};
Event.prototype.getRecurenceRules = function () {
	return [];
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
Event.prototype.refresh = function () {
	return true;
};
Event.prototype.remove = function () {
	return true;
};
Event.prototype.removeEventListener = function () {
};
Event.prototype.removeRecurenceRule = function () {
};
Event.prototype.save = function () {
	return true;
};
Event.prototype.setAlerts = function () {
};
Event.prototype.setAllDay = function () {
};
Event.prototype.setBegin = function () {
};
Event.prototype.setBubbleParent = function () {
};
Event.prototype.setEnd = function () {
};
Event.prototype.setExtendedProperty = function () {
};
Event.prototype.setLocation = function () {
};
Event.prototype.setNotes = function () {
};
Event.prototype.setRecurenceRule = function () {
	throw new Error('Ti.Calendar.Event.setRecurenceRule was deprecated, since 3.1.3');
};
Event.prototype.setRecurenceRules = function () {
};
Event.prototype.setTitle = function () {
};
module.exports = function (properties) {
	return new Event(properties);
};