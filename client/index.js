const got = require('got')

const MOVIE_SERVICE_URL = process.env.MOVIE_SERVICE_URL || 'http://localhost:1234'

const request = ({ url, json, method, headers, query }) =>
    got(url, {
        headers,
        method,
        json,
        query,
        responseType: 'json'
    })

const getAllMovies = async () => {
    return request({ url: `${MOVIE_SERVICE_URL}/movies`, method: 'get' })
}

module.exports = {
    getAllMovies
}