import axios from "axios";

const IP = "https://serveeasy-backend-production.up.railway.app";

export async function signUpWithGoogle() {
  console.log("suhas");
  const url = `${IP}/api/v1/user/google`;
  window.open(url, "_self");
}

export async function loginWithEmailPassword(body) {
  const url = `${IP}/api/v1/user/login`;
  const res = await axios.post(url, body);
  return res.data;
}

export async function signupWithEmailPassword(body) {
  const url = `${IP}/api/v1/user/signup`;
  const res = await axios.post(url, body);
  return res.data;
}

export async function getUserDetails(body) {
  const url = `${IP}/api/v1/user/user`;
  const res = await axios.get(url, { withCredentials: true });
  return res.data;
}
