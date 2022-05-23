import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:1338/",
  headers: {
    "Content-type": "application/json",
  },
});
