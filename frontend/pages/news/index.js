import React from 'react';
import compose from 'recompose/compose';
import { withApollo, initOnContext } from '../../shared/lib/withApollo';
import HeadTitle from '../../components/HeadTitle';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import NewsTeaser from '../../components/NewsTeaser';
import withNews, { NEWS_QUERY, newsListMapper } from '../../shared/query/withNews';
import styles from './styles.css';
import moment from 'moment';

// const NewsOverviewOld = ({
//   loading,
//   newsList,
// }) =>
//   (!loading &&
//     <div>
//       <Menu />
//       <HeadTitle title="News" />
//       <div className={styles.contentWrapper}>
//         <Header />
//         <div className={styles.content}>
//           <h1 className={styles.title}>News</h1>
//           <div className={styles.detail}>
//             <ul>
//               {newsList
//                 .sort(
//                   (a, b) => b.publishedDate - a.publishedDate
//                 )
//                 .map(newsTeaser =>
//                   <NewsTeaser key={newsTeaser.id} newsTeaser={newsTeaser} />,
//                 )}
//             </ul>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>) ||
//   <div>loading</div>;

const NewsOverview = ({ loading, newsList }) => {
  return (!loading && (<div>
      
      <div className={styles.contentWrapper}>
        
        <div className={styles.content}>
          <h1 className={styles.title}>News</h1>
          <div className={styles.detail}>
            {newsList
              .sort(
                (a, b) => b.publishedDate - a.publishedDate
              )
              .map(newsTeaser =>
                <NewsTeaser key={newsTeaser.id} newsTeaser={newsTeaser} />,
              )}            
          </div>
          
        </div>
      </div>
    </div>) || <div>loading</div>);
}

export const getStaticProps = async (ctx) => {
  initOnContext(ctx)

  const result = await ctx.apolloClient.query({
    query: NEWS_QUERY
  });

  const newsList = newsListMapper(result.data.nodeQuery.entities).map(news => ({
    ...news,
    publishedDate: null,
  }));

  return {
    props: {
      apolloState: ctx.apolloClient.cache.extract(),
      loading: result.loading,
      newsList,
    }
  }
}

export default NewsOverview;
