import React from 'react';
import Banner from './Banner/Banner';
import Episodes from './Episodes/Episodes';
import Locations from './Locations/Locations';
import MeetCast from './MeetCast/MeetCast';


const Home = () => {
    return (
        <div id='Home'>
            <Banner></Banner>
            <MeetCast></MeetCast>
            <Episodes></Episodes>
            <Locations></Locations>
        </div>
    );
};

export default Home;