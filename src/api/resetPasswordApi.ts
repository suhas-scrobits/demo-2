import axios from "axios";
import { IP } from "../routes/IPConfig";

//   console.log(jwtToken);

interface resetPasswordApiBody {
  password: string;
}

/* eslint-disable */
export default async function callResetPasswordApi(
  body: resetPasswordApiBody,
  token: string
) {
  console.log(IP);
  console.log(token);

  const url = `${IP}/users/createPassword`;
  const res = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
