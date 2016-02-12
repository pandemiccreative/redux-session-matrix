import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import { createCookie, getCookie, addToCookie } from '../src/reducer';
import reducer from '../src/reducer.js';

describe('Reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        appTitle: 'Sessions',
        favSessions: List.of('001', '005', '010'),
        sessions: List.of(Map({
          Name: "Session 1",
          id: "2784ed66-116e-4ecd-aee6-1da56649f44d",
          faved: true
        }))
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      appTitle: 'Sessions',
      favSessions: ['001', '005', '010'],
      sessions: [
        {
          Name: 'Session 1',
          id: '2784ed66-116e-4ecd-aee6-1da56649f44d',
          faved: true
        }
      ]
    }))
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        appTitle: 'Sessions',
        favSessions: ['001', '005', '010'],
        sessions: [
          {
            Name: 'Session 1',
            id: '2784ed66-116e-4ecd-aee6-1da56649f44d',
            faved: true
          }
        ]
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      appTitle: 'Sessions',
      favSessions: ['001', '005', '010'],
      sessions: [
        {
          Name: 'Session 1',
          id: '2784ed66-116e-4ecd-aee6-1da56649f44d',
          faved: true
        }
      ]
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        appTitle: 'Sessions',
        favSessions: ['001', '005', '010'],
        sessions: [
          {
            Name: 'Session 1',
            id: '2784ed66-116e-4ecd-aee6-1da56649f44d',
            faved: true
          }
        ]
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      appTitle: 'Sessions',
      favSessions: ['001', '005', '010'],
      sessions: [
        {
          Name: 'Session 1',
          id: '2784ed66-116e-4ecd-aee6-1da56649f44d',
          faved: true
        }
      ]
    }));
  });

  it('handles TOGGLE_FAV', () => {
    const initialState = Map({
      appTitle: 'Sessions',
      favSessions: ['001', '005', '010'],
      sessions: List.of(Map({
        Name: 'Session 1',
        id: '2784ed66-116e-4ecd-aee6-1da56649f44d'
      }))
    });
    const action = {
      type: 'TOGGLE_FAV',
      state: Map({
        id: '2784ed66-116e-4ecd-aee6-1da56649f44d'
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState.getIn(['sessions', 0, 'faved'])).to.equal(true);
  });

  it('handles SET_FAV', () => {
    const initialState = Map();
    const action = {
      type: 'SET_FAV',
      state: Map({
        favSessions: List.of('001', '002', '003')
      })
    }
    const newState = reducer(initialState, action);

    expect(newState).to.equal(fromJS({
      favSessions: ['001', '002', '003']
    }));
  });

  it('handles SET_FAV and concats when favSessions already exists', () => {
    const initialState = Map({favSessions: List.of('001', '002', '003')});
    const action = {
      type: 'SET_FAV',
      state: Map({
        favSessions: List.of('004')
      })
    }
    const newState = reducer(initialState, action);

    expect(newState).to.equal(fromJS({
      favSessions: ['001', '002', '003', '004']
    }));
  });

  it('handles SET_FAV and does not add duplicate faved sessions', () => {
    const initialState = Map({favSessions: List.of('001', '002')});
    const action = {
      type: 'SET_FAV',
      state: Map({
        favSessions: List.of('001', '003')
      })
    }
    const newState = reducer(initialState, action);

    expect(newState).to.equal(fromJS({
      favSessions: ['001', '002', '003']
    }));
  });

  it('handles DEL_FAV', () => {
    const initialState = Map({favSessions: List.of('101', '201')});
    const action = {
      type: 'DEL_FAV',
      toDel: '101'
    }
    const newState = reducer(initialState, action);

    expect(newState).to.equal(fromJS({
      favSessions: ['201']
    }));
  });

  it('handles DEL_FAV and removes favSessions if none are left', () => {
    const initialState = Map({favSessions: List.of('101')});
    const action = {
      type: 'DEL_FAV',
      toDel: '101'
    }
    const newState = reducer(initialState, action);

    expect(newState).to.equal(Map());
  });

  it('handles ADD_FAV by adding faved to the session object', () => {
    const initialState = Map({sessions: List.of(Map({id: '001'}))});
    const action = {
      type: 'ADD_FAV',
      toAdd: '001'
    }
    const newState = reducer(initialState, action);

    expect(newState).to.equal(fromJS({
      sessions: [
        {
          id: '001',
          faved: true
        }
      ]
    }))
  });

});

// describe('createCookie', () => {
//
//   it('creates a cookie using the parameters provided', () => {
//     createCookie('TestCookie', 'TestVal');
//     const cookie = getCookie('TestCookie');
//
//     expect(cookie).to.equal('TestVal');
//   });
//
// });
//
// describe('addToCookie', ())
