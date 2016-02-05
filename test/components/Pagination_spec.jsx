import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';
import Pagination from '../../src/components/Pagination';

describe('Pagination', () => {

  it('creates a button for each chunk of sessions', () => {
    const chunks = List.of(List.of('1', '2'), List.of('3', '4'));
    const component = renderIntoDocument(
      <Pagination chunks={chunks} />
    );
    const btns = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(btns.length).to.equal(2);
  });

  it('invokes callback function when a button is clicked', () => {
    const chunks = List.of(List.of('1', '2'), List.of('1', '2'));
    let curPage = 0;
    const callBack = (entry) => curPage = entry;
    const component = renderIntoDocument(
      <Pagination chunks={chunks} chgPage={callBack} />
    );
    const btn = scryRenderedDOMComponentsWithTag(component, 'button')[1];
    Simulate.click(btn);

    expect(curPage).to.equal(1);
  });

});
