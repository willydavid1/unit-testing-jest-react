import React from 'react';
import { mount, shallow } from 'enzyme';
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
