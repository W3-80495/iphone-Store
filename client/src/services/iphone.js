import axios from "axios";
import { createUrl, createError } from "./utils";

export async function getAllIphone() {
    try {
        const url = createUrl('iphone')
        const headers = {
            headers: {
                token: sessionStorage['token']
            }
        }
        
        const response = await axios.get(url, headers)
        return response.data
    } catch (ex) {
        return createError(ex)
    }
}