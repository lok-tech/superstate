import SuperState from './src/SuperState';
import State from './src/State';
import ObserversManager from './src/ObserversManager';

const SuperStateInstance = new SuperState(new State(), new ObserversManager());

export default SuperStateInstance;

export { default as ObserverAdapter } from './src/ObserverAdapter';
