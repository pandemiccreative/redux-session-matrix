import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import { createCookie, getCookie, addToCookie } from '../src/reducer';
import reducer from '../src/reducer.js';

describe('Reducer', () => {

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
