import { API_KEY } from "./keys.js";
import { renderList } from "./rendercard.js";

const BASE_URL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const GET = async (endpoint, page = 1) => {
    const response = await fetch(
      `${BASE_URL}${endpoint}?page=${page}&include_adult=false`,
      options
    );
  
    const data = await response.json();
  
    console.log("log di get", {
      page: data.page,
      endpoint,
    });
  
    return data;
  };

