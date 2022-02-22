import React from 'react';
import styles from './styles.module.scss';

type InputProps = {
  placeholder?: string;
  label: string;
};

export const Input: React.FC<InputProps> = ({ placeholder, label }) => (
  <label className={styles.Label}>
    {label}
    <input className={styles.Input} type="text" placeholder={placeholder} />
  </label>
);

Input.defaultProps = {
  placeholder: '',
};
