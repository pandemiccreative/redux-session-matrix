import React from 'react';

const Gridicon = React.createClass({
  setIcon: function(){
    switch(this.props.icon){
      case 'star':
        return(
          <svg
          className={this.props.icon}
          height={this.props.size}
          width={this.props.size}
          onClick={this.props.onClick}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 243.7 232.9'
          >
            <g>
              <path d='M243.2,88.2c-1.3-4-4.8-6.9-8.9-7.5l-70.8-10.3L131.8,6.2
  		c-1.9-3.8-5.7-6.2-9.9-6.2c-4.2,0-8.1,2.4-9.9,6.2L80.3,70.3L9.5,80.6c-4.2,0.6-7.6,3.5-8.9,7.5c-1.3,4-0.2,8.4,2.8,11.3l51.2,49.9
  		L42.5,220c-0.7,4.1,1,8.3,4.4,10.8c1.9,1.4,4.2,2.1,6.5,2.1c1.8,0,3.5-0.4,5.1-1.3l63.3-33.3l63.3,33.3c1.6,0.8,3.4,1.3,5.1,1.3
  		c2.3,0,4.6-0.7,6.5-2.1c3.4-2.5,5.1-6.7,4.4-10.8l-12.1-70.5l51.2-49.9C243.4,96.5,244.5,92.2,243.2,88.2' />
            </g>
          </svg>
        );
      default:
        return <svg height={this.props.size} />;
    }
  },
  render: function(){
    return(
      this.setIcon()
    );
  }
});

export default Gridicon;
