var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');

var ContactBox = React.createClass({

  render: function () {
    return (
      <div className="container">
        <NavigationBar />
        <div className="row" id="updateMovieBox">
          <div className="col-md-3 pull-left"></div>
      		<div className="col-md-6 jumbotron">
            <h2>Contact</h2>
            <p>You can contact us at : </p>
            <p>Email : movieslist@imdb.com</p>
            <p>Blog : movieslist@blogspot.com</p>
      		</div>
          <div className="col-md-3"></div>
      	</div>
      </div>
    );
  }
});

module.exports = ContactBox;
