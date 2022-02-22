import React from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  onClick: () => void;
  title: string;
};

export const Button: React.FC<ButtonProps> = ({ onClick, title }) => (
  <button className={styles.Button} type="button" onClick={onClick}>
    {title}
  </button>
);
