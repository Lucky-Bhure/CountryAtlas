import axios from "axios"

export const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

// Get Coutry Data
export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags")
}

// Get Coutry Data
export const getIndividualCountryData = (country) => {
    return api.get(`/name/${country}?fullields=name,population,region,subregion,capitat,tld,currencies,languages,borders,flags`)
}
