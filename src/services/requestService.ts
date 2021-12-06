import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

export interface Response<T> extends AxiosResponse<T> {}

class RequestService {
  public static get<T>(url: string): Promise<Response<T>> {
    return axiosInstance.get<T, Response<T>>(url);
  }

  public static post<T>(url: string, data?: unknown): Promise<Response<T>> {
    return axiosInstance.post<T, Response<T>>(url, data);
  }

  public static put<T>(url: string, data?: unknown): Promise<Response<T>> {
    return axiosInstance.put<T, Response<T>>(url, data);
  }

  public static delete<T>(url: string): Promise<Response<T>> {
    return axiosInstance.delete<T, Response<T>>(url);
  }
}

export default RequestService;
