import axios from "axios";

import { IP } from "../routes/IPConfig";

interface signUpApiBody {
  email: string;
  password: string;
}

/* eslint-disable */
export default async function callSignUpApi(body: signUpApiBody) {
  const url = `${IP}/users/auth/signup`;
  const res = await axios.post(url, body);
  return res.data;
}
