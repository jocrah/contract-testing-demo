'use strict'

const provider = require('./expectations/provider')
const client = require('.')
const interactions = require('./expectations/interactions')
const { getMovieList } = interactions

describe('Movies', () => {
    before(async function () {
        await provider.setup().then(async () => {
            await provider.addInteraction(getMovieList)
        })
    })

    // should validate the interactions and create a contract
    afterEach(async () => {
        await provider.verify()
    })

    //write pacts to file
    after(async () => {
        await provider.finalize()
    })

    describe('GetAllMovies', () => {
        it('should get movie list from server', async function () {
            await client.getAllMovies()
        })
    })
})
