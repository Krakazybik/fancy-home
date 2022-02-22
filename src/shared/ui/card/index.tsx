import React from 'react';
import styles from './styles.module.scss';

export const Card: React.FC = ({ children }) => (
  <div className={styles.Card}>{children}</div>
);