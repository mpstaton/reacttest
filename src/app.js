import React from 'react';
import ReactDOM from 'react-dom';

var InputExample = React.createClass({
  render() {
    return (
      <input type="text" value="Bare Bones App" />
    );
  }
});
ReactDOM.render(<InputExample />,
                 document.getElementById('root'));
