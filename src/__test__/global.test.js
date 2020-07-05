// la funcion test recibe dos parametros: Un string que describe lo que va a pasar. Función anonima que viene lo que se va a probar
// La función expect: valor de entrada, sobre que lo voy a comparar usando .toMach()
const text = "Hola Mundo"

test('Debe contener un texto ', () => {
    expect(text).toMatch(/Mundo/);
});
