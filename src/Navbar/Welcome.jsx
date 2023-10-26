import React from 'react';
import About from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Carousel from '../Components/carousel';
import { pictures, text } from '../Components/Data';

function Welcome() {
    return (
        <div style={{overflow:'hidden'}}>
            {/* <h2>Welcome</h2> */}
            <div className='carousel'>
                <div className='topContent'>
                    <Carousel images={pictures} text1={text} />
                </div>
            </div>
            <About />
            <Services />
            <Contact />


        </div>
    );
}

export default Welcome;



