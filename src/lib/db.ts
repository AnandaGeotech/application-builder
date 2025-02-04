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

export const retrieveUserByTokenFromApiServer = async (token: string): Promise<IRegisterUser | undefined> => {
  if (!token) {
    throw new Error('Token is required!');
  }

  // Here you would typically verify the token (in a real application)
  // For the sake of this example, let's assume we just decode it
  const userId = token.split('-')[2]; // Extract user ID from the token

  const response = await fetch(`${API_BASE_URL}/authenticatedUsers/${userId}`); // Fetch the user data

  if (!response.ok) {
    throw new Error(`Failed to fetch user data for ID: ${userId}`);
  }

  const user: IRegisterUser = await response.json();

  return user;
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
    throw new Error('Failed to fetch data.');
  }

  const data = await response.json();

  // Check if the data is an empty array
  if (Array.isArray(data.data) && data.data.length === 0) {
    throw new Error('No data found.');
  }

  return data; // Return the data (should not be empty at this point)
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
