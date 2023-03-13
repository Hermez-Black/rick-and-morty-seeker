import axios from "axios"

export const getAxios = (url, callback) => {
    axios
        .get(url)
        .then(callback)
        .catch(err => console.error(err))
}