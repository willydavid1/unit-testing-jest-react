import React from 'react';
import { mount } from 'enzyme'; //nos permite montar el componente en el dom y trabajar con cada uno de sus items ejemplo .find() para encontrar un elemento
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

// describe mi suite para este componente
describe('<Footer />', () => {
  const footer = mount(<Footer />); // dejamos el footer en el cuerpo de la suite

  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

// Si no existe el snapshot lo crea y despues lo comprueba | cuando volvemos a correr las pruebas y si ya existe este snapshot lo que hace es compararlos
describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
