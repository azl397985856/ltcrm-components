import React, { PropTypes, Component } from 'react';
import tutorial from 'react-guest-tutorial';
import '../../style/Wizard/index.css';

let Wizard = {
	Mixin: tutorial.Mixin
};
const wiz =  tutorial.Mixin();
Wizard.Mixin.goToStep = function(x) {
	this.setState({
		currentIndex: new Number(x)
	});
}
Wizard.Mixin.exit = function(x) {
	this.setState({
		currentIndex: -1
	});
}

Wizard.propTypes = {
}

export default Wizard;
module.exports = exports['default'];
