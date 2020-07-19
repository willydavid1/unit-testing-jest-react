import React from 'react';
import { mount } from 'enzyme'; //nos permite montar el componente en el dom y trabajar con cada uno de sus items
import Footer from '../../components/Footer';

// describe mi suite para este componente
describe('<Footer />', () => {
  test('Render del componente Footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
