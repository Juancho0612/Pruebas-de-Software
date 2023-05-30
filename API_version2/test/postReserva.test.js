
describe('POST /api/v2/reserves/', ()=>{
  test('Deberia crear una reserva ', async () =>{
    const res = await request(app)
    .post(`/api/v2/reserves`)
    .send({
      tipo: 'prueba',
      fecha: '2023-06-06',
      hora: '12:12pm',
      personas: 1
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.tipo).toEqual('prueba');
    expect(res.body.fecha).toEqual('2023-06-06');
    expect(res.body.hora).toEqual('12:12pm');
    expect(res.body.personas).toEqual(1);
  });
  test('Deberia dar error si falla un campo requerido', async () =>{
    const res = await request(app)
      .post('/api/v2/reserves')
      .send({
        tipo: 'prueba'
      });
      expect(res.statusCode).toEqual(500);
  });
});
