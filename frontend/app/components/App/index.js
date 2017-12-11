// @flow

import 'App/normalize.css';

import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
import Home from 'Home';
import NewsOverview from 'NewsOverview';
import Typekit from 'react-typekit';
import styles from './styles.css';

const App = (): React.Element<any> =>
  (<div className={styles.wrapper}>
    <Helmet
      titleTemplate="Texas Camp 2018 - %s"
      defaultTitle="Texas Camp 2018"
    />
    <Typekit kitId="yde7xbz" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/news/:page?/" component={NewsOverview} />
    </Switch>
  </div>);

export default App;
