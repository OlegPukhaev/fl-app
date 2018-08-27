import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReduser from './reducers/rootReducer';

export default createStore(rootReduser, applyMiddleware(thunk));