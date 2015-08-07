var crypto = require('crypto');
function CoreMotionActivityQueryDataWithSuccess(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'activities',
			'success',
			'error',
			'code',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.activities) {
		throw new Error('CoreMotionActivityQueryDataWithSuccess.activities is read only property');
	}
	this.activities = [];
	if (__SLAG_PROPERTIES.success) {
		throw new Error('CoreMotionActivityQueryDataWithSuccess.success is read only property');
	}
	this.success = true;
	if (__SLAG_PROPERTIES.error) {
		throw new Error('CoreMotionActivityQueryDataWithSuccess.error is read only property');
	}
	this.error = '';
	if (__SLAG_PROPERTIES.code) {
		throw new Error('CoreMotionActivityQueryDataWithSuccess.code is read only property');
	}
	this.code = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionActivityQueryDataWithSuccess(properties);
};