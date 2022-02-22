import React from 'react';

import { Card } from 'shared/ui/card';
// eslint-disable-next-line import/no-internal-modules
import 'shared/ui/styles/main.scss';
import { Button } from '../shared/ui/button';
import styles from './styles.module.scss';

export function App() {
  return (
    <div className={styles.App}>
      <Card>
        <Button onClick={() => false} title="Click me" />
      </Card>
    </div>
  );
}
