import React from 'react';
import Session from './Session';

const SessionList = React.createClass({
  getSessions: function(){
    return this.props.sessions || [];
  },
  render: function(){
    return(
      <ul>
        {this.getSessions().map(entry => {
          console.log(entry);
          return(<Session key={entry.get('id')} {...entry.toObject()} />);
        })}
      </ul>
    );
  }
});

export default SessionList;
