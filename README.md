# contract-testing-demo
A Consumer-Driven Contract Testing Demo

This is a simple setup to demonstrate how services can interact with a minimal expectation of breaking in production due to inevitable changes in a service which is being depended upon

This is done using the [pact library](https://github.com/pact-foundation/pact-js)

For simplicity, the project has the following services:
1. client (consumer)
2. api (provider)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

1. [Install Node and NPM](https://nodejs.org/en/download/)
2. [Install Docker](https://docs.docker.com/install/)


## STEPS FOR SETTING UP PROJECT
1. Check the settings in the `docker-compose.yml` file and run `docker-compose up -d` in root folder

This is to get a working mysql server running and also to start up the pact broker

2. Make sure to create a local database for the pacts to be stored in and reconfigure the environment for the pact broker in the `docker-compose.yml` file if need be


## LET'S GO ON A TOUR

![Consumer-Driven Contract Testing Flow](https://miro.medium.com/max/933/1*xCdHRuW6GUZYlouV5TIUyA.png)

Similar to the workflow of your usual consumer-driven contract tested application, we follow these steps

1. First run the consumer test, `npm run test:consumer`

With this action, the necessary pacts are created and stored in a newly created `pacts` folder

2. For local testing purposes, publish the generated pacts if everything checks out by running `npm run publish-pacts`.

NB: Unfortunately this is a Linux specific command in relation to `sh` and will be addressed soon.

3. Check the broker base url (localhost:9092) and see the pacts successfully published in a simple ui

![Published pact](https://user-images.githubusercontent.com/31732834/97657880-e968aa80-1a62-11eb-9aa8-93b0bdcbaf17.png)

4. Now we focus on our movie api which serves as our provider. We run `npm run test:provider`. This, if it passes, verifies the pact/contract and this can also be confirmed
in the broker ui served on localhost:9092

![pact2](https://user-images.githubusercontent.com/31732834/97658031-3ba9cb80-1a63-11eb-9f1e-c9f2c84d4f30.png)

5. To better appreciate this, tweak the response from the api and see as the provider test fails due to difference in expectation between what the contract expects and what the api is returning