const swaggerAutogen = require('swagger-autogen')();
const doc = {
  info: {
    title: 'Member API',
    description: 'Description'
  },
  host: 'localhost:3001'
};

const outputFile = './swagger_output.json';
const routes = ['./routes/member_route.js'];  