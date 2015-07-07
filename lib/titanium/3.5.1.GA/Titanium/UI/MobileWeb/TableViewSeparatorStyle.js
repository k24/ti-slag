function TableViewSeparatorStyle(properties) {
	properties = properties || {};
	this.NONE = properties.NONE || undefined;
	this.SINGLE_LINE = properties.SINGLE_LINE || undefined;
	this.apiName = 'Ti.UI.MobileWeb.TableViewSeparatorStyle';
	return this;
}
TableViewSeparatorStyle.prototype.addEventListener = function () {
};
TableViewSeparatorStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewSeparatorStyle.prototype.fireEvent = function () {
};
TableViewSeparatorStyle.prototype.getApiName = function () {
	return '';
};
TableViewSeparatorStyle.prototype.removeEventListener = function () {
};
module.exports = function (properties) {
	return new TableViewSeparatorStyle(properties);
};