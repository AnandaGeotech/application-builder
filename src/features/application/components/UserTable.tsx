/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line boundaries/no-unknown

import { Link } from 'react-router-dom';
import useApplicationUserList from '../hooks/useApplicationUserlist';
import { capitalize } from '@/lib/utils';
import { Button } from '@/common/components/Button';

const UserTable = () => {
  const { listData } = useApplicationUserList();

  const data = listData?.data || [];

  function getDisplayValue(defaultValue: unknown): string {
    if (defaultValue === false) {
      return 'N/A';
    }
    if (defaultValue === '' || defaultValue === true) {
      return 'null';
    }
    if (Array.isArray(defaultValue)) {
      return defaultValue
        .map((item) => (typeof item === 'object' && item !== null ? Object.values(item).join(', ') : String(item)))
        .join(', ');
    }
    if (typeof defaultValue === 'object' && defaultValue !== null) {
      // Handle objects: join all values with commas
      return Object.values(defaultValue).join(', ');
    }
    return String(defaultValue);
  }

  // console.log(listData.data, 'listData');

  // Dynamically extract headers if data exists
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div>
      {data.length > 0 ? (
        <table className="table-auto border border-indigo-500/100 w-full">
          <thead>
            <tr className="text-indigo-500/100 bg-slate-900 text-sm md:text-base h-8">
              {headers.map((header) => (
                <th key={header} className="p-4 font-bold whitespace-nowrap text-center">
                  {capitalize(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-slate-700 transition-colors h-10">
                {headers.map((header) => (
                  <td
                    key={header}
                    className="p-4 text-slate-300 text-sm md:text-base whitespace-nowrap text-center bg-slate-900 bg-opacity-80"
                  >
                    <Link to={`user/${item.id}`}>{getDisplayValue(item[header])}</Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-slate-300 text-sm md:text-base p-4">Loading data ...</div>
      )}
    </div>
  );
};
export default UserTable;
