import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';
import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';
import SessionList from '../../src/components/SessionList';

describe('SessionList', () => {

  it('renders a session component for each session in the state', () => {
    const initialState = Map({
      sessions: [
        {
          "id": "81273",
          "Name": "Session 1 Title",
          "Type": {
            "DsiplayName": "SessionType 1",
          },
          "Room": {
            "DisplayName": "Room 1",
          },
          "SessionLevels": [
            {
              "DisplayName": "SessionLevel 1",
            }
          ]
        },
        {
          "id": "654354",
          "Name": "Session 1 Title",
          "Type": {
            "DsiplayName": "SessionType 1",
          },
          "Room": {
            "DisplayName": "Room 1",
          },
          "SessionLevels": [
            {
              "DisplayName": "SessionLevel 1",
            }
          ]
        },
        {
          "id": "35436",
          "Name": "Session 2",
          "Room": {
            "DisplayName": "Room 2",
          },
          "SessionLevels": [
            {
              "DisplayName": "SessionLevel 2",
            }
          ]
        }
      ]
    });
    const component = renderIntoDocument(
      <SessionList sessions={initialState.get('sessions')} />
    );
    const sessions = scryRenderedDOMComponentsWithClass(component, 'session-item');
    expect(sessions.length).to.equal(3);
  });

});
