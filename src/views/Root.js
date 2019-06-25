import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';
import StyleTemplate from 'templates/StyleTemplate';
import CDs from 'views/CDs';
import MCs from 'views/MCs';
import LPs from 'views/LPs';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename="/goodtimes">
      <StyleTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/cds" />} />
          <Route path={routes.cds} component={CDs} />
          <Route path={routes.mcs} component={MCs} />
          <Route path={routes.lps} component={LPs} />
        </Switch>
      </StyleTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
