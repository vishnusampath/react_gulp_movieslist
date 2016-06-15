var React = require('react');
var Link = require('react-router').Link;

var NavigationBar = React.createClass({
  render: function () {
    return(
      <div className="navbar navbar-fixed-top">
        <div className="container" id="navbar">
          <div className="navbar-collapse collapse navbar-responsive-collapse">
            <ul className="nav navbar-nav" id="navbar-list">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/addmovie">Add Movie</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavigationBar;
