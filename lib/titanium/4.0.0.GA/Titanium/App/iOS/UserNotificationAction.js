function UserNotificationAction(properties) {
	properties = properties || {};
	this.activationMode = properties.activationMode || undefined;
	this.apiName = 'Ti.App.iOS.UserNotificationAction';
	this.authenticationRequired = properties.authenticationRequired || undefined;
	this.destructive = properties.destructive || undefined;
	this.identifier = properties.identifier || undefined;
	this.title = properties.title || undefined;
	return this;
}
UserNotificationAction.prototype.getActivationMode = function () {
	return 0;
};
UserNotificationAction.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new UserNotificationAction(properties);
};