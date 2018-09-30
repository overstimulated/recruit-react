import * as React from 'react';

import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { App } from './App';
import { CreditCardPageContainer, MainMenu } from './components';
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <Provider store={store}>
      <Router>
        <section className="hero is-fullheight"> 
            <Route component={App} />
            <Switch>
              <Route exact={true} path="/" component={ MainMenu }/>
              <Route path="/creditCardRegister" component={ CreditCardPageContainer }/>
            </Switch>
        </section>
      </Router>
    </Provider>
  );
}