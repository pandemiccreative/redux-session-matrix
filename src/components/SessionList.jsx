import React from 'react';
import Session from './Session';

const SessionList = React.createClass({
  getSessions: function(){
    return this.props.sessions || [];
  },
  render: function(){
    return(
      <ul>
        {this.getSessions().map(entry =>
          <Session key={entry.id} {...entry} />
        )}
      </ul>
    );
  }
});

export default SessionList;
