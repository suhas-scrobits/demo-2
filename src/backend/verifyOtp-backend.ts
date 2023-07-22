import axios from "axios";

interface apiBodyType{
    email: string
    otp: string
  }
  
  const IP = "https://sisai-backend-production.up.railway.app/api/v1";
  
  export default async function callverifyOtpApi(body: apiBodyType) {
    const url = `${IP}/users/auth/verifyOtp`;
    const res = await axios.post(url, body);
    return res.data;
  }
  