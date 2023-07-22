import axios from "axios";


const IP = "https://sisai-backend-production.up.railway.app/api/v1";
interface IFormInput {
    email: string;
}

export default async function callOtpApi(body: IFormInput){
    const url = `${IP}/users/auth/sendOtpMail`;
    const res = await axios.post(url, body);
    return res.data;
}