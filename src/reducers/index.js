// import {combineReducers} from 'react-redux';
// import postReducer from './postReducer';

// export default combineReducers({
//     posts : postReducer
// });

import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
});