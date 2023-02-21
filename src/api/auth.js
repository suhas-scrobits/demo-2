import axios from "axios";

const IP = "https://serveeasy-backend-production.up.railway.app";

export async function signUpWithGoogle() {
  const url = `${IP}/api/v1/user/google`;
  const res = await fetch(url).then((response) => response.json());
  return res.data;
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
