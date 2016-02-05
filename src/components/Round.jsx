import React from 'react';
import SessionList from './SessionList'

const Round = React.createClass({
  render: function(){
    return(
      <section className='session-round'>
        <h1>{this.props.round}</h1>
        <SessionList sessions={this.props.sessions} />
      </section>
    );
  }
})

export default Round;
