import { useState } from 'react';
import { createResource, delay } from '@/common/components/utils';

const useFetchData = <T>() => {
  const [error, setError] = useState<string | null>(null);
  const [customFetchLoading, setCustomFetchLoading] = useState<boolean>(false);
  const [dataResource, setDataResource] = useState<{ read: () => T } | null>(null);
  const [fetchData, setFetchData] = useState<T | null>(null);

  const loadData = async (fetchFn: () => Promise<T>) => {
    setCustomFetchLoading(true);
    setDataResource(null);
    setFetchData(null);
    setError(null);
    await delay(1000);
    try {
      const allDataPromise = fetchFn();

      const res = await allDataPromise; // Wait for the promise to resolve

      setFetchData(res);

      const resource = createResource(() => allDataPromise);
      setDataResource(resource);

      return res;
    } catch (error: any) {
      setError(error?.message || 'An error occurred while loading data. Please try again later.'); // Set error message
      throw new Error(error?.message || 'An error occurred while loading data. Please try again later.');
    } finally {
      setCustomFetchLoading(false);
    }
  };

  return {
    dataResource,
    fetchData,
    error,
    loadData,
    customFetchLoading,
  };
};

export default useFetchData;
