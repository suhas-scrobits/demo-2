import axios from "axios";

import { IP, myToken } from "../routes/IPConfig";

/* eslint-disable */
export default async function callGetAllGatewaysApi() {
  const url = `${IP}/gateways`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  return res.data;
}
