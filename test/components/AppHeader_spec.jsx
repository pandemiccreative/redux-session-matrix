import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from '../../src/reducer';
import { Provider } from 'react-redux';
import { renderIntoDocument, scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';
import { Map, fromJS } from 'immutable';
import { AppHeaderContainer } from '../../src/components/AppHeader';
import { expect } from 'chai';

describe('AppHeader', () => {

  it('renders the title of the app based on the appTitle in state', () => {
    const store = createStore(reducer);
    const initialState = Map({appTitle: 'Sessions'});
    store.dispatch({
      type: 'SET_STATE',
      state: initialState
    })
    const component = renderIntoDocument(
      <Provider store={store}>
        <AppHeaderContainer />
      </Provider>
    );
    let head1 = scryRenderedDOMComponentsWithClass(component, 'app-title')[0];
    expect(head1.textContent).to.equal('Sessions');

    // const newState = Map({appTitle: 'New Sessions'});
    // component.setProps({appTitle: newState.get('appTitle')});
    // head1 = scryRenderedDOMComponentsWithClass(component, 'app-title')[0];
    // expect(head1.textContent).to.equal('Favorite Sessions');
  });

});
