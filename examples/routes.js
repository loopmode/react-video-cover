import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import NoMatch from './NoMatch';
import MinimalExample from './MinimalExample';
import ResizableExample from './ResizableCoverExample';
import BackgroundExample from './BackgroundCoverExample';
import Home from './Home';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="resizable" component={ResizableExample} />
      <Route path="background" component={BackgroundExample} />
      <Route path="minimal" component={MinimalExample} />
    </Route>
    <Route path="*" status={404} component={NoMatch} />
  </Route>
);
