describe('DELETE /api/v2/reserves/:id', () =>{
  test('Deberia eliminar una reserva existente', async () =>{
    const res = await request(app).delete(`/api/v2/reserves/${newReserveId}`);
    expect(res.statusCode).toEqual(200);
  });
  test('Deberia dar error si se le pasa un ID invalido', async () => {
    const res = await request(app).get('/api/v2/reserves/12345')
    expect(res.statusCode).toEqual(500);
  })
})
