import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "http://localhost:3030",
});

export default axiosBaseURL;
