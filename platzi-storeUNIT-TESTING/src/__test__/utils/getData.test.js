import getData from '../../utils/getData';

describe('Fetch API', () => {
  // Antes de cada prueba/test
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar a una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' })); // un mock que simula la respuesta de esa llamada y es la respuesta como tal de los siguientes fetch

    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com'); // garantiza que la llamada se esta ejecutando
  });
});
