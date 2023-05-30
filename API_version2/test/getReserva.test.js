
describe('GET /api/v2/reserves/:id', () =>{
  test('Deberia obtener una reserva por su ID', async () =>{
    const res = await request(app).get(`/api/v2/reserves/${newReserveId}`);
    expect(res.statusCode).toEqual(404);
  });
  test('Deberia dar error si se le pasa un ID invalido', async () => {
    const res = await request(app).get('/api/v2/reserves/12345')
  })
})
