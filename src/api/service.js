import axios from 'axios'

// Ambil Key 
const apiKey = '28970e639e0948eeab6a93a978b6840d'

export function getCurrency() {
    return axios({
        method: 'get',
        // url: `https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=IDR,GBP,EUR,JPY,CHF,CAD&base=IDR`
        url: 'https://api.currencyfreaks.com/supported-currencies'
    })
}