// Import libraries
import { createStore } from 'redux';
// Import reducers
import rootReducer from '../reducers';

// Create store
const storeFn = () => {
  return { ...createStore(rootReducer) }
};
export default storeFn;