import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { render } from 'react-dom';
import Header from "./Pages/Header";

import * as serviceWorker from './serviceWorker';


const App = lazy(() => import('./components/App'));
const Table = lazy(() => import('./redux_demo'));
const Game = lazy(() => import('./Game'));
const Database = lazy(() => import('./Pages/DetailPanel'));

const CounterApp = lazy(()=> import('./Pages/CounterApp'));

render(


    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/database" component={Database} />
          <Route exact path="/counter" component={CounterApp} />
        </Switch>
      </Suspense>
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();


