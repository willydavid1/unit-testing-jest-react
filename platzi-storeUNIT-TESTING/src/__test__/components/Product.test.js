import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product'; // el componente Product recibe los valores que va a renderizar como la descripcion y precio por props

// ¿Cuándo utilizar mount y cuándo utilizar shallow?
// mount --> Cuando necesitas el DOM
// shallow --> Solo necesitas algo particular del componente. shallow es una función de Enzyme que se utiliza para probar componentes de forma aislada, ya que no renderiza los subcomponentes.

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });

  test('Comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn(); // llamamos a jest.fn() para no llamar la funcion original del proyecto cuando se hace click en el boton (es una funcion de jest que no hace nada)
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click'); // del componente Product busca el boton y simula un click
    expect(handleAddToCart).toHaveBeenCalledTimes(1); // comprobamos si se llama la funcion 1 vez
  });
});
