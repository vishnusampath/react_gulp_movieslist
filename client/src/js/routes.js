var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var IndexRoute=Router.IndexRoute;

//var MainLayout=require('./components/MainLayout').MainLayout;
var Home = require('./components/Home');
var MovieBox = require('./components/MovieBox');
var AddMovieBox = require('./components/AddMovieBox');
var UpdateMovieBox = require('./components/UpdateMovieBox');
var ContactBox = require('./components/ContactBox');

// var Hello=require('./components/hello');

module.exports = (
  <Route>
    <Route path="/" handler={Home} />
    <Route path="/movies" handler={MovieBox} />
    <Route path="/addmovie" handler={AddMovieBox} />
    <Route path="/contact" handler={ContactBox} />
    <Route path="/updateMovie/:movie_id" handler={UpdateMovieBox} />
  </Route>
);
