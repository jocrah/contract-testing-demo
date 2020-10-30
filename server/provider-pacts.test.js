const { Verifier } = require('@pact-foundation/pact')

const app = require('./app')

app.listen(8081, () => {
    console.log('Provider service listening on http://localhost:8081')
})

// Verify that the provider meets all consumer expectations
describe('Pact Verification', () => {
    it('should validate the expectations of IMDB Consumer', async () => {
        let opts = {
            provider: 'MovieService',
            providerBaseUrl: 'http://localhost:8081',
            pactBrokerUrl: 'http://localhost:9292',
            // pactBrokerUsername: 'dXfltyFMgNOFZAxr8io9wJ37iUpY42M',
            // pactBrokerPassword: 'O5AIZWxelWbLvqMd8PkAVycBJh2Psyg1',
            publishVerificationResult: true,
            providerVersion: '1.0.0',
        }

        await new Verifier(opts).verifyProvider()
    })
})