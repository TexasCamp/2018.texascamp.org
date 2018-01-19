// @flow

import 'App/normalize.css';

import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
import Home from 'Home';
import Sessions from 'Sessions';
import Session from 'Session';
import News from 'News';
import Humans from '!file-loader?name=humans.txt!./humans.txt';
import NewsOverview from 'NewsOverview';
import SplatRouter from 'SplatRouter';
import Typekit from 'react-typekit';
import favicon from '!file-loader?name=favicon.ico!favicons/favicon.ico';
import appleTouchIcon from 'favicons/apple-touch-icon.png';
import favicon32x32 from 'favicons/favicon-32x32.png';
import favicon16x16 from 'favicons/favicon-16x16.png';
import safariPinnedTab from 'favicons/safari-pinned-tab.svg';
import styles from './styles.css';
import '../../shared/css/global.css';

const App = (): React.Element<any> =>
  (<div className={styles.wrapper}>
    <Helmet
      titleTemplate="Texas Camp 2018 - %s"
      defaultTitle="Texas Camp 2018"
    />
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ef5a47" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="mask-icon" href={safariPinnedTab} color="#ef5a47" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <Typekit kitId="rgi7wxl" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sessions" component={Sessions} />
      <Route exact path="/sessions/:sessionName/" component={Session} />
      <Route exact path={Humans} />
      <Route exact path="/news" component={NewsOverview} />
      <Route exact path="/news/:newsTitle/" component={News} />
      <Route path="*" component={SplatRouter} />
    </Switch>
  </div>);

export default App;
