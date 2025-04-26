import axios, { AxiosResponse } from "axios";

const serverPath = "https://api.unsplash.com/search/photos/";
const key = "9o91SUnM_Hj-Zab96NPuLkle7Ye1X7d3y5GXBjMOW3g";

export const getGalleryByQuery = async <T>(topic: string, currentPage: number): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get<T>(serverPath, {
    params: { 
      client_id: key,
      query: topic,
      page: currentPage,
      per_page: 12,
      orientation: "landscape",
    },
  });

  return response.data;
};

