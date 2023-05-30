
describe('PUT /api/v2/reserves/:id', ()=>{
  test('Deberia actualizar una reserva existente', async () =>{
    const res = await request(app)
    .put(`/api/reserves/${newReserveId}`)
    .send({
      tipo: 'prueba',
      fecha: '2023-06-06',
      hora: '12:12pm',
      personas: 1
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.tipo).toEqual('prueba');
  });
  test('Deberia dar error si se le pasa un ID inválido', async () =>{
    const res = await request(app)
      .put('/api/v2/reserves/1234')
      .send({
        tipo: 'prueba',
        fecha: '2023-06-06',
        hora: '12:12pm',
        personas: 1
      });
      expect(res.statusCode).toEqual(500);
  });
});
