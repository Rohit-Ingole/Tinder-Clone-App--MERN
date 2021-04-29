import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-rvi.herokuapp.com",
});

export default instance;
