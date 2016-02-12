import React from 'react';
import { connect } from 'react-redux';
import SessionContainer from './Session';

const SessionList = React.createClass({
  getSessions: function(){
    return this.props.sessions || List([]);
  },
  render: function(){
    return(
      <ul>
        {this.getSessions().map((session) => {
          return(<button onClick={() => this.props.onFavClick(session.get('id'))}>{session.get('id')}</button>)
        })}
      </ul>
    );
  }
});

function mapStateToProps(state){
  return{
    sessions: state.sessions
  };
}

function mapDispatchToProps(dispatch){
  return{
    onFavClick: (id) => {
      dispatch(
        {
          type: 'TOGGLE_FAV',
          id
        }
      )
    }
  };
}

export const SessionListContainer = connect(mapStateToProps, mapDispatchToProps)(SessionList);

// {this.getSessions().map(entry => {
//   return(<SessionContainer key={entry.get('id')} {...entry.toObject()} />);
// })}
