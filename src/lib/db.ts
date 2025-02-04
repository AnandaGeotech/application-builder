import { IApplicationUser, IRegisterUser } from '@/common/types/application.type';
import { IApplicationGlobalListRes, IQueryFile } from '@/common/types/common.type';

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

export const loginUserFromApiServerByEmail = async (
  email: string,
  password: string
): Promise<{ user: IRegisterUser; token: string } | undefined> => {
  if (!email || !password) {
    throw new Error('Please provide email and password!');
  }

  const response = await fetch(`${API_BASE_URL}/authenticatedUsers?email=${email}&password=${password}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch record with ID: ${email}`);
  }

  const users = await response.json();

  // Check if any user was found
  if (users.length === 0) {
    throw new Error('Invalid email or password!');
  }

  const user = users[0]; // Assuming the first user is the one who logged in

  // Generate a fake token
  const token = `fake-token-${user.id}-${Date.now()}`; // Simple fake token

  return { user, token };
};

// Add data to the API server
export const registerUserToApiServer = async (data: IRegisterUser): Promise<IRegisterUser> => {
  const response = await fetch(`${API_BASE_URL}/authenticatedUsers`, {
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
  const { currentPage, record = 5, searchTerm } = props;

  // Construct query parameters
  const queryParams = new URLSearchParams();

  if (currentPage) {
    queryParams.append('_page', currentPage.toString());
  }
  if (record) {
    queryParams.append('_per_page', record.toString());
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
