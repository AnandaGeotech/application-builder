/* eslint-disable no-unused-vars */
import { Row } from '@tanstack/react-table';
import { DropdownMenu } from 'radix-ui';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { IApplicationUser } from '@/common/types/application.type';
import { Button } from '@/common/components/Button';

const contentBackgroundStyle = 'min-w-[120px] flex items-center flex-col rounded-md bg-white dark:text-black';
const contentLayoutStyle =
  'data-[side=bottom]:animate-slideUpAndFade shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]';

const contentAnimationStyle =
  ' data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade';

const itemLayoutStyle =
  'cursor-pointer group relative flex h-[25px] select-none items-center rounded-[3px]  text-[13px] leading-none text-violet11 outline-none';
const TableActionButton = ({
  info,
  openModal,
}: {
  info: Row<IApplicationUser>;
  openModal: (info: IApplicationUser) => void;
}) => {
  const navigate = useNavigate();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="inline-flex" aria-label="Customise options">
          <BsThreeDotsVertical size={16} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`${contentLayoutStyle}  will-change-[opacity,transform] ${contentAnimationStyle} ${contentBackgroundStyle}`}
          sideOffset={5}
        >
          <DropdownMenu.Item
            onClick={() => navigate(`/edit/${info.original.id}`)}
            className={`${itemLayoutStyle} data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1`}
          >
            Edit{' '}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => navigate(`/user/${info.original.id}`)}
            className={`${itemLayoutStyle} data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1`}
          >
            View{' '}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => openModal(info.original)}
            className={`${itemLayoutStyle} data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1`}
          >
            Delete{' '}
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default TableActionButton;
