'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isPrimitiveProp;

var _reactBrimitives = require('react-brimitives');

var _reactBrimitives2 = _interopRequireDefault(_reactBrimitives);

var _ViewStylePropTypes = require('react-brimitives/lib/web/View/ViewStylePropTypes');

var _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);

var _TextStylePropTypes = require('react-brimitives/lib/web/Text/TextStylePropTypes');

var _TextStylePropTypes2 = _interopRequireDefault(_TextStylePropTypes);

var _ImageStylePropTypes = require('react-brimitives/lib/web/Image/ImageStylePropTypes');

var _ImageStylePropTypes2 = _interopRequireDefault(_ImageStylePropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get all the supported props for the primitive interface
var viewStyleProps = Object.keys(_ViewStylePropTypes2.default);
var textStyleProps = Object.keys(_TextStylePropTypes2.default);
var imageStyleProps = Object.keys(_ImageStylePropTypes2.default);

var View = _reactBrimitives2.default.View,
    Text = _reactBrimitives2.default.Text,
    Image = _reactBrimitives2.default.Image,
    Touchable = _reactBrimitives2.default.Touchable,
    Animated = _reactBrimitives2.default.Animated;


var imageStyleComponents = [Animated.Image, Image];

var textStyleComponents = [Animated.Text, Text];

var viewStyleComponents = [Animated.View, View, Touchable];

function isPrimitiveProp(element, propName) {
	if (textStyleComponents.indexOf(element) > -1) {
		return textStyleProps.indexOf(propName) > -1;
	}

	if (viewStyleComponents.indexOf(element) > -1) {
		return viewStyleProps.indexOf(propName) > -1;
	}

	if (imageStyleComponents.indexOf(element) > -1) {
		return imageStyleProps.indexOf(propName) > -1;
	}

	return false;
}