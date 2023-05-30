
describe('GET /api/v2/reserves', () =>{
  test( 'Deberia retornar la lista de reservas', async () =>{
    const res = await request(app).get('/api/v2/reserves');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
