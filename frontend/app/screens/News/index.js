// @flow

import React from 'react';
import type { NewsT } from 'types';
import NotFound from 'NotFound';
import NewsItem from 'NewsItem';
import withNewsItemQuery from './withNewsItemQuery';

type NewsItemProps = {
  newsItem: NewsT,
};

const News = ({ newsItem }: NewsItemProps) =>
  (<div>
    {newsItem
      ? <NewsItem newsItem={newsItem} />
      : <NotFound linkText="Back to more news" linkUrl="/news" />}
  </div>);

export default withNewsItemQuery(News);
