import axios from "axios";

import { IP, myToken } from "../routes/IPConfig";

interface gatewayBody {
  name: string;
  longitude: string;
  latitude: string;
}

/* eslint-disable */
export default async function callCreateGatewayApi(body: gatewayBody) {
  const url = `${IP}/gateways`;
  console.log(myToken);

  const res = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  return res.data;
}
