import React, { Component } from 'react';
import Picture from './pictureOfTheDay';

module.exports = React.createClass({
  render() {
    return(
      <div className="app">
        <Picture />
      </div>
    );
  }
});
