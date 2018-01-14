// @flow

import 'App/normalize.css';

import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
import SplashPage from 'SplashPage';
import Home from 'Home';
import Sessions from 'Sessions';
import Session from 'Session';
import News from 'News';
import Humans from '!file-loader?name=humans.txt!./humans.txt';
import NewsOverview from 'NewsOverview';
import SplatRouter from 'SplatRouter';
import Typekit from 'react-typekit';
import styles from './styles.css';
import '../../shared/css/global.css';

const App = (): React.Element<any> =>
  (<div>
    <Helmet
      titleTemplate="Texas Camp 2018 - %s"
      defaultTitle="Texas Camp 2018"
    />
    <Typekit kitId="yde7xbz" />
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <div className={styles.wrapper}>
        <Route exact path="/home" component={Home} />
        <Route exact path="/sessions" component={Sessions} />
        <Route exact path="/sessions/:sessionName/" component={Session} />
        <Route exact path={Humans} />
        <Route exact path="/news" component={NewsOverview} />
        <Route exact path="/news/:newsTitle/" component={News} />
        <Route path="*" component={SplatRouter} />
      </div>
    </Switch>
  </div>);

export default App;
