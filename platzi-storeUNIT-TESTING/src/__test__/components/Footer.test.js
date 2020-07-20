import React from 'react';
import { mount } from 'enzyme'; //nos permite montar el componente en el dom y trabajar con cada uno de sus items ejemplo .find() para encontrar un elemento
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
