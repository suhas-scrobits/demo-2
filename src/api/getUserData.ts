import axios from "axios";
import { IP } from "../routes/IPConfig";
// const jwtToken = sessionStorage.getItem("token");
//const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzAsInJvbGUiOjAsIm9yZ0lkIjo0LCJpc1ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2OTA1Mzc1NTQsImV4cCI6MTY5MDYyMzk1NH0.EX8QCLvLE5p2RFt29eJj3IhQ9ffzaNC4DmnFZvPJsdQ";

/* eslint-disable */
export interface User {
  id: number;
  name: string;
  email: string;
  isVerified: boolean;
  organisation: any;
  // Add other properties if needed
}

export default async function callGetUserDataApi(
  token: string
): Promise<User[]> {
  try {
    const url = `${IP}/users`;
    const res = await axios.get<{ data: User[] }>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data; // Extract the "data" property from the response
  } catch (error) {
    console.error("Error fetching users data:", error);
    return [];
  }
}
