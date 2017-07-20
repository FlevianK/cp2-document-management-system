import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class App extends React.Component {
  /**
    * App class
    * It renders the whole system on the browser
    */
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {  
  children: PropTypes.object
};

export default App;
