class State {
	constructor() {
		this.data = {};
	}

	set(data) {
		this.data = data;
	}

	get(key, defaultValue) {
		if (typeof key === 'string') {
			return this.data[key] ?? defaultValue;
		}

		if (typeof key === 'object') {
			return Object.keys(key).reduce((accumulator, currentKey) => {
				accumulator[currentKey] = this.data[currentKey] ?? key[currentKey];
				return accumulator;
			}, {});
		}

		return this.data;
	}
}

export default State;