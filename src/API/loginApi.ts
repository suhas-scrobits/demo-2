import axios from "axios";

import { IP } from "../routes/IPConfig";

interface loginApiBody {
  email: string;
  password: string;
}

/* eslint-disable */
export default async function callLoginApi(body: loginApiBody) {
  const url = `${IP}/users/auth/login`;
  const res = await axios.post(url, body);
  return res.data;
}
