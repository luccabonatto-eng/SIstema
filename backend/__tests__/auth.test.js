const request = require('supertest');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Mock da API
const app = express();
app.use(express.json());

const authRoutes = require('../src/routes/auth');
app.use('/api/auth', authRoutes);

describe('Authentication API', () => {
  describe('POST /api/auth/login', () => {
    test('should return 400 if email or password is missing', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@example.com' });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error');
    });

    test('should return 401 for invalid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'nonexistent@opticom.com.br',
          password: 'wrongpassword'
        });

      expect(res.statusCode).toBe(401);
      expect(res.body).toHaveProperty('error');
    });

    test('should return 200 and token for valid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'joao@opticom.com.br',
          password: 'senha123'
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('user');
      expect(res.body.user).toHaveProperty('id');
      expect(res.body.user).toHaveProperty('email');
      expect(res.body.user).toHaveProperty('role');
    });

    test('should return valid JWT token', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'joao@opticom.com.br',
          password: 'senha123'
        });

      const token = res.body.token;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      expect(decoded).toHaveProperty('id');
      expect(decoded).toHaveProperty('email');
      expect(decoded.email).toBe('joao@opticom.com.br');
    });
  });

  describe('POST /api/auth/register', () => {
    test('should return 400 if required fields are missing', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ email: 'test@example.com' });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error');
    });

    test('should register new user successfully', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Novo Usuário',
          email: `newuser${Date.now()}@opticom.com.br`,
          password: 'TestPassword123',
          role: 'TECHNICIAN'
        });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('user');
      expect(res.body.user).toHaveProperty('id');
    });
  });

  describe('GET /api/auth/me', () => {
    let validToken;

    beforeAll(async () => {
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'joao@opticom.com.br',
          password: 'senha123'
        });

      validToken = loginRes.body.token;
    });

    test('should return 401 if no token provided', async () => {
      const res = await request(app).get('/api/auth/me');

      expect(res.statusCode).toBe(401);
    });

    test('should return current user with valid token', async () => {
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${validToken}`);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('user');
      expect(res.body.user.email).toBe('joao@opticom.com.br');
    });
  });

  describe('POST /api/auth/refresh', () => {
    let validToken;

    beforeAll(async () => {
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'joao@opticom.com.br',
          password: 'senha123'
        });

      validToken = loginRes.body.token;
    });

    test('should return new token', async () => {
      const res = await request(app)
        .post('/api/auth/refresh')
        .set('Authorization', `Bearer ${validToken}`);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body.token).toBeTruthy();

      // Verificar que é um JWT válido
      const decoded = jwt.verify(res.body.token, process.env.JWT_SECRET);
      expect(decoded).toHaveProperty('id');
      expect(decoded).toHaveProperty('email');
    });

    test('should return 401 if no token provided', async () => {
      const res = await request(app).post('/api/auth/refresh');

      expect(res.statusCode).toBe(401);
    });
  });
});
