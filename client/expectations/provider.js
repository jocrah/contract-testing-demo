'use strict'

const path = require('path')
const { Pact } = require('@pact-foundation/pact')

const provider = new Pact({
    consumer: "IMDB", // current service at hand, it makes it easier to know who would be broken by the change in the provider when we test the contract.
    provider: 'MovieService', // required, so we know who will need to verify the pact
    port: 1234, // where the mock service should be listening
    log: path.resolve(__dirname, '../../logs', 'expectation-integration.log'), // path to the file where logs should be stored
    logLevel: 'ERROR', // one of 'TRACE', 'DEBUG', 'INFO', 'ERROR', 'FATAL' OR 'WARN'
    dir: path.resolve(__dirname, '../../pacts'), // path to the files where the pact should be saved
})

module.exports = provider
