import axios from "axios";

// const IP = "https://serveeasy-backend-production.up.railway.app";
const IP = "https://51d3-116-74-159-228.in.ngrok.io";

export async function signUpWithGoogle() {
  const url = `${IP}/api/v1/user/google`;
  console.log(url);
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

export async function getUserDetails() {
  const url = `${IP}/api/v1/user/details`;
  const res = await axios.get(url, { withCredentials: true });
  return res.data;
}
