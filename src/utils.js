import axios from "axios"

// truncate text
export const truncateText = (text) => {
    if (text.length > 340) {
        return text.slice(0, 340) + "...."
    }
    return text
}

export const truncateOneLine = (text) => {
    if (text.length > 30) {
        return text.slice(0, 30) + "...."
    }
    return text
}

// axiosInstance
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
})


