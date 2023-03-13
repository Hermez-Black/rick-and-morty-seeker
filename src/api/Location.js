import axios from "axios";
import { LOCATION_ENPOINT } from "../constants";

export const getRandomLocation = (url = null, setMethod = null) => {
  const randomIndex = Math.floor(Math.random() * 125) + 1;
  const randomLocation = axios
    .get(`${LOCATION_ENPOINT}${randomIndex}`)
    .then((res) => {
      return res.data;
    })
    .catch(err => console.error(err));
  return randomLocation;
}

export const getLocationByInputId = (id) => {
  return axios
    .get(`${LOCATION_ENPOINT}${id}`)
    .then((res) => {
      return res.data;
    })
    .catch(err => console.error(err));
}