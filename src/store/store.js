import { createStore } from 'redux';
import greetingReducer from './reducers';

const store = createStore(greetingReducer);

export default store;
