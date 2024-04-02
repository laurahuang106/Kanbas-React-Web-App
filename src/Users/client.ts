import axios from "axios";
export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/api/users`;

export interface User { _id: string; username: string; password: string; role: string;
firstName: string, lastName: string };

export const signin = async (credentials: User) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const profile = async () => {
    const response = await axios.post(`${USERS_API}/profile`);
    return response.data;
};
  