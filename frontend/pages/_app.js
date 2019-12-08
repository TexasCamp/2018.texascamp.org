import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Typekit from 'react-typekit';
import HeadTitle from '../components/HeadTitle';
import styles from './_app.styles.css';
import '../shared/css/normalize.css';
import '../shared/css/global.css';

class TXCApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div className={styles.wrapper}>
        <HeadTitle />
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ef5a47" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#ef5a47" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <Typekit kitId="rgi7wxl" />
        </Head>
        <Component {...pageProps} />
        {/* <Switch>
          <Route exact path="/schedule" component={Sessions} />
          <Route exact path="/session-form" component={SubmitSession} />
          <Route exact path="/happenings/:happeningName/" component={Happening} />
          <Route
            exact
            path="/session-update/:id/:editToken"
            component={UpdateSession}
          />
          <Route path="*" component={SplatRouter} />
        </Switch> */}
      </div>
    );
  }
}

export default TXCApp;