var movies =[

    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        poster: 'https://www.dvd-forum.at/img/uploaded/kinoplakate/large/121551411404542700.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/51Q0R48W6PL._SX335_BO1,204,203,200_.jpg'
    },
    {
        id: 3,
        title: 'Matrix',
        desc: 'Real life or simulation, you have to choose',
        poster: 'https://i.wpimg.pl/730x0/m.gadzetomania.pl/ma2-341823-616x327-924b4aee40e05.jpg'
    },
    {
        id: 4,
        title: 'Ong-Bak',
        desc: 'Fight for your honor',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/51J0YJPHB2L._SY445_.jpg'
    },
];

var Movie = React.createClass({

    propTypes: {
        movie_id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        poster: React.PropTypes.string.isRequired
    },
    render: function(){
        return (
            React.createElement('li', {key: this.props.movie_id},
            React.createElement(MovieTitle, {movie_title: this.props.title}),
            React.createElement(MovieDescription, {movie_desc: this.props.description}),
            React.createElement(MoviePoster, {movie_poster: this.props.poster}))
        );
    }
    });



var MovieTitle = React.createClass({
    propTypes: {
        movie_title: React.PropTypes.string.isRequired,
    },

    render: function(){
        return (
            React.createElement('h2', {}, this.props.movie_title)
        );
    }

});

var MovieDescription = React.createClass({
    propTypes: {
        movie_desc: React.PropTypes.string.isRequired,
    },

    render: function(){
        return React.createElement('p', {}, this.props.movie_desc);
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        movie_poster: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.createElement('img', {src: this.props.movie_poster});
    }
});



var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },

    render: function(){
        var moviesList = this.props.movies.map(function(movie){
            return React.createElement(Movie,{
                key: Math.random(),
                movie_id: movie.id,
                title: movie.title,
                description: movie.desc,
                poster: movie.poster
            });
            });

        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Films List'),
                React.createElement('ul', {}, moviesList))
        );
    }

});

var movieList = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(movieList, document.getElementById('app'));