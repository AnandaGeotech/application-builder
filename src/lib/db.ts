/* eslint-disable import/no-unresolved */
import { IApplicationUser } from '@/types/application.type';
import { IApplicationGlobalListRes, IQueryFile } from '@/types/common.type';

export async function clearStore() {
  //   const db = await openDB<IMyDatabase>('my-database', 1);
  //   try {
  //     await db
  //       .transaction('my-store', 'readwrite')
  //       .objectStore('my-store')
  //       .clear();
  //   } catch (error) {
  //   }
}

const API_BASE_URL = 'http://localhost:3000';

// Add data to the API server
export const addDataToApiServer = async (data: IApplicationUser): Promise<IApplicationUser> => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to add new record.');
  }

  return response.json();
};

// Get all data from the API server
export const getAllDataFromApiServer = async (
  props: IQueryFile
): Promise<IApplicationGlobalListRes<IApplicationUser>> => {
  const { currentPage, limitperPage = 5, searchTerm } = props;

  // Construct query parameters
  const queryParams = new URLSearchParams();

  if (currentPage) {
    queryParams.append('_page', currentPage.toString());
  }
  if (limitperPage) {
    queryParams.append('_per_page', limitperPage.toString());
  }
  if (searchTerm) {
    queryParams.append('q', searchTerm); // Assuming the API supports `q` for search
  }

  const url = `${API_BASE_URL}/users?${queryParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch records.');
  }
  return response.json();
};
// Get data by ID from the API server
export const getDataFromApiServerById = async (id: string): Promise<IApplicationUser> => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch record with ID: ${id}`);
  }
  return response.json();
};

// Partially update data by ID in the API server
export const patchDataInApiServerById = async (id: string, data: IApplicationUser): Promise<IApplicationUser> => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to patch record with ID: ${id}`);
  }
  return response.json();
};

// Delete data by ID in the API server
export const deleteDataFromApiServerById = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete record with ID: ${id}`);
  }
};
