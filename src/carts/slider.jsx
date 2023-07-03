import React, { useState, useEffect } from 'react';
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './sliders.css';

function SliderComponent() {
    const [planets, setPlanets] = useState([]);

    const fetchPlanetData = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/planets/');
            const data = await response.json();
            // Eliminar el planeta "Tatooine" de la lista
            const filteredPlanets = data.results.filter((planet) => planet.name !== "Tatooine");
            setPlanets(filteredPlanets);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPlanetData();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
        <div className='contanier_slider'>
            <div className="slider_cont">
                <div className='slider_down'>
                    
                </div>
            </div>
        </div>
    );
}

export default SliderComponent;
