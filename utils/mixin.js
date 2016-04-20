const mixins = {
	setValue(field, e) {
		let v = e;
		const target = e && e.target;
		if (target) {
			if ((`${target.nodeName}`).toLowerCase() === 'input' &&
		target.type === 'checkbox') {
				v = target.checked;
			} else {
				v = e.target.value;
			}
		}
		this.state[field] = v;
		this.setState({});
	},
};

export default mixins;