import React, { useState } from 'react';
import fakedata from '../../fakedata/fakedata';
import SingleCinema from '../SingleCinema/SingleCinema';

const Home = () => {

    return (        
        <div className="container py-5">
            {
                fakedata.map(cinema=> <SingleCinema cinema={cinema}></SingleCinema>)
            }
        </div>
    );
};

export default Home;