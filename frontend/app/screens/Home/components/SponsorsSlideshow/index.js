// @flow

import React from 'react';
import Slider from 'react-slick';
import Sponsor from 'Sponsor';
import styles from 'Home/styles.css';

class SponsorsSlideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sponsors: [],
    };
  }

  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      dots: true,
      fade: true,
      infinite: true,
    };
    const sponsorsList = this.props.sponsors
      .sort(() => Math.random() - 0.5)
      .filter(sponsor => sponsor.sponsorLevel === 'Platinum')
      .map(sponsor => (
        <div key={sponsor.id}>
          <Sponsor sponsor={sponsor} />
        </div>
      ));

    return (
      <div className={styles.slider}>
        <Slider {...settings}>{sponsorsList}</Slider>
      </div>
    );
  }
}

export default SponsorsSlideshow;
