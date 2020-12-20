import React from 'react';
import './SingleCinema.css'

const SingleCinema = (props) => {
    const {movieName,time} = props.cinema;
    return (
        <div className="shadow border rounded my-2 p-2 text-center">
            <h5><span className="text-secondary">Movie name: </span>{movieName}</h5>
            <h5><span className="text-secondary">Time:</span> {time}</h5>
        </div>
    );
};

export default SingleCinema;