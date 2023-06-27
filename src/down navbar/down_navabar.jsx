import React from "react";
import './styledown.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const down_navbar = () => {
    return (
        <Container fluid className="containerDownnavbar">
            <Row className="custom-row-down1">
                <Col className="custom-col1-down1" md={{ span: 6, offset: 3 }}>
                    <div className="more-From">
                        More From Star Wars:
                    </div>
                </Col>
                <Col className="custom-col2-down2" md={{ span: 6, offset: 3 }}>
                    <div className="icons">
                        <div className='down-icons'>
                            <div>
                                <button id='facebook'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-brand-facebook"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1"
                                        stroke="#ffffff"
                                        fill="#ffffff" // Cambiar el color de relleno a blanco
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                    </svg>
                                </button>
                                <button id='instagram'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M16.5 7.5l0 .01" />
                                    </svg>
                                </button>
                                <button id='youTube'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                                        <path d="M10 9l5 3l-5 3z" />
                                    </svg>
                                </button>
                                <button id='twitter'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="#ffffff" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                                    </svg>
                                </button>
                            </div>
                            <div id='divKids'>
                                <button id='kids'>KIDS</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="custom-row-down2">
                <Col className="custom-col1" md={{ span: 6, offset: 3 }}>
                    <div className="TM">
                        TM & © Lucasfilm Ltd. All Rights Reserved
                    </div>
                </Col>
                <Col className="custom-col2" md={{ span: 10, offset: 1 }}>
                    <div className="navbar-tm">
                        <nav>
                            <ul className="navbar">
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Additional Content Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Children's Online Privacy Policy</a></li>
                                <li><a href="#">Your California Privacy Rights</a></li>
                                <li><a href="#">Star Wars at shopDisney</a></li>
                                <li><a href="#">Star Wars Helpdesk</a></li>
                                <li><a href="#">Interest-Based Ads</a></li>
                                <li id="ultimo"><a href="#">Do Not Sell My Personal Information</a></li>
                            </ul>
                        </nav>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default down_navbar;
