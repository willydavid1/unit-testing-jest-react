import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer'; // create: Crea una instancia, con el elemento React pasado como argumento luego podemos usar metodos como .toJSON() que Devuelve un objeto que representa el árbol renderizado en formato JSON.
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

// ¿Cuándo utilizar mount y cuándo utilizar shallow?
// mount --> Cuando necesitas el DOM
// shallow --> Solo necesitas algo particular del componente. shallow es una función de Enzyme que se utiliza para probar componentes de forma aislada, ya que no renderiza los subcomponentes.

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1); // se monta el componente?
  });

  test('Render del Titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header SnapShot con un Mock', () => {
  test('Comprobar el SnapShot de Header con Mock', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
