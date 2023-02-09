import axios from "axios";
import { URL } from "../utils/constants";

export const instance = axios.create({
    baseURL: URL,
    params: {key: '484129036', locale: 'en-US'},
    headers: {
        'X-RapidAPI-Key': '671846a48bmsh037942cf6e02898p1b36fdjsn02c1912962d8',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
})