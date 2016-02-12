import React from 'react';
import ReactDOM from 'react-dom';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { Provider } from 'react-redux';
import App from './components/App';
import './less/core.less';

const sessions = require('./json/sessions.json').map((session) => Map(session));

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    appTitle: 'Sessions',
    favSessions: List.of('001', '002', '010'),
    sessions: List(sessions.map((session) => {return Map(session)})),
    rounds: 'asdf',
    page: 0
  }
});

store.dispatch({
  type: 'SET_TITLE',
  title: 'Sessions'
});

store.dispatch({
  type: 'ADD_FAV',
  id: '001'
});

store.dispatch({
  type: 'ADD_FAV',
  id: '002'
});

store.dispatch({
  type: 'DEL_FAV',
  id: '001'
});

store.dispatch({
  type: 'SET_SESSIONS',
  sessions: List(sessions)
});

store.dispatch({
  type: 'SET_ROUNDS',
  rounds: List.of(
    Map({
      displayName: 'Round 1',
      day: 'Tuesday, June 21',
      startTime: '9:15 AM',
      endTime: '10:45 AM'
    }),
    Map({
      displayName: 'Round 2',
      day: 'Tuesday, June 21',
      startTime: '10:45 AM',
      endTime: '12:00 PM'
    }),
    Map({
      displayName: 'Round 3',
      day: 'Tuesday, June 21',
      startTime: '2:00 PM',
      endTime: '3:15 PM'
    }),
    Map({
      displayName: 'Round 4',
      day: 'Tuesday, June 21',
      startTime: '3:45 PM',
      endTime: '4:30 PM'
    }),
    Map({
      displayName: 'Round 5',
      day: 'Tuesday, June 21',
      startTime: '4:45 PM',
      endTime: '6:00 PM'
    }),
    Map({
      displayName: 'Round 6',
      day: 'Wednesday, June 22',
      startTime: '8:00 AM',
      endTime: '9:15 AM'
    }),
    Map({
      displayName: 'Round 7',
      day: 'Wednesday, June 22',
      startTime: '9:30 AM',
      endTime: '10:45 AM'
    }),
    Map({
      displayName: 'Round 8',
      day: 'Wednesday, June 22',
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    }),
    Map({
      displayName: 'Round 9',
      day: 'Wednesday, June 22',
      startTime: '3:00 PM',
      endTime: '4:15 PM'
    }),
    Map({
      displayName: 'Round 10',
      day: 'Wednesday, June 22',
      startTime: '4:30 PM',
      endTime: '5:45 PM'
    })
  )
});

store.dispatch({
  type: 'SET_PAGE',
  page: 0
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
