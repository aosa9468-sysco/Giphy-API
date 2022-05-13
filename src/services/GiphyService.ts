import { GIPHY_API_KEY } from "../constants";

const GIPHY_URL = 'https://api.giphy.com/v1/gifs';

export const getTrendingGifs = async (offset: number) => {
    return fetch(GIPHY_URL + '/trending?api_key=' + GIPHY_API_KEY + '&offset=' + offset)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            else {
                throw Error(response.statusText)
            }
        })
}

export const getSearchingGifs = async (offset: number, searchVal: any) => {
    return fetch(GIPHY_URL +'/search?api_key=' + GIPHY_API_KEY + '&offset=' + offset + '&q=' + searchVal)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            else {
                throw Error(response.statusText)
            }
        })
}