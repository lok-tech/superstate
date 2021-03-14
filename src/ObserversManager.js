import ObserverAdapter from "./ObserverAdapter";

class ObserversManager {
	constructor() {
		this.observers = [];
	}

	attach(observer) {
		if (!(observer instanceof ObserverAdapter)) {
			throw new Error('Can not add observer without adapter');
		}

		this.observers.push(observer);
	}

	detach(observerToDetach) {
		this.observers = this.observers.filter((observer) => {
			return observer !== observerToDetach;
		});
	}

	notify(update, skipObserver) {
		this.observers.forEach(observer => {
			if (skipObserver && skipObserver === observer) return;
			for (const key in update) {
				if (!observer.shouldUpdateOnKey(key)) continue;
				observer.update({ [key]: update[key] });
			}
		});
	}
}

export default ObserversManager;