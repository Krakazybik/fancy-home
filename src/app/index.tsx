import React from 'react';
import { Block } from 'shared/ui/block';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Input } from 'shared/ui/input';
// eslint-disable-next-line import/no-internal-modules
import 'shared/ui/styles/main.scss';

import styles from './styles.module.scss';

export function App() {
  return (
    <div className={styles.App}>
      <Block>
        <Card>
          <Input placeholder="test" label="Login" />
          <Input placeholder="test" label="Password" />
          <Button onClick={() => false} title="Submit" />
        </Card>

        <Card>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, at consequuntur cumque deleniti ducimus enim error eum
            eveniet illo impedit itaque laboriosam magni mollitia quaerat
            voluptas? Consequatur quos sapiente voluptatibus.
          </div>
          <div>
            Amet corporis libero quis similique tenetur? Alias amet architecto
            atque blanditiis cum distinctio dolore eveniet explicabo facere illo
            incidunt ipsa ipsam iure molestiae molestias, non officia porro
            repellendus sint tempora?
          </div>
          <div>
            Accusantium alias asperiores assumenda cumque dolore, est impedit,
            in incidunt itaque magnam recusandae repellat. Asperiores
            dignissimos enim fugit hic id magnam nam neque reiciendis veniam
            voluptatem! Explicabo nulla pariatur voluptate!
          </div>
        </Card>
      </Block>
    </div>
  );
}
