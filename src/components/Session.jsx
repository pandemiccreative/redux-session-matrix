import React from 'react';
import { connect } from 'react-redux';
import Gridicon from './Gridicon';

const Session = React.createClass({
  render: function(){
    return(
      <li className="session-item"><a href="#">
          <div className="session">
            <header className="session-header cf">
              <section className="session-title">
                <h6>{this.props.session.get('Name')}</h6>
              </section>
              <section className={'session-fav' + (this.props.session.get('faved') ? ' faved' : '')}>
                <Gridicon icon='star'
                          size='20'
                          onClick={() => {this.props.onFav(this.props.session.get('id'))}} />
              </section>
            </header>
            <section className="session-details">
              <ul>
                <li ref="sessionLevel">
                  <p><span>Level:</span> {this.props.session.get('SessionLevels').map((level) => {
                    return <span key={level.DisplayName} className='sLevel'>{level.DisplayName}</span>
                  })}</p>
                </li>
                <li ref="sessionType">
                  <p><span>Type:</span> {this.props.session.get('Type').DisplayName}</p>
                </li>
                <li ref="sessionRoom">
                  <p><span>Room:</span> {this.props.session.get('Room').DisplayName}</p>
                </li>
              </ul>
            </section>
          </div>
        </a></li>
    );
  }
});

export default Session;
