import axios from "axios";

export const getCharacterById = (url) => {
    return axios
        .get(url)
        .then(res => res.data)
        .catch(err => console.error(err));
}