[![Pipeline](https://github.com/taller2-grupo5-rostov-1c2022/NodeServer/actions/workflows/pipeline.yml/badge.svg)](https://github.com/taller2-grupo5-rostov-1c2022/NodeServer/actions/workflows/pipeline.yml) [![codecov](https://codecov.io/gh/taller2-grupo5-rostov-1c2022/NodeServer/branch/master/graph/badge.svg?token=5KKSSYYSZV)](https://codecov.io/gh/taller2-grupo5-rostov-1c2022/NodeServer)

# Node Server

## Set Up

### Node 16

##### Using [Node Version Manager](https://github.com/nvm-sh/nvm)

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm install 16
```

##### Just Node

Download and run the installer from [nodejs.org](https://nodejs.org)

### Dependencies

```
npm i
```

## Running the server

- Development: `npm run dev`
- Production: `npm start`
- Production Container: `npm run docker:compose`

> Default port : `8080`

## Documentation

Documentation will be generated at `{app}/api-docs`

- Swagger [ [Example](https://petstore.swagger.io/) ]
- Automatic Documentation [ [Tutorial](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do) ]

## Workflow - CI/CD

- Cancel Redundant Deploys
- Setup ( Checkout Repo , Install Node & Dependencies )
- Run Linter
- Run Tests
- Upload Test Coverage
- Deploy to heroku

### Upload Coverage to Codecov

The pipeline automatically generates a coverage report and uploads it to [codecov](https://codecov.io/gh/NicolasEzequielZulaicaRivera/nodeserver)

You'll need to set the following actions secrets:

- `CODECOV_TOKEN`: Repo Token
  > Can be obtained on codecov when setting up or on settings

### Deploy to Heroku

The pipeline deploys the server automatically on pushing to **master**

You should create the app on heroku first

You'll need to set the following actions secrets:

- `HEROKU_NAME`: App name
- `HEROKU_EMAIL`: Account email
- `HEROKU_API_KEY`: Account API key
- `API_KEY`: This app's api-key, needed to make requests

##### Generating API Key

```
$ heroku login
$ heroku authorizations:create
```

use token from created auth

#### Deploy

- [Deploy to Heroku](https://github.com/marketplace/actions/deploy-to-heroku)

## Resources

- [Node-Express](https://www.youtube.com/watch?v=-MTSQjw5DrM)
- [Autogenerate Docs](https://www.youtube.com/watch?v=apouPYPh_as)
- [Docker](https://www.youtube.com/watch?v=gAkwW2tuIqE)
- [CI/CD](https://youtu.be/sIhm4YOMK6Q) [ [playlist](https://www.youtube.com/playlist?list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7) | [fullstackopen](https://fullstackopen.com/en/) ]
