var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');

var AddMovieBox = React.createClass({
  componentDidMount: function(){
    $('#addMovieButton').on('click', function () {
      
      $.ajax({
        type: 'POST',
        url: 'api/movies/add',
        data: $('#addForm').serialize() + '&addPoster=' + $('#addPoster').val().split('\\')[2],
        cache: false,
        success: function () {
          alert("Your Movie has been Added");
        }
      })
    });
  },

  render: function () {
    return(
      <div className="container">
        <NavigationBar />
        <div className="row" id="addMovieBox">
          <div className="col-md-3 pull-left"></div>
      		<div className="col-md-6 jumbotron">
      			<form role="form" id="addForm">
              <div className="form-group">

                <label for="addTitle">
                  Title
                </label><br/>
                <input type="text" className="form-control" id="addTitle" name="addTitle" />

              </div>
              <div className="form-group">

                <label for="addYear">
                  Year
                </label>
                <input type="text" className="form-control" id="addYear" name="addYear" />

              </div>
      				<div className="form-group">

      					<label for="addActors">
      						Actors
      					</label>
      					<input type="text" className="form-control" id="addActors" name="addActors" />

      				</div>
      				<div className="form-group">

                <label for="addDirector">
                  Director
                </label>
                <input type="text" className="form-control" id="addDirector" name="addDirector" />

      				</div>
              <div className="form-group">

                <label for="addGenre">
                  Genre
                </label>
                <input type="text" className="form-control" id="addGenre" name="addGenre" />

      				</div>
              <div className="form-group">

      					<label for="addPlot">
      						Plot
      					</label>
      					<input type="text" className="form-control" id="addPlot" name="addPlot" />

      				</div>
              <div className="form-group">

      					<label for="addReleased">
      						Released
      					</label>
      					<input type="text" className="form-control" id="addReleased" name="addReleased" />

      				</div>
      				<div className="form-group">

                <label for="addRating">
                  Rating
                </label>
                <input type="text" className="form-control" id="addRating" name="addRating" />

      				</div>
              <div className="form-group">

                <label for="addID">
                  Movie ID
                </label>
                <input type="text" className="form-control" id="addID" name="addID" />

      				</div>
              <div className="form-group">

                <label for="addPoster">
                  Upload Poster
                </label>
                <input type="file" className="form-control" id="addPoster" name="addPoster" />

      				</div>
      			</form>
            <center>
            <button className="btn btn-primary" id="addMovieButton">
              Add New Movie
            </button>
            </center>
      		</div>
          <div className="col-md-3"></div>
      	</div>
      </div>
    );
  }

});

module.exports = AddMovieBox;
