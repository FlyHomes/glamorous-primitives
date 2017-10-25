import reactPrimitives from 'react-brimitives';
import viewStylePropTypes from 'react-brimitives/lib/web/View/ViewStylePropTypes';
import textStylePropTypes from 'react-brimitives/lib/web/Text/TextStylePropTypes';
import imageStylePropTypes from 'react-brimitives/lib/web/Image/ImageStylePropTypes';

// Get all the supported props for the primitive interface
const viewStyleProps = Object.keys(viewStylePropTypes);
const textStyleProps = Object.keys(textStylePropTypes);
const imageStyleProps = Object.keys(imageStylePropTypes);

const { View, Text, Image, Touchable, Animated } = reactPrimitives;

const imageStyleComponents = [Animated.Image, Image];

const textStyleComponents = [Animated.Text, Text];

const viewStyleComponents = [Animated.View, View, Touchable];

export default function isPrimitiveProp(element, propName) {
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
