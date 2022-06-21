// Fetcher
import getHargaSembako from "../fetcher/getHargaSembako";

interface Response {
  isAverage: boolean;
  nama: string;
  harga: number;
}

interface ResponseMessage {
  code?: number;
  message?: string;
  render?: { [key: string]: any };
}

export default async (): Promise<Response[] | ResponseMessage> => {
  try {
    const response = await getHargaSembako();
    return {
      code: 200,
      render: {
        list: response.response,
      },
    };
  } catch (error) {
    return {
      code: 500,
      message: "server terkendala",
    };
  }
};
