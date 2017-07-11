import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {  
  children: PropTypes.object
};

export default App;
