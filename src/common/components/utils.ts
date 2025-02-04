import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// capitalize a string
export const capitalize = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();

export const createResource = <T>(fetchFn: () => Promise<T>) => {
  let status = 'pending';
  let result: T;

  const suspender = fetchFn().then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    },
  };
};

export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
