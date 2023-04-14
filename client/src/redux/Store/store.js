import { legacy_createStore as createStore, applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducers/reducer';
import thunk from 'redux-thunk';

export const store = (createStore(rootReducer,(applyMiddleware(thunk))))