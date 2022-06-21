import axios, { AxiosResponse } from "axios";

interface Response {
  isAverage: boolean;
  nama: string;
  harga: number;
}

interface RootObject {
  success: boolean;
  response: Response[];
}

export default async (): Promise<RootObject> => {
  const url: any = process.env.URL_SEMBAKO_MANAGEMENT_SERVICE;
  const { data }: AxiosResponse = await axios.get(url);
  return data;
};
