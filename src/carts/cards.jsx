import React, { useState, useEffect } from 'react';
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './cards.css';

function CardsComponent() {
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
        <div className='contanier'>
            <div className='HASOKA'>
                <div className='content'>
                    <div className='details'>
                        <img className='HASOKAIMG' src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-logo-desktop_d671a444.png?region=0,0,800,250" alt="" />
                        <p>Ahsoka Tano investigates an emerging threat to the galaxy. Original series streaming August 23, only on Disney+.&nbsp;</p>
                        <button className='boton'>EXPLORE</button>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <div className='slider'>
                    <Slider additionalTransfrom={10} responsive={responsive}>
                        {planets.map((planet, index) => (
                            <div key={index}>
                                <Card bg='dark' border='primary' text='white' style={{textAlign:'left', width: '18rem', maxHeight:'488px' }}>
                                    <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`} />
                                    <Card.Body>
                                        <Card.Title>{planet.name}</Card.Title>
                                        <Card.Text>
                                            {`${planet.population} personas que viven en este planeta`}
                                        </Card.Text>
                                        <ListGroup bsPrefix='dark' style={{textAlign:'left' ,overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}} className="list-group-flush">
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
    );
}

export default CardsComponent;
