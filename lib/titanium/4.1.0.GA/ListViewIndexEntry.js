function ListViewIndexEntry(properties) {
	properties = properties || {};
	this.title = properties.title || '';
	this.index = properties.index || 0;
	return this;
}
module.exports = function (properties) {
	return new ListViewIndexEntry(properties);
};