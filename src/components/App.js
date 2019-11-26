import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Box, Grommet } from "grommet";
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'

import VisibleTodoList from '../containers/VisibleTodoList';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

const App = () => (

  <Provider store={store}>
  <Grommet>
    <Box direction="row" fill>
      <Box flex>
        <h1>Demo Grommet box with redux store management</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Box>
    </Box>
  </Grommet>
  </Provider>
)

export default App
