import {useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel';
import axios from "axios";

const CarouselStat = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="skill-bx wow zoomIn" style={{'marginTop': 60}}>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                    <h1>10</h1>
                    <h5 style={{marginTop: 30}}>Books Total</h5>
                </div>
                <div className="item">
                    {/* <h1>{data[0]["totalBukuFiction"]["value"]}</h1> */}
                    <h1>1</h1>
                    <h5 style={{marginTop: 30}}>Motivation Books</h5>
                </div>
                <div className="item">
                    {/* <h1>{data[0]["totalBukuNonfiction"]["value"]}</h1> */}
                    <h1>9</h1>
                    <h5 style={{marginTop: 30}}>Mental Health Books</h5>
                </div>
            </Carousel>
        </div> 
    )
}

export default CarouselStat
