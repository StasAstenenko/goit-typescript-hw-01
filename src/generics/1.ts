import axios from "axios";

async function fetchData<T>(url: string): Promise<T | undefined> {
  try {
    const response = await axios.get<T>(url);
    if (typeof response === "object" && response !== null) {
      return response.data;
    }
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
