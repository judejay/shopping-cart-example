import axios from "axios";

export default axios.create({
  baseURL: "https://0cf937f5-a71f-4b17-9a50-5895d739c295.mock.pstmn.io",
  headers: {
    "Content-type": "application/json"
  }
});
