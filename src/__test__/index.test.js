const randomStrings = require('../index')

//  describe una escructura una serie de pruebas dentro de un bloque una suite
describe('Probar funcionalidades de randomStrings', () => {
    test('Probar la funcionalidad', () => {
        expect(typeof randomStrings()).toBe('string')
    })
    test('Comprobar que no existe un ciudad', () => {
        expect(randomStrings()).not.toMatch(/Cordoba/)
    })
})