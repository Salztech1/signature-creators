import React from 'react';
import '../Components/carousel.css';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function Carousel({ images, text1 }) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoplay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay &&
            setTimeout(() => {
                slideRight()
            }, 2500)
    }
    )

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }

    // const slideLeft = () => {
    //     setCurrent(current === 0 ? images.length - 1 : current - 1)
    // }

    return (
        <div className=' d-md-flex col-12 '>
            <div className='col-md-7 col-12 my-md-5 my-md-5  '>
                <h2 className='right' style={{fontSize:40}} > <b>Get The Best Services From</b></h2>
                
                {text1.map((text2, index) => {
                    return (
                        <div>
                            <div key={index}
                                className={index === current
                                    ? "carousel_text carousel_text-active"
                                    : "carousel_text"}>

                                <h2 className='card_text bg-green mx-md-5 px-md-5 ' style={{fontSize:40}}><b> {text2.title}</b></h2>
                            </div>
                        </div>
                    )
                })}
                <div className='my-md-5 py-md-'  >
                    <h2 style={{fontSize:40}}><b>And Enjoy</b></h2>
                    <button className='my-md-2 px-2 btn-green ' >Services</button>
                </div>
                
            </div>

            <div className='carousel1 col-md-5 col-12 '
                onMouseEnter={() => {
                    setAutoplay(false);
                    clearTimeout(timeOut)
                }}
                onMouseLeave={() => {
                    setAutoplay(true)
                }}>
                <div className='carousel-wrapper'>

                    {images.map((image, index) => {
                        return (
                            
                                <div key={index}
                                    className={index === current
                                        ? "carousel_card carousel_card-active"
                                        : "carousel_card"}>
                                    <img className='cards_image' src={image.photo} alt="" />
                                    <div className='card_overlay'>
                                        <h2 className='card_title'>{image.tittle}</h2>
                                    </div>
                                </div>
                        
                        );
                    })}

                    {/* <div className='carousel_arrow_left' onClick={slideLeft}>&lsaquo;</div>
                    <div className='carousel_arrow_right' onClick={slideRight}>&rsaquo;</div> */}
                </div>
                <div className='carousel_pagination '>
                    {images.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className={index === current
                                    ? "pagination_dot pagination_dot-active"
                                    : "pagination_dot"
                                }
                                onClick={() => (setCurrent(index))}
                            ></div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
