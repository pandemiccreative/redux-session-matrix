import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, findRenderedDOMComponentWithTag, Simulate } from 'react-addons-test-utils';
import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';
import Session from '../../src/components/Session';

describe('Session', () => {

  it('renders the correct data from state', () => {
    const initialState = Map({
      sessions: [
        {
          "Name": "Session 1 Title",
          "Type": {
            "DisplayName": "SessionType 1",
          },
          "Room": {
            "DisplayName": "Room 1",
          },
          "SessionLevels": [
            {
              "DisplayName": "SessionLevel 1",
            }
          ]
        }
      ]
    });
    const component = renderIntoDocument(
      <Session {...initialState.get('sessions')[0]} />
    );
    const sessionTitle = scryRenderedDOMComponentsWithTag(component, 'h6')[0];
    expect(sessionTitle.textContent).to.equal('Session 1 Title');
    const sessionLevel = ReactDOM.findDOMNode(component.refs.sessionLevel);
    expect(sessionLevel.textContent).to.equal('Level: SessionLevel 1');
    const sessionType = ReactDOM.findDOMNode(component.refs.sessionType);
    expect(sessionType.textContent).to.equal('Type: SessionType 1');
    const sessionRoom = ReactDOM.findDOMNode(component.refs.sessionRoom);
    expect(sessionRoom.textContent).to.equal('Room: Room 1');
  });

  it('invokes callback when the fav button is clicked', () => {
    const initialState = Map({
      sessions: [
        {
          "id": "81273",
          "Name": "Session 1 Title",
          "Type": {
            "DisplayName": "SessionType 1",
          },
          "Room": {
            "DisplayName": "Room 1",
          },
          "SessionLevels": [
            {
              "DisplayName": "SessionLevel 1",
            }
          ]
        }
      ]
    });
    let faved;
    const fav = (entry) => faved = entry;
    const component = renderIntoDocument(
      <Session {...initialState.get('sessions')[0]} onFav={fav} />
    );
    const btn = findRenderedDOMComponentWithTag(component, 'svg');
    Simulate.click(btn);

    expect(faved).to.equal('81273');
  })

});
