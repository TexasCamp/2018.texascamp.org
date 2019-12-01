import React from 'react';
import styles from './styles.css';

function NewsletterForm({ closeMenuOverlay }) {
  const action =
    'https://texascamp.us14.list-manage.com/subscribe/post?u=570bd5ca3ae1bf17bce28a1ad&amp;id=076e5f40d9';

  return (
    <div className={styles.newsletter}>
      <img src="/images/texas-camp-newsletter.png" alt="Sign up for the Newsletter" />
      <form
        action={action}
        method="post"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div>
          <label htmlFor="mce-NAME" className={styles.visuallyhidden}>
            Name
          </label>
          <input type="text" name="NAME" id="mce-NAME" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="mce-EMAIL" className={styles.visuallyhidden}>
            Email address
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="Email address"
          />
        </div>
        <div className="clear">
          <div className="response" style={{ display: 'none' }} />
          <div className="response" style={{ display: 'none' }} />
        </div>
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_570bd5ca3ae1bf17bce28a1ad_076e5f40d9"
            tabIndex="-1"
          />
        </div>
        <div className={styles.submit}>
          <input
            type="submit"
            value="Sign Up"
            name="subscribe"
            className="button--primary"
            onClick={closeMenuOverlay}
          />
        </div>
      </form>
    </div>
  );
}

export default NewsletterForm;
