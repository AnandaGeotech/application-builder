import { DropdownMenu } from 'radix-ui';
import { BsThreeDotsVertical } from 'react-icons/bs';
import React, { createContext, PropsWithChildren, ReactNode, useMemo } from 'react';
import { Button } from '@/common/components/Button';

const contentBackgroundStyle = 'min-w-[120px] flex items-center flex-col rounded-md bg-white dark:text-black';
const contentLayoutStyle =
  'data-[side=bottom]:animate-slideUpAndFade shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]';

const contentAnimationStyle =
  ' data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade';

const itemLayoutStyle =
  'cursor-pointer group relative flex h-[25px] select-none items-center rounded-[3px]  text-[13px] leading-none text-violet11 outline-none';

interface MenuItemProps extends PropsWithChildren {
  handleItemClick?: () => void;
}
const menuContext = createContext<Record<string, unknown> | undefined>(undefined);
interface MenuBarProps extends PropsWithChildren {
  menuTriggerBtn?: ReactNode;
}
const MenuBar: React.FC<MenuBarProps> & { MenuItem: React.FC<MenuItemProps> } = ({ children, menuTriggerBtn }) => {
  const contextValue = useMemo(
    () => ({
      options: [],
    }),
    []
  );
  return (
    <menuContext.Provider value={contextValue}>
      {' '}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          {menuTriggerBtn || (
            <Button className="inline-flex" aria-label="Customise options">
              <BsThreeDotsVertical size={16} />
            </Button>
          )}
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={`${contentLayoutStyle}  will-change-[opacity,transform] ${contentAnimationStyle} ${contentBackgroundStyle}`}
            sideOffset={5}
          >
            {children}

            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </menuContext.Provider>
  );
};
MenuBar.MenuItem = function MenuItem({
  handleItemClick,
  children,
}: PropsWithChildren & { handleItemClick?: () => void }) {
  return (
    <DropdownMenu.Item
      onClick={() => handleItemClick && handleItemClick()}
      className={`${itemLayoutStyle} data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1`}
    >
      {children}{' '}
    </DropdownMenu.Item>
  );
};

export default MenuBar;
