var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');

var MovieBox = React.createClass({

  getInitialState: function () {
    return {
      movieJSONArray: []
    };
  },

  loadMovie: function(){
    $.get('/api/movies', function (result) {

    this.setState({
      movieJSONArray: result
      });
    }.bind(this));
  },

  componentDidMount: function () {
    this.loadMovie();
    setInterval(this.loadMovie, 6000);
  },

  render: function () {
    return(
      <div className="container" id="mainBox">
        <NavigationBar />
        <SearchBox />
        <MainBox jsonData = {this.state.movieJSONArray} movieWillDelete={this.loadMovie} />
      </div>
    );
  }
});

var SearchBox = React.createClass({
  getInitialState: function () {
    return {
      searchText: ''
    };
  },

  componentDidMount: function () {

    $('#searchSave').on('click', function(){
      $.ajax({
        type:'POST',
        url: '/api/movies',
        data: jQuery.param({Title: $('#searchBox').val()}),
        cache: false,
        success: function (data) {

        }
      });
    });
  },

  render: function () {
    return(
      <div className="row wrap-content">
        <form role="form">
          <input id="searchBox" type="text" name="Title" className="form-control" placeholder="Enter Movie Name" />
        </form>
        <button id="searchSave" className="btn btn-primary form-control">Search and Save</button>
      </div>
    );
  }
});

var MainBox = React.createClass({
  handleDelete: function (movie_ID) {
    $.ajax({
      type: 'DELETE',
      url: '/api/movies/' + movie_ID,
      success: function (result) {
        return this.props.movieWillDelete();
      }.bind(this)
    })
  },

  render: function () {
    var movierows = [];
    this.props.jsonData.forEach(function (movie){
       movierows.push(<Movie key={movie.imdbID} movieObj={movie} movieID={movie._id} onChooseDelete={this.handleDelete} />);
     }.bind(this));

    return(<div>{movierows}</div>);
  }
});

var Movie = React.createClass({
  getInitialState: function () {
    var movieObj = this.props.movieObj;
    return movieObj;
  },

  handleDeleteClick: function () {
    var movie_ID = this.props.movieID;
    return this.props.onChooseDelete(movie_ID);
  },

  render: function(){
      return(
        <div className="row wrap-content" id="movieElement">
          <div className="col-md-4">
             <img id="poster" alt="Bootstrap Image Preview" src={this.props.movieObj.Poster} />
          </div>
          <div className="col-md-8">
            <div className="list-group" id="list-group">
              <div className="list-group-item" id="list-group-item">
                <ul className="list-unstyled" id="ulist">
                  <li id="name">
                    <span>Title :  </span> {this.props.movieObj.Title}
                  </li>

                  <li id="year">
                    <span>Year :  </span> {this.props.movieObj.Year}
                  </li>

                  <li id="actors">
                    <span>Actors :  </span> {this.props.movieObj.Actors}
                  </li>

                  <li id="director">
                    <span>Director :  </span> {this.props.movieObj.Director}
                  </li>

                  <li id="genre">
                    <span>Genre :  </span> {this.props.movieObj.Genre}
                  </li>

                  <li id="plot">
                    <span>Plot :  </span> {this.props.movieObj.Plot}
                  </li>

                  <li id="released">
                    <span>Released :  </span> {this.props.movieObj.Released}
                  </li>

                  <li id="rating">
                    <span>Rating :  </span> {this.props.movieObj.imdbRating}
                  </li>
                </ul>
                <input type="text" id="movieID" value={this.props.movieObj._id} hidden readOnly />
                <div className="buttons">
                  <a className="btn btn-primary" role="button" href={'http://www.imdb.com/title/' + this.props.movieObj.imdbID}  target="_blank"> View on IMDB </a>
                  &nbsp; &nbsp; &nbsp;
                  <Link to={'/updateMovie/'+this.props.movieObj._id} className="btn btn-warning" > Update </Link>
                  <button className="btn btn-danger" id="deleteMovie" onClick={this.handleDeleteClick} >Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = MovieBox;
