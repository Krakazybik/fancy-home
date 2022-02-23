import React from 'react';
import styles from './styles.module.scss';

type BlockProps = {
  maxWidth?: number;
};

export const Block: React.FC<BlockProps> = ({ children, maxWidth }) => (
  <div className={styles.Block} style={{ maxWidth }}>
    {children}
  </div>
);

Block.defaultProps = {
  maxWidth: 500,
};
