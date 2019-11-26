import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CountDisplay from '../components/counterApp/CountDisplayPanel'
import CountDisplay2 from '../components/counterApp/CountDisplayPanel2'
import CountActionPanel from '../components/counterApp/CountActionPanel';
import rootReducer from '../reducers/counterRootReducer';
import { fontWeight } from '@material-ui/system';

const store = createStore(rootReducer);
window.store = store;


const CountApp = () => (

  <Provider store={store}>
        <article style={{"width":"800px","textAlign":"left","fontWeight":"600"}}>
            In this application show use Data and State Management with REACT-REDUX to create a store which will be shared by all components.
            In below section Third components generate the data and its share to First and second components.
        </article>
        <h4>First Component </h4>
         <CountDisplay2 />
         <hr/>
         <h4>Second Component</h4>
         <CountDisplay />
         <hr/>
         <h4>Third Component</h4>
         <CountActionPanel />
  </Provider>

)

export default CountApp
