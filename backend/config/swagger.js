const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Opticom ERP API',
      version: '1.0.0',
      description: 'API REST para Sistema ERP Opticom',
      contact: {
        name: 'Opticom',
        url: 'https://opticomservice.com.br'
      }
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server'
      },
      {
        url: 'https://api.opticom.com',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT token obtido através do endpoint /auth/login'
        }
      },
      schemas: {
        User: {
          type: 'object',
          required: ['email', 'password', 'name'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            role: { type: 'string', enum: ['ADMIN', 'MANAGER', 'TECHNICIAN'] },
            status: { type: 'string', enum: ['ACTIVE', 'INACTIVE'] },
            lastLogin: { type: 'string', format: 'date-time' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Customer: {
          type: 'object',
          required: ['type', 'name', 'doc'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            type: { type: 'string', enum: ['PJ', 'PF'] },
            name: { type: 'string' },
            doc: { type: 'string' },
            city: { type: 'string' },
            phone: { type: 'string' },
            email: { type: 'string', format: 'email' },
            revenue: { type: 'integer' },
            active: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Contract: {
          type: 'object',
          required: ['number', 'customer_id', 'type', 'value', 'start_date', 'end_date'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            number: { type: 'string' },
            customer_id: { type: 'string', format: 'uuid' },
            type: { type: 'string', enum: ['MONTHLY', 'ANNUAL', 'QUARTERLY'] },
            value: { type: 'integer' },
            start_date: { type: 'string', format: 'date' },
            end_date: { type: 'string', format: 'date' },
            status: { type: 'string', enum: ['ACTIVE', 'EXPIRED', 'SUSPENDED'] },
            sla_hours: { type: 'integer' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Order: {
          type: 'object',
          required: ['number', 'customer_id', 'type'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            number: { type: 'string' },
            customer_id: { type: 'string', format: 'uuid' },
            type: { type: 'string', enum: ['Instalação', 'Manutenção', 'Revisão', 'Emergência'] },
            priority: { type: 'string', enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'] },
            status: { type: 'string', enum: ['OPEN', 'SCHEDULED', 'IN_PROGRESS', 'IN_TRANSIT', 'COMPLETED', 'INVOICED', 'CANCELLED'] },
            assigned_technician_id: { type: 'string', format: 'uuid' },
            scheduled_date: { type: 'string', format: 'date' },
            completed_date: { type: 'string', format: 'date' },
            substation: { type: 'string' },
            city: { type: 'string' },
            description: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      }
    },
    security: [
      {
        BearerAuth: []
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJsdoc(options);
