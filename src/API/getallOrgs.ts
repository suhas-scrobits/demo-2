// api/getOrganizations.ts
import axios from "axios";
import { IP } from "../routes/IPConfig";
const jwtToken = sessionStorage.getItem("token");

export interface Organization {
  id: number;
  name: string;
  phone: string;
  address: string;
}

/* eslint-disable */
export async function GetallOrgs(): Promise<Organization[]> {
  try {
    const url = `${IP}/organisations`;
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return res.data.data;
  } catch (error) {
    console.error("Error getting organizations:", error);
    return [];
  }
}
