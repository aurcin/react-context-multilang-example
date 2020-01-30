import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LanguageContext from '../../../context/language/LanguageContext';

const Text = props => {
	const languageContext = useContext(LanguageContext);
	return getProp(languageContext.dictionary, props.tid.split('.'));
};

const getProp = (object, path) => {
	if (path.length === 1) return object[path[0]];
	else if (path.length === 0) return;
	else {
		if (object[path[0]]) return getProp(object[path[0]], path.slice(1));
		else {
			object[path[0]] = {};
			return getProp(object[path[0]], path.slice(1));
		}
	}
};

Text.propTypes = {
	tid: PropTypes.string.isRequired,
};

export default Text;
