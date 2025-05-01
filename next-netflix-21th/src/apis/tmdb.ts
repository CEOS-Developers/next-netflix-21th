import { axiosInstance } from "./axios";

export const getTrendingAllDay = () => 
  axiosInstance.get("/trending/all/day", {
    params: { language: "ko-KR" },
  });