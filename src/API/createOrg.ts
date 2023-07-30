import axios from "axios";
import { IP } from "../routes/IPConfig";
const jwtToken = sessionStorage.getItem("token");
interface OrganizationData {
  name: string;
  address: string;
  phone: string;
  registeredCompanyId: string;
  gstNo: string;
}

/* eslint-disable */
export async function createOrganization(
  organizationData: OrganizationData
): Promise<string> {
  try {
    const url = `${IP}/organisations`;
    const res = await axios.post(url, organizationData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return res.data.message;
  } catch (error) {
    console.error("Error creating organization:", error);
    return "Failed to create organization.";
  }
}
