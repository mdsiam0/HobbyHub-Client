import React from 'react';
import Banner from '../components/Banner';
import WhyHobbyHub from '../components/WhyHobbyHub';
import HowItWork from '../components/HowItWork';
import Featured from '../components/Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Featured></Featured>
           <WhyHobbyHub></WhyHobbyHub>
           <HowItWork></HowItWork>
        </div>
    );
};

export default Home;