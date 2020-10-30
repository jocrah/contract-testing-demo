'use strict'
const { eachLike } = require('@pact-foundation/pact').Matchers

const ONE_MOVIE_BODY = { name: 'Foo' }

module.exports = {
    getMovieList: {
        state: 'it has an array of movies',
        uponReceiving: 'a request to retrieve movie list',
        withRequest: {
            method: 'GET',
            path: '/movies'
        },
        willRespondWith: {
            status: 200,
            body: eachLike(ONE_MOVIE_BODY)
        }
    }
}
