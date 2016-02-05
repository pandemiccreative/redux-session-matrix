import { Map, List } from 'immutable';

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

function delFav(state, toDel){
  let newState = state;
  state.get('favSessions').map((entry, i) => {
      if(entry === toDel){ newState = state.set('favSessions', state.get('favSessions').delete(i))};
  });

  if(newState.get('favSessions').size < 1) newState = newState.remove('favSessions');

  return newState;
}

function addFav(state, toAdd){
  const hold = state.get('sessions').find((entry) => {return entry.get('id') === toAdd}).set('faved', true);
  const updatedSession = state.get('sessions').merge(List.of(hold));
  return state.set('sessions', updatedSession);
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

export default function(state = Map(), action){
  switch(action.type){
    case 'SET_FAV':
      return setFav(state, action.state);
    case 'DEL_FAV':
      return delFav(state, action.toDel);
    case 'ADD_FAV':
      return addFav(state, action.toAdd);
  }
  return state;
}
