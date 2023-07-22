import axios from "axios";

const IP = "https://sisai-backend-production.up.railway.app/api/v1";

type my_obj = {
    email: string
    googleAuthId: string
  }

 export default async function callGoogleApi(body : my_obj) {
  const url = `${IP}/users/auth/google`;
  const res = await axios.post(url, body);
  return res.data;
}