var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');

var Home = React.createClass({
  render: function () {
    return(
      <div className="container">
        <NavigationBar />
        <div className="row" id="homeBox">
          <div className="col-md-12">
            <div className="jumbotron">
              <h2>Welcome!!</h2>
              <p>Movies to Watch before You DIE</p>
              <p>
                You will find the list here &nbsp;
                <Link to="/movies" className="btn btn-primary">Click Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
