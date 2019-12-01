import Head from 'next/head';

const HeadTitle = ({ title }) => {
  let fullTitle;
  if (title) {
    fullTitle = `Texas Camp 2018 - ${title}`;
  } else {
    fullTitle = 'Texas Camp 2018';
  }

  return (<Head>
    <title>{fullTitle}</title>
  </Head>);
}

export default HeadTitle;