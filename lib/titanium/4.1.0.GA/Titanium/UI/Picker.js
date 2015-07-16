function Picker(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Picker';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.columns = properties.columns || [];
	this.countDownDuration = properties.countDownDuration || 0;
	this.format24 = properties.format24 || true;
	this.locale = properties.locale || '';
	this.maxDate = properties.maxDate || new Date();
	this.minDate = properties.minDate || new Date();
	this.minuteInterval = properties.minuteInterval || 0;
	this.selectionIndicator = properties.selectionIndicator || true;
	this.type = properties.type || 0;
	this.useSpinner = properties.useSpinner || true;
	this.value = properties.value || new Date();
	this.visibleItems = properties.visibleItems || 0;
	this.calendarViewShown = properties.calendarViewShown || true;
	this.font = properties.font || {};
	return this;
}
Picker.prototype.addEventListener = function () {
};
Picker.prototype.removeEventListener = function () {
};
Picker.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Picker.prototype.fireEvent = function () {
};
Picker.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Picker.finishLayout was deprecated, since 3.0.0');
};
Picker.prototype.startLayout = function () {
	throw new Error('Ti.UI.Picker.startLayout was deprecated, since 3.0.0');
};
Picker.prototype.toImage = function () {
	return {};
};
Picker.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Picker.updateLayout was deprecated, since 3.0.0');
};
Picker.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Picker.prototype.add = function () {
};
Picker.prototype.animate = function () {
};
Picker.prototype.hide = function () {
};
Picker.prototype.show = function () {
};
Picker.prototype.getSelectedRow = function () {
	return {};
};
Picker.prototype.reloadColumn = function () {
};
Picker.prototype.setSelectedRow = function () {
};
Picker.prototype.setValue = function () {
	return {};
};
Picker.prototype.showDatePickerDialog = function () {
};
Picker.prototype.showTimePickerDialog = function () {
};
Picker.prototype.getBubbleParent = function () {
	return true;
};
Picker.prototype.setBubbleParent = function () {
};
Picker.prototype.getApiName = function () {
	return '';
};
Picker.prototype.getLifecycleContainer = function () {
	return {};
};
Picker.prototype.setLifecycleContainer = function () {
};
Picker.prototype.getAccessibilityHidden = function () {
	return true;
};
Picker.prototype.setAccessibilityHidden = function () {
};
Picker.prototype.getAccessibilityHint = function () {
	return '';
};
Picker.prototype.setAccessibilityHint = function () {
};
Picker.prototype.getAccessibilityLabel = function () {
	return '';
};
Picker.prototype.setAccessibilityLabel = function () {
};
Picker.prototype.getAccessibilityValue = function () {
	return '';
};
Picker.prototype.setAccessibilityValue = function () {
};
Picker.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Picker.prototype.getClipMode = function () {
	return 0;
};
Picker.prototype.setClipMode = function () {
};
Picker.prototype.getFocusable = function () {
	return true;
};
Picker.prototype.setFocusable = function () {
};
Picker.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Picker.prototype.setOverrideCurrentAnimation = function () {
};
Picker.prototype.getPullBackgroundColor = function () {
	return '';
};
Picker.prototype.setPullBackgroundColor = function () {
};
Picker.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Picker.prototype.setSoftKeyboardOnFocus = function () {
};
Picker.prototype.getTransform = function () {
	return {};
};
Picker.prototype.setTransform = function () {
};
Picker.prototype.getViewShadowRadius = function () {
	return 0;
};
Picker.prototype.setViewShadowRadius = function () {
};
Picker.prototype.getViewShadowColor = function () {
	return '';
};
Picker.prototype.setViewShadowColor = function () {
};
Picker.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Picker.prototype.setViewShadowOffset = function () {
};
Picker.prototype.getHorizontalWrap = function () {
	return true;
};
Picker.prototype.setHorizontalWrap = function () {
};
Picker.prototype.getKeepScreenOn = function () {
	return true;
};
Picker.prototype.setKeepScreenOn = function () {
};
Picker.prototype.getBackgroundColor = function () {
	return '';
};
Picker.prototype.setBackgroundColor = function () {
};
Picker.prototype.getBorderColor = function () {
	return '';
};
Picker.prototype.setBorderColor = function () {
};
Picker.prototype.getBorderRadius = function () {
	return 0;
};
Picker.prototype.setBorderRadius = function () {
};
Picker.prototype.getBorderWidth = function () {
	return 0;
};
Picker.prototype.setBorderWidth = function () {
};
Picker.prototype.getBottom = function () {
	return '';
};
Picker.prototype.setBottom = function () {
};
Picker.prototype.getChildren = function () {
	return [];
};
Picker.prototype.getHeight = function () {
	return '';
};
Picker.prototype.setHeight = function () {
};
Picker.prototype.getLeft = function () {
	return '';
};
Picker.prototype.setLeft = function () {
};
Picker.prototype.getOpacity = function () {
	return 0;
};
Picker.prototype.setOpacity = function () {
};
Picker.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Picker.prototype.getRight = function () {
	return '';
};
Picker.prototype.setRight = function () {
};
Picker.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Picker.prototype.getTop = function () {
	return '';
};
Picker.prototype.setTop = function () {
};
Picker.prototype.getTouchEnabled = function () {
	return true;
};
Picker.prototype.setTouchEnabled = function () {
};
Picker.prototype.getVisible = function () {
	return true;
};
Picker.prototype.setVisible = function () {
};
Picker.prototype.getWidth = function () {
	return '';
};
Picker.prototype.setWidth = function () {
};
Picker.prototype.getColumns = function () {
	return [];
};
Picker.prototype.setColumns = function () {
};
Picker.prototype.getCountDownDuration = function () {
	return 0;
};
Picker.prototype.setCountDownDuration = function () {
};
Picker.prototype.getFormat24 = function () {
	return true;
};
Picker.prototype.setFormat24 = function () {
};
Picker.prototype.getLocale = function () {
	return '';
};
Picker.prototype.setLocale = function () {
};
Picker.prototype.getMaxDate = function () {
	return new Date();
};
Picker.prototype.setMaxDate = function () {
};
Picker.prototype.getMinDate = function () {
	return new Date();
};
Picker.prototype.setMinDate = function () {
};
Picker.prototype.getMinuteInterval = function () {
	return 0;
};
Picker.prototype.setMinuteInterval = function () {
};
Picker.prototype.getSelectionIndicator = function () {
	return true;
};
Picker.prototype.setSelectionIndicator = function () {
};
Picker.prototype.getType = function () {
	return 0;
};
Picker.prototype.setType = function () {
};
Picker.prototype.getUseSpinner = function () {
	return true;
};
Picker.prototype.setUseSpinner = function () {
};
Picker.prototype.getValue = function () {
	return new Date();
};
Picker.prototype.setValue = function () {
};
Picker.prototype.getVisibleItems = function () {
	return 0;
};
Picker.prototype.setVisibleItems = function () {
};
Picker.prototype.getCalendarViewShown = function () {
	return true;
};
Picker.prototype.setCalendarViewShown = function () {
};
Picker.prototype.getFont = function () {
	return {};
};
Picker.prototype.setFont = function () {
};
module.exports = function (properties) {
	return new Picker(properties);
};