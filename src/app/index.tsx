import React from 'react';

import { Card } from 'shared/ui/card';
// eslint-disable-next-line import/no-internal-modules
import 'shared/ui/styles/main.scss';
import { Button } from '../shared/ui/button';
import { Input } from '../shared/ui/input';
import styles from './styles.module.scss';

export function App() {
  return (
    <div className={styles.App}>
      <Card>
        <Input placeholder="test" label="Login" />
        <Input placeholder="test" label="Password" />
        <Button onClick={() => false} title="Submit" />
      </Card>
    </div>
  );
}
