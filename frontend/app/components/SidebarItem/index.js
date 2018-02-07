// @flow

import React from 'react';
import styles from './styles.css';

type SidebarItemProps = {
  title: string,
  subtitle: string,
  btnTitle?: string,
  btnLink?: string,
};
const SidebarItem = ({
  title,
  subtitle,
  btnTitle = '',
  btnLink,
}: SidebarItemProps) =>
  (<div className={styles.field}>
    <h2 className={styles.title}>
      {title.toUpperCase()}
    </h2>
    <p className={styles.subtitleContainer}>
      {subtitle}
    </p>
    {btnLink &&
      <a className="button--primary" href={btnLink}>
        {btnTitle.toUpperCase()}
      </a>}
  </div>);

export default SidebarItem;