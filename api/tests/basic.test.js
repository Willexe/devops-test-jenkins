const request = require('supertest');
const app = require('../index.js'); // Certifique-se que o 'index.js' exporta a instância do app

describe('Testes básicos da API', () => {
  it('GET / deve retornar status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
