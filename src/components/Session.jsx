import React from 'react';
import Gridicon from './Gridicon';

const Session = React.createClass({
  getProps: function(entry){
    switch(entry){
      case 'name':
        return this.props.Name || '';
      case 'level':
        return (this.props.SessionLevels) ? this.props.SessionLevels[0].DisplayName : '';
      case 'type':
        return (this.props.Type) ? this.props.Type.DisplayName : '';
      case 'room':
        return (this.props.Room) ? this.props.Room.DisplayName : '';
    }
  },
  render: function(){
    return(
      <li className="session-item"><a href="#">
          <div className="session">
            <header className="session-header cf">
              <section className="session-title">
                <h6>{this.getProps('name')}</h6>
              </section>
              <section className={'session-fav' + (this.props.faved ? ' faved' : '')}><Gridicon icon='star' size='20' onClick={() => this.props.onFav(this.props.id)} /></section>
            </header>
            <section className="session-details">
              <ul>
                <li ref="sessionLevel">
                  <p><span>Level:</span> {this.getProps('level')}</p>
                </li>
                <li ref="sessionType">
                  <p><span>Type:</span> {this.getProps('type')}</p>
                </li>
                <li ref="sessionRoom">
                  <p><span>Room:</span> {this.getProps('room')}</p>
                </li>
              </ul>
            </section>
          </div>
        </a></li>
    );
  }
});

export default Session;
