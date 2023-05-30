const request = require('supertest')
const mongoose = require('mongoose');
import Reserve from '../models/reserves';
import app from '../index';

beforeAll(async () =>{
  const url = process.env.MONGO_URI
  await mongoose.connect(url, {useNewUrlParser: true});
});

describe('GET /api/v2/reserves', () =>{
  it('Deberia obtener todos las reservas', async () =>{
    const reservas = [
      {tipo: 'VIP', fecha: '2023-09-20', hora: '2:30pm', personas:4},
      {tipo: 'VIP', fecha: '2023-09-20', hora: '2:30pm', personas:4},
    ];
    await Reserve.insertMany(reservas);

    const response = await request(app).get('/api/v2/reserves');
    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(reservas.length);
    expect(response.body[0].tipo).toBe(reservas[0].tipo);
    expect(response.body[1].fecha).toBe(reservas[1].fecha);
    expect(response.body[2].hora).toBe(reservas[2].hora);
    expect(response.body[3].personas).toBe(reservas[3].personas);
  });
});

afterEach(async () =>{
  await Reserve.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
})
