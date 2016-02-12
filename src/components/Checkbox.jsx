import React from 'react';

const Checkbox = React.createClass({
  render: function(){
    return(
      <input type="checkbox"
             className={this.props.className}
             checked={this.props.checked}
             name={this.props.name}
             value={this.props.value}
             onChange={() => {}} />
    );
  }
});

export default Checkbox;
