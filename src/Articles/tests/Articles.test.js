import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Articles from '../Articles';
import * as data from '../../data';

configure({ adapter: new Adapter() });

describe('Articles', () => {
  const setup = (props = {}) => shallow(
    <Articles
      articles={{ data: [] }}
      actions={{
        loadArticles: jest.fn(),
      }}
      {...props}
    />
  );

  it('should match snapshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render articles', () => {
    const articles = { data: data.articles.data }
    const wrapper = setup({ articles });

    expect(wrapper.find('MyListItem')).toHaveLength(data.articles.data.length);
  });

  it('should call clickHandler', () => {
    const articles = { data: data.articles.data };
    const clickHandler = jest.fn();
    const wrapper = setup({ articles, clickHandler });
    const first = wrapper.find('MyListItem').first();
    first.props().clickHandler();

    wrapper.setState();
  });

  it('should call clickHandler method', () => {
    const articles = { data: data.articles.data };
    const clickHandler = jest.fn();
    const wrapper = setup({ articles, clickHandler });
    wrapper.instance().clickHandler();
    expect(wrapper.state('myKey')).toBe({});

    
  });
});