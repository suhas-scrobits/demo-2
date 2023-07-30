import axios from "axios";

import { IP, myToken } from "../routes/IPConfig";

interface deviceBody {
  name: string;
  gatewayId: number;
  longitude: string;
  latitude: string;
}

/* eslint-disable */
export default async function callCreateDeviceApi(body: deviceBody) {
  const url: string = `${IP}/devices`;
  console.log(myToken);

  const res = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });

  return res.data;
}
