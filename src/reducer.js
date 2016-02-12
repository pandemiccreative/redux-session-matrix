import { combineReducers } from 'redux';
import { Map, List } from 'immutable';

function addFav(state, id){
  return state.push(id);
}

function delFav(state, id){
  return state.delete(state.findIndex((val) => val === id));
}

function setSessions(state, sessions){
  return state.merge(sessions);
}

function toggleFav(state, id){
  state.update(state.findIndex((val) => val.get('id') === id), (val) => console.log(val.get('faved')));
}

function setRounds(state, rounds){
  return state.merge(rounds);
}

function setPage(state, page){
  return page;
}

function setState(state, newState){
  return Map(state).merge(Map(newState)).toObject();
}

// function toggleFav(state, id){
//   const sessionIndex = state.get('sessions').findIndex((val) => {return val.get('id') === id});
//   return state.updateIn(['sessions', sessionIndex], (val) => {return val.set('faved', !val.get('faved'))})
// }

function setFav(state, newState){
  if(!!state.get('favSessions')){
    const newFavs = state.get('favSessions').toSet().union(newState.get('favSessions').toSet()).toList();
    // createCookie('favSessions', newFavs.toJS());
    return state.set('favSessions', newFavs);
  } else{
    const newFavs = newState.get('favSessions');
    // createCookie('favSessions', newFavs.toJS());
    return state.merge(newState);
  }
}





// function createCookie(cname, cvalue, expd){
//   let expires = '';
//   if(expd){
//     let d = new Date();
//     d.setTime(d.getTime() + (expd*24*60*60*1000));
//     expires = 'expires='+d.toUTCString();
//   };
//   document.cookie = cname + '=' + cvalue + ';' + expires;
//   console.log(document.cookie);
// }
//
// function getCookie(cname){
//   const name = cname + '=';
//   const ca = document.cookie.split(';');
//   let cdata = '';
//   ca.map((c) => {
//     while(c.charAt(0) === ' ') c = c.substring(1);
//     if(c.indexOf(name) === 0){
//       cdata = c.substring(name.length, c.length)
//     }
//   });
//   return cdata;
// }
//
// function addToCookie(cname, cvalue){
//   const currC = getCookie(cname);
//
//   if(!currC){
//     createCookie(cname, cvalue);
//   } else{
//     const cData = List(currC.split(','));
//     const fVal = cData.push(cvalue).toArray().join(',');
//     createCookie(cname, fVal);
//   }
// }

// const state = (state = {appTitle: 'Sessions'}, action) => {
//   switch(action.type){
//     case 'SET_STATE':
//       console.log(setState(state, action.state));
//       return setState(state, action.state);
//     default:
//       return state
//   }
// }

const appTitle = (state = '', action) => {
  switch(action.type){
    case 'SET_TITLE':
      return action.title;
    default:
      return state;
  }
}

const favSessions = (state = List([]), action) => {
  switch(action.type){
    case 'ADD_FAV':
      return addFav(state, action.id);
    case 'DEL_FAV':
      return delFav(state, action.id);
    default:
      return state;
  }
}

const sessions = (state = List([]), action) => {
  switch(action.type){
    case 'SET_SESSIONS':
      return setSessions(state, action.sessions);
    case 'TOGGLE_FAV':
      toggleFav(state, action.id);
      return state;
    default:
      return state;
  }
}

const rounds = (state = List([]), action) => {
  switch(action.type){
    case 'SET_ROUNDS':
      return setRounds(state, action.rounds);
    default:
      return state;
  }
}

const page = (state = 0, action) => {
  switch(action.type){
    case 'SET_PAGE':
      return setPage(state, action.page);
    default:
      return state;
  }
}

export const reducer = combineReducers({
  appTitle: appTitle,
  favSessions: favSessions,
  sessions: sessions,
  rounds: rounds,
  page: page
})

// export const reducer = (state = Map({
//   appTitle: 'Sessions',
//   favSessions: List([]),
//   sessions: List([]),
//   rounds: List([
//     Map({
//       displayName: 'Round 1',
//       day: 'Tuesday, June 21',
//       startTime: '9:15 AM',
//       endTime: '10:45 AM'
//     }),
//     Map({
//       displayName: 'Round 2',
//       day: 'Tuesday, June 21',
//       startTime: '10:45 AM',
//       endTime: '12:00 PM'
//     }),
//     Map({
//       displayName: 'Round 3',
//       day: 'Tuesday, June 21',
//       startTime: '2:00 PM',
//       endTime: '3:15 PM'
//     }),
//     Map({
//       displayName: 'Round 4',
//       day: 'Tuesday, June 21',
//       startTime: '3:45 PM',
//       endTime: '4:30 PM'
//     }),
//     Map({
//       displayName: 'Round 5',
//       day: 'Tuesday, June 21',
//       startTime: '4:45 PM',
//       endTime: '6:00 PM'
//     }),
//     Map({
//       displayName: 'Round 6',
//       day: 'Wednesday, June 22',
//       startTime: '8:00 AM',
//       endTime: '9:15 AM'
//     }),
//     Map({
//       displayName: 'Round 7',
//       day: 'Wednesday, June 22',
//       startTime: '9:30 AM',
//       endTime: '10:45 AM'
//     }),
//     Map({
//       displayName: 'Round 8',
//       day: 'Wednesday, June 22',
//       startTime: '2:00 PM',
//       endTime: '2:45 PM'
//     }),
//     Map({
//       displayName: 'Round 9',
//       day: 'Wednesday, June 22',
//       startTime: '3:00 PM',
//       endTime: '4:15 PM'
//     }),
//     Map({
//       displayName: 'Round 10',
//       day: 'Wednesday, June 22',
//       startTime: '4:30 PM',
//       endTime: '5:45 PM'
//     })
//   ]),
//   page: 0
// }), action) => {
//   return Map({
//     appTitle: appTitle(
//       state.get('appTitle'),
//       action
//     ),
//     favSessions: favSessions(
//       state.get('favSessions'),
//       action
//     ),
//     sessions: sessions(
//       state.get('sessions'),
//       action
//     ),
//     rounds: rounds(
//       state.get('rounds'),
//       action
//     ),
//     page: page(
//       state.get('page'),
//       action
//     )
//   });
//
//   // switch(action.type){
//   //   case 'SET_STATE':
//   //     return setState(state, action.state);
//   //   case 'TOGGLE_FAV':
//   //     return toggleFav(state, action.state.get('id'));
//   //   case 'SET_FAV':
//   //     return setFav(state, action.state);
//   //   case 'DEL_FAV':
//   //     return delFav(state, action.toDel);
//   //   case 'ADD_FAV':
//   //     return addFav(state, action.toAdd);
//   // }
//   // return state;
// }
