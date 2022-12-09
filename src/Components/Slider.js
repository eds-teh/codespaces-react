import React from "react";
import { Carousel } from "react-bootstrap";
import ocean from '../img/ocean.jpg';




export default function NaviBar() {
    
    return (
    <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={ocean}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum ipsum lorem lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height':'600px'}}>
                <img
                    className="d-block w-100"
                    src={ocean}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum ipsum lorem lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={ocean}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum ipsum lorem lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    
)}
