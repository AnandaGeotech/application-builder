/* eslint-disable boundaries/element-types */
/* eslint-disable max-len */

import { Menubar } from 'radix-ui';
import Sidebar from '@/features/application/components/Sidebar';

const MenubarDemo = () => (
  <Menubar.Root className="flex rounded-md p-[3px]  z-50">
    <Menubar.Menu>
      <Menubar.Trigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none text-violet11 outline-none data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
        File
      </Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content
          className="min-w-[220px] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
          align="start"
          sideOffset={5}
          alignOffset={-3}
        >
          <Sidebar />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
);

export default MenubarDemo;
