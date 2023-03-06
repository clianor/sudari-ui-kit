import { HamburgerMenuIcon } from '@sudari/icons';
import { Button, IconButton } from '@sudari/ui';

import { FC } from 'react';
import 'twin.macro';

const BasicHeader: FC = () => (
  <div tw="flex items-center justify-between w-full px-4 py-2 bg-green-500">
    <IconButton icon={<HamburgerMenuIcon />} variant="text" color="white" />
    <h6 tw="flex-grow px-2 text-white font-bold">News</h6>
    <Button variant="text" color="white">
      Login
    </Button>
  </div>
);

export default BasicHeader;
