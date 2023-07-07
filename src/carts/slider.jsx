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
            const response = await fetch('https://swapi.dev/api/planets/?page=2');
            const data = await response.json();
            setPlanets(data.results);
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
                    <div className='slider_noti'>
                        <Slider additionalTransfrom={30} responsive={responsive}>
                            {planets.map((planet, index) => (
                                <div key={index}>
                                    <Card bg='dark' border='primary' text='white' style={{ textAlign: 'left', width: '18rem', maxHeight: '488px' }}>
                                        <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${index + 11}.jpg`} />
                                        <Card.Body>
                                            <Card.Title>{planet.name}</Card.Title>
                                            <ListGroup bsPrefix='dark' style={{ textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} className="list-group-flush">
                                                <ListGroup.Item>Clima: {planet.climate}</ListGroup.Item>
                                                <ListGroup.Item>Gravedad: {planet.gravity}</ListGroup.Item>
                                                <ListGroup.Item>Terreno: {planet.terrain}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderComponent;
