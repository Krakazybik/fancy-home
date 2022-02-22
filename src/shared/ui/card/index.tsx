import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

type CardProps = {
  className?: string | undefined;
};

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={cn(styles.Card, className)}>{children}</div>
);

Card.defaultProps = {
  className: undefined,
};
