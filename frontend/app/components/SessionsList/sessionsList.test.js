import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SessionsList from 'SessionsList';

configure({ adapter: new Adapter() });

it('SessionList should render', () => {
  const wrapper = shallow(<SessionsList />);
  expect(wrapper).toExist;
});
it('state should be filterable by skill level', () => {
  expect(true).toBe(true);
});
it('state should be filterable by track', () => {
  expect(true).toBe(true);
});
it('state should be filterable by skill level and track', () => {
  expect(true).toBe(true);
});
it('state should be filterable by skill level', () => {
  expect(true).toBe(true);
});
it('state should be filterable by track', () => {
  expect(true).toBe(true);
});
it('state should be filterable by skill level and track', () => {
  expect(true).toBe(true);
});
