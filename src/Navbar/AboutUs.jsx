// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from '../Components/carousel';
// import { pictures, text } from '../Components/Data';


// function AboutUs() {
//   return (
//     <div className='container my-5'>
//       <section id='about'>
//         <div align='center'>
//           <h2>About Us</h2>
//           <h2 className='bg-green'>Welcome To Signature Creators</h2>
//         </div>
//         <p align='center'>
//           Signature Creators was created on the initiative of a circle of friends inspired by a particular atmosphere at DataGirl Technologies. <br />
//           We see the need for the youngcreators in our society to showcase their very outstanding and brilliant work to a larger population such that, they can gain more clients in and out of their zone.
//         </p>
//         <div align='center'>
//         <button className='btn-green px-4 py-1' style={{}} >Read More</button>
//         </div>
        
//       </section>
//     </div>
//     // <div className='carousel'>
//     // <div className='topContent'>
//     //   <Carousel images={pictures} text1={text} />
//     // </div>
//     // </div>
//   );
// }

// export default AboutUs;

import React from "react";

    
        const { useState, useEffect } = React;

        const AboutUs = () => {
            const paragraph = 'A "Show more" or "Show less" text button in React.js is a user interface feature that allows users to toggle the visibility of long or truncated text content. When the "Show more" button is clicked, the hidden content is revealed, allowing users to see the full text. Conversely, when the "Show less" button is clicked, the content is collapsed or truncated again. This functionality is typically implemented by managing a state variable in React.js that controls the visibility of the text, and updating it accordingly when the buttons are clicked, triggering a re-render of the component.';

            const [displayedText, setDisplayedText] = useState('');
            const [isCollapsed, setIsCollapsed] = useState(false);

            useEffect(() => {
                collapseText(200);
            }, []);

            const collapseText = (textSize) => {
                setDisplayedText(paragraph.slice(0, textSize));
                setIsCollapsed(!isCollapsed);
            };

            const expandText = () => {
                setDisplayedText(paragraph);
                setIsCollapsed(!isCollapsed);
            };

            return (
                <div className="container" id="about">
                    <h3>React Js Show more or show less text button </h3>

                    <p>{displayedText}</p>
                    <button className="text-btn" onClick={expandText} style={{ display: isCollapsed ? 'block' : 'none' }}>
                        Show more
                    </button>
                    <button className="text-btn" onClick={() => collapseText(200)} style={{ display: isCollapsed ? 'none' : 'block' }}>
                        Show less
                    </button>
                </div>
            );
        }

        export default AboutUs

        