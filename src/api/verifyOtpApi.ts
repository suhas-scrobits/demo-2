import axios from "axios";
import { IP } from "../routes/IPConfig";
interface verifyOtpApiBody {
  email: string;
  otp: string;
}

/* eslint-disable */
export default async function callVerifyOtpApi(body: verifyOtpApiBody) {
  const url = `${IP}/users/auth/verifyOtp`;
  const res = await axios.post(url, body);
  return res.data;
}
