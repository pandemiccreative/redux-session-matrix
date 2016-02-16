import React from 'react';
import { connect } from 'react-redux';
import Session from './Session';

const SessionList = React.createClass({
  render: function(){
    return(
      <ul>
        {this.props.sessions.map((session) => {
          return(
            <Session key={session.get('id')} onFav={this.props.onFavClick} session={session} />
          );
        })}
      </ul>
    );
  }
});

function mapDispatchToProps(dispatch){
  return{
    onFavClick: (id) => {
      dispatch(
        {
          type: 'TOGGLE_FAV',
          id
        }
      )
      dispatch(
        {
          type: 'REFRESH_FAVS'
        }
      )
    }
  };
}

export const SessionListContainer = connect(undefined, mapDispatchToProps)(SessionList);


// <button key={session.get('id')} onClick={() => this.props.onFavClick(session.get('id'))}>{session.get('id')}</button>
