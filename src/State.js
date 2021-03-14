class State {
	constructor() {
		this.data = {};
	}

	set(data) {
		this.data = data;
	}

	get(key, defaultValue) {
		if (typeof key === 'string') {
			if (typeof this.data[key] === 'undefined') {
				return defaultValue;
			}
			return this.data[key];
		}

		if (typeof key === 'object') {
			return Object.keys(key).reduce((accumulator, currentKey) => {
				accumulator[currentKey] = (typeof this.data[currentKey] !== 'undefined') ? this.data[currentKey] : key[currentKey];
				return accumulator;
			}, {});
		}

		return this.data;
	}
}

export default State;