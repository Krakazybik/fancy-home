import React from 'react';
import styles from './styles.module.scss';

export const Line: React.FC = ({ children }) => (
  <div className={styles.Line}>{children}</div>
);
