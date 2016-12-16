import React from 'react';

module.exports = React.createClass({
  getInitialState() {
    return {
      pictureUrl: "",
      description: ""
    };
  },

  componentDidMount() {
    this.getPicture(this.setPicture);
  },

  getPicture(callback) {
    $.ajax({
      url: "http://localhost:3000/pictureOfTheDay",
      success: function(data) {
        callback(data.url, data.explanation);
      }
    });
  },

  setPicture(url, description) {
    this.setState({
      pictureUrl: url,
      description: description
    });
  },

  render() {
    let url;
    if (this.state.pictureUrl) {
      url = this.state.pictureUrl;
    } else {
      url = "";
    }

    return (
      <div className="pictureOfTheDay">
        <img id="picture" src={url}></img>
        <p className="picture-description">{this.state.description}</p>
      </div>
    );
  }
});
