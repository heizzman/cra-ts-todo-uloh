import axios from "axios";
import { APP_USERID, API_URL } from '../utils/consts'

const api = axios.create({
  baseURL: API_URL,
});

const getTodo = async () => {
  
  const { data } = await api.get(API_URL, { params: { userId: APP_USERID } })
  return data

}

export const http = { getTodo };