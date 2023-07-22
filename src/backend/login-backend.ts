import axios from "axios";

interface IFormInput {
    email: string,
    password: string
  }
  
  const IP = "https://sisai-backend-production.up.railway.app/api/v1";
  
  export default async function callLoginApi(body: IFormInput) {
    const url = `${IP}/users/auth/login`;
    const res = await axios.post(url, body);
    return res.data;
  }
  