import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const AppHeader = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    return(
      <header className="app-header">
        <h1 className="app-title">{this.props.appTitle}</h1>
      </header>
    );
  }
});

export default AppHeader;
