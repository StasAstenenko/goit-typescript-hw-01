import axios, { AxiosResponse } from "axios";

async function fetchData(url: string) {
  try {
    const response: AxiosResponse = await axios.get(url);
    if (typeof response === "object" && response !== null) {
      return response.data;
    }
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
  return null;
}
