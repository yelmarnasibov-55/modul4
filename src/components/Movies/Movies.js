import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {

    render() { 
        return ( 
            <ul className="movies">
                {this.props.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />

                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (s) => {
    return {
        movies: s.movies
    }
}
 
export default connect(mapStateToProps)(Movies);