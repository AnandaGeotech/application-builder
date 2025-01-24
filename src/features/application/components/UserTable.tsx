/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line boundaries/no-unknown
import { FC } from 'react';
import { TableApplicationUserListProps } from '../type/application.type';
import TableTest from './TableTest';
import GlobalModal from '@/common/components/Modal';
import ConfirmModal from '@/common/components/ConfirmModal';

type hooksOptions = {
  hooksOptions: TableApplicationUserListProps;
};
const UserTable: FC<hooksOptions> = ({ hooksOptions }) => {
  const {
    dataResource,
    headers,
    openModal,
    handleConfirm,
    closeModal,
    isModalOpen,
    columns,
    handlePageChange,
    currentPage,
    visibleHeaders,
    toggleHeader,
    handleConfirmOptionModalFn,
    closeOptionModalFn,
    limitperPage,
    isModalOptionOpen,
    toggleIcons,
    activeRowId,
    sorting,
    setSorting,
  } = hooksOptions;
  if (!dataResource) {
    throw new Promise(() => {});
  }
  const data = dataResource.read();

  // const [activeRowId, setActiveRowId] = useState<string | null>(null);

  // const toggleIcons = (id: string) => {
  //   setActiveRowId((prevId) => (prevId === id ? null : id)); // Toggle or close the icon list
  // };

  return (
    <>
      {' '}
      <div>
        <TableTest
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          columns={columns}
          data={data}
          openModal={openModal}
          limitperPage={limitperPage}
          toggleIcons={toggleIcons}
          activeRowId={activeRowId}
          sorting={sorting}
          setSorting={setSorting}
        />
        {/* <UserTaleList columns={columns} data={data?.data} headers={headers} /> */}
        {/* {data?.data?.length > 0 ? (
          <table className="table-auto w-full relative">
            <thead>
              <tr className="text-indigo-500/100 bg-slate-800 dark:bg-slate-300 text-sm md:text-base h-8">
                <th className="font-bold whitespace-nowrap text-center">Actions</th>
                {headers.map((header) => (
                  <th key={header} className="p-4 font-bold whitespace-nowrap text-center">
                    {capitalize(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item) => (
                <tr key={item.id} className="bg-slate-950 dark:bg-white transition-colors h-10">
                  <td className="flex gap-3 h-full text-slate-200 dark:text-slate-600 items-center p-4 bg-opacity-50 text-sm md:text-base whitespace-nowrap text-center">
                    <input type="checkbox" className="bg-slate-600 " />
                    {activeRowId === item.id && (
                      <div className="absolute flex justify-center bg-slate-900 dark:bg-slate-300 items-center px-3 rounded-lg left-0">
                        <Link className="" to={`/edit/${item.id}`}>
                          <BiPencil size={14} className="hover:text-slate-400" />
                        </Link>
                        <Button onClick={() => openModal(item)}>
                          <BiTrashAlt className="text-red-500 hover:text-red-400" size={14} />
                        </Button>
                        <Link to={`user/${item.id}`}>
                          <BsEyeFill className="text-indigo-500 hover:text-indigo-400" size={14} />
                        </Link>
                      </div>
                    )}

                    <Button onClick={() => toggleIcons(item.id)}>
                      <BsThreeDotsVertical />
                    </Button>
                  </td>
                  {headers.map((header) => (
                    <td
                      key={header}
                      className="p-4 text-slate-300 dark:text-slate-700 text-sm md:text-base whitespace-nowrap text-center bg-slate-950 dark:bg-white border-b-2 border-slate-700 dark:border-slate-200"
                    >
                      <p>{getDisplayValue(item[header])}</p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-slate-300 text-sm md:text-base p-4">Loading data ...</div>
        )} */}
      </div>
      <ConfirmModal
        isOpen={isModalOpen}
        title="Delete account"
        description="Are you sure you want to Delete your account? This action cannot be undone."
        onClose={closeModal}
        onConfirm={handleConfirm}
        confirmLabel="Delete"
        cancelLabel="Cancel"
      />
      <GlobalModal
        isOpen={isModalOptionOpen}
        title="Option Modal"
        description=""
        onClose={closeOptionModalFn}
        onConfirm={handleConfirmOptionModalFn}
        confirmLabel="Submit"
        cancelLabel="Cancel"
      >
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Select Columns to Display:</h2>
          <div className="grid grid-cols-2 gap-2 text-black">
            {headers.map((key) => (
              <label key={key as string} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={visibleHeaders.has(key)}
                  onChange={() => toggleHeader(key)}
                />
                <span>{key}</span>
              </label>
            ))}
          </div>
        </div>
      </GlobalModal>
    </>
  );
};
export default UserTable;
