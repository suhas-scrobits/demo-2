import axios from "axios";
import { IP } from "../routes/IPConfig";
const jwtToken = sessionStorage.getItem("token");

interface UserData {
  name: string;
  phone: string;
  email: string;
  orgId: number;
}
/* eslint-disable */
export async function addUserData(userData: UserData): Promise<string> {
  try {
    const url = `${IP}/users`; // Replace with the actual API endpoint for adding user data
    const res = await axios.post(url, userData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return res.data.message;
  } catch (error) {
    console.error("Error adding user data:", error);
    return "Failed to add user data.";
  }
}
