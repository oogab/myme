const swaggerUI = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test API with express',
    },
    host: 'localhost:3300',
    basePath: '/',
  },
  apis: ['./routes/*.js', './swagger/*', './models/*.js']
}

const specs = swaggerJsdoc(options)

module.exports = {
  swaggerUI,
  specs
}