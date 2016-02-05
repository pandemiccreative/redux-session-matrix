import React from 'react';
import ReactDOM from 'react-dom';
import { Map, List, fromJS } from 'immutable';
import App from './components/App';
import './less/core.less';

const sessions = require('./json/sessions.json');
const initialState = {
  appTitle: 'Sessions',
  favSessions: ['001', '002', '003'],
  sessions: sessions,
  rounds: [
    {
      displayName: 'Round 1',
      day: 'Tuesday, June 21',
      startTime: '9:15 AM',
      endTime: '10:45 AM'
    },
    {
      displayName: 'Round 2',
      day: 'Tuesday, June 21',
      startTime: '10:45 AM',
      endTime: '12:00 PM'
    },
    {
      displayName: 'Round 3',
      day: 'Tuesday, June 21',
      startTime: '2:00 PM',
      endTime: '3:15 PM'
    },
    {
      displayName: 'Round 4',
      day: 'Tuesday, June 21',
      startTime: '3:45 PM',
      endTime: '4:30 PM'
    },
    {
      displayName: 'Round 5',
      day: 'Tuesday, June 21',
      startTime: '4:45 PM',
      endTime: '6:00 PM'
    },
    {
      displayName: 'Round 6',
      day: 'Wednesday, June 22',
      startTime: '8:00 AM',
      endTime: '9:15 AM'
    },
    {
      displayName: 'Round 7',
      day: 'Wednesday, June 22',
      startTime: '9:30 AM',
      endTime: '10:45 AM'
    },
    {
      displayName: 'Round 8',
      day: 'Wednesday, June 22',
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    },
    {
      displayName: 'Round 9',
      day: 'Wednesday, June 22',
      startTime: '3:00 PM',
      endTime: '4:15 PM'
    },
    {
      displayName: 'Round 10',
      day: 'Wednesday, June 22',
      startTime: '4:30 PM',
      endTime: '5:45 PM'
    }
  ],
  page: 0
};

ReactDOM.render(
  <App state={initialState} />,
  document.getElementById('app')
);
