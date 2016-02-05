import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';
import { Map, fromJS } from 'immutable';
import AppHeader from '../../src/components/AppHeader';
import { expect } from 'chai';

describe('AppHeader', () => {

  it('renders the title of the app based on the appTitle in state', () => {
    const initialState = Map({appTitle: 'Sessions'});
    const component = renderIntoDocument(
      <AppHeader appTitle={initialState.get('appTitle')} />
    );
    let head1 = scryRenderedDOMComponentsWithClass(component, 'app-title')[0];
    expect(head1.textContent).to.equal('Sessions');

    const newState = initialState.set('appTitle', 'Favorite Sessions');
    component.setProps({appTitle: newState.get('appTitle')});
    head1 = scryRenderedDOMComponentsWithClass(component, 'app-title')[0];
    expect(head1.textContent).to.equal('Favorite Sessions');
  });

});
