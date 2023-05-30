import swaggerJSDoc from "swagger-jsdoc";
/**
 * Configuracion del aPI
 */
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Api_Reservas_V2',
    version: '1.0.0',},
  servers:[{
    url: "http://localhost:3001/api"
  },
  {
    url: "http://localhost:3000/api"
  }
  ]
}

/**
 * Opciones
 */
const options = {
  swaggerDefinition,
  apis:[
    "./routes/*.js"
  ]
}

const openApiConfiguration = swaggerJSDoc(options)
export default  openApiConfiguration;
