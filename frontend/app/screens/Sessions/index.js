// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import AcceptedSessions from 'AcceptedSessions';
import type { SessionT } from 'types';
import withSessionsQuery from './withSessionsQuery';
import styles from './styles.css';

type SessionsPageProps = {
  sessions: SessionT[],
};
const SessionsPage = (sessions: SessionsPageProps) => {
  return (
    <div>
      <Helmet title="Sessions" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <AcceptedSessions {...sessions} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withSessionsQuery(SessionsPage);
