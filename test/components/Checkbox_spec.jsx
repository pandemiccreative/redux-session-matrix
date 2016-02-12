import React from 'react';
import ReactDOM from 'react';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, findRenderedDOMComponentWithTag, Simulate } from 'react-addons-test-utils';
import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';
import Checkbox from '../../src/components/Checkbox';

describe('Checkbox', () => {

  // it('invokes a callback function when toggled', () => {
  //   let theType;
  //   let theVal;
  //   const toggle = (type, val) => {
  //     theType = type;
  //     theVal = val;
  //   };
  //   const component = renderIntoDocument(
  //     <Checkbox className='favoritesCheck' value='favorites' name='favorites' toggle={toggle} />
  //   );
  //   const checkbox = findRenderedDOMComponentWithTag(component, 'input');
  //   Simulate.change(checkbox, {target: {checked: true, type: 'checkbox'}});
  //
  //   expect(theType).to.equal('checkbox');
  //   expect(theVal).to.equal('favorites');
  //
  // });

});
