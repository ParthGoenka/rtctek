const request = require('supertest');
const app = require('../server'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock('../models/userModel');

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
  verify: jest.fn(() => ({ id: '123' })), 
}));

describe('User Controller Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Signup', () => {
    it('should create a new user and return a token', async () => {
      const userData = {
        name: 'John Doe',
        empid: '123',
        email: 'john@example.com',
        password: 'password123',
        dept: 'Engineering'
      };

      bcrypt.hash.mockResolvedValue('hashedpassword');
      User.findOne.mockResolvedValue(null); 
      User.prototype.save.mockResolvedValue(userData);
      jwt.sign.mockReturnValue('mockedtoken');

      const response = await request(app).post('/api/signup').send(userData);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('User added successfully');
      expect(response.body.token).toBe('mockedtoken');
    });

    it('should return an error if user already exists', async () => {
      const userData = {
        name: 'John Doe',
        empid: '123',
        email: 'john@example.com',
        password: 'password123',
        dept: 'Engineering'
      };

      User.findOne.mockResolvedValue(userData); 

      const response = await request(app).post('/api/signup').send(userData);

      expect(response.status).toBe(409);
      expect(response.body.message).toBe('User already exists');
    });

    it('should return an error if required fields are missing', async () => {
      const userData = { name: 'John Doe' }; 

      const response = await request(app).post('/api/signup').send(userData);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('All fields are required to fill');
    });
  });

  describe('Login', () => {
    it('should login the user and return a token', async () => {
      const userData = {
        empid: '123',
        password: 'password123'
      };

      const existingUser = {
        empid: '123',
        password: 'hashedpassword'
      };

      bcrypt.compare.mockResolvedValue(true);
      User.findOne.mockResolvedValue(existingUser);
      jwt.sign.mockReturnValue('mockedtoken');

      const response = await request(app).post('/api/login').send(userData);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Login successful');
      expect(response.body.token).toBe('mockedtoken');
    });

    it('should return an error if credentials are invalid', async () => {
      const userData = {
        empid: '123',
        password: 'password123'
      };

      User.findOne.mockResolvedValue(null);

      const response = await request(app).post('/api/login').send(userData);

      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Invalid credentials');
    });

    it('should return an error if password is incorrect', async () => {
      const userData = {
        empid: '123',
        password: 'wrongpassword'
      };

      const existingUser = {
        empid: '123',
        password: 'hashedpassword'
      };

      bcrypt.compare.mockResolvedValue(false); 
      User.findOne.mockResolvedValue(existingUser);

      const response = await request(app).post('/api/login').send(userData);

      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Invalid credentials');
    });
  });

  describe('User Details', () => {
    it('should fetch user details by empid', async () => {
      const user = {
        empid: '123',
        name: 'John Doe',
        email: 'john@example.com',
        dept: 'Engineering'
      };

      User.findOne.mockResolvedValue(user);

      jwt.verify.mockReturnValue({ id: '123' });

      const response = await request(app)
        .get('/api/dashboard/123')
        .set('Authorization', 'Bearer mockedtoken'); 

      expect(response.status).toBe(200);
      expect(response.body.empid).toBe('123');
      expect(response.body.name).toBe('John Doe');
    });

    it('should return an error if user is not found', async () => {
      User.findOne.mockResolvedValue(null); 
      jwt.verify.mockReturnValue({ id: '123' });

      const response = await request(app)
        .get('/api/dashboard/997')
        .set('Authorization', 'Bearer mockedtoken'); 

      expect(response.status).toBe(404);
      expect(response.body.message).toBe('No user found');
    });
  });

  describe('Users by Department', () => {
    it('should return all users from a specific department', async () => {
      const users = [
        { empid: '123', name: 'John Doe', dept: 'Engineering' },
        { empid: '124', name: 'Jane Doe', dept: 'Engineering' }
      ];

      User.find.mockResolvedValue(users);

      jwt.verify.mockReturnValue({ id: '123' });

      const response = await request(app)
        .get('/api/users/Engineering')
        .set('Authorization', 'Bearer mockedtoken'); 

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0].dept).toBe('Engineering');
    });

    
  });
});
