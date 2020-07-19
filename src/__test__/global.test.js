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


// Implementando pruebas a promesas
const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if (!str) reject(Error('Error'))
        resolve(str.split("").reverse().join(""))
    })
}

test('Probar una promesa', () => {
    return reverseString2('Hola')
        .then((string) => {
            expect(string).toBe('aloH')
        })
})

test('Probar async/await', async () => {
    const string = await reverseString2("hola")
    expect(string).toBe('aloh')
})

// funciones que se ejecutan antes o despues de cada prueba
// afterEach(() => console.log('Despues de cada prueba'))
// afterAll(() => console.log('Despues de todas las pruebas'))

// beforeEach(() => console.log('Antes de cada prueba'))
// beforeAll(() => console.log('Antes de todas las pruebas'))