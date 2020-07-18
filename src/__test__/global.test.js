// la funcion test recibe dos parametros: Un string que describe lo que va a pasar. Función anonima que viene lo que se va a probar
// La función expect: valor de entrada, sobre que lo voy a comparar usando .toMach()
const text = "Hola Mundo"
const fruits = ['manzana', 'melon', 'banana']

test('Debe contener un texto ', () => {
    expect(text).toMatch(/Mundo/);
});

test('¿Tenemos una banana?', () => {
    expect(fruits).toContain('banana') //recibe un array y compara si este array contiene el string banana
})

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9) //si 10 es mayor que 9 paso el test
})

test('Es Verdadero?', () => {
    expect(true).toBeTruthy() //comprueba si el valor es verdadero
})


// funcion que llama al callback y le pasa el string en reverse
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

test('Probar un Callback', () => {
    reverseString("Hola", (str) => {
        expect(str).toBe('aloH')
    })
})
