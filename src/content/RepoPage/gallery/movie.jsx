import React, { Component } from 'react';
import ImageUrl from './gallery/s5.jpg';
class Movie extends React.Component {

    render() { 
        return <div className="card">
            <div className="movie">
                <img src={ImageUrl} alt="" />
            </div>

        </div>;
    }
}
 
export default Movie;