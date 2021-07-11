import axios, { AxiosResponse } from "axios";
import { history } from '../routes/routesNavegation';

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export function setTokenOnHeader(token: any){
  api.interceptors.request.use(async config => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}

export function setTokenCheck(callback: Function) {
  api.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      return response
    }, 
    (error: any) => {
      console.log(error.response.status)
      if (error.response.status === 401) {
        callback();
        history.push('/login')
      }
    }
  );
}

export default api;