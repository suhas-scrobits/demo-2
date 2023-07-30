import axios from "axios";

import { IP } from "../routes/IPConfig";
interface sendOtpApiBody {
  email: string;
}

/* eslint-disable */
export default async function callSendOtpApi(body: sendOtpApiBody) {
  const url = `${IP}/users/auth/sendOtpMail`;
  const res = await axios.post(url, body);
  return res.data;
}
