class ObserverAdapter {
	constructor(initialState, updataCallback) {
		if (typeof initialState !== 'object') {
			throw new Error('Can not initiate ObserverAdapter');
		}

		if (typeof updataCallback !== 'function') {
			throw new Error('Can not initiate ObserverAdapter');
		}

		this.keys = Object.keys(initialState);
		this.updataCallback = updataCallback;
	}

	shouldUpdateOnKey(key) {
		return this.keys.includes(key);
	}

	update(update) {
		this.updataCallback(update);
	}
}

export default ObserverAdapter;