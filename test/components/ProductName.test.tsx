import React from 'react';
import renderer from 'react-test-renderer';
import { ProductName, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('Product Name', () => {
  test('Should render the component with its custom name', () => {
    const wrapper = renderer.create(<ProductName name="Custom Name" />);
    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should render the component with its default name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductName />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
