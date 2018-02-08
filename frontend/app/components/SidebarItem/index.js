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
      {title}
    </h2>
    <p className={styles.subtitleContainer}>
      {subtitle}
    </p>
    {btnLink &&
      <a className={styles.subtitleButton} href={btnLink}>
        {btnTitle}
      </a>}
  </div>);

export default SidebarItem;
