import State from "./State";
import ObserversManager from "./ObserversManager";

class SuperState {
	constructor(state, observersManager) {
		if (!(state instanceof State)) {
			throw new Error('Can not initiate SuperState');
		}

		if (!(observersManager instanceof ObserversManager)) {
			throw new Error('Can not initiate SuperState');
		}

		this.state = state;
		this.observersManager = observersManager;
	}

	get(key, defaultValue) {
		return this.state.get(key, defaultValue);
	}

	update(update, notifySkipObserver) {
		this.state.set({
			...this.state.get(),
			...update
		});

		this.observersManager.notify(update, notifySkipObserver);
	}

	attach(observer) {
		this.observersManager.attach(observer);
	}

	detach(observerToDetach) {
		this.observersManager.detach(observerToDetach);
	}
}

export default SuperState;