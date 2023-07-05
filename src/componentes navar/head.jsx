import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Form from 'react-bootstrap/Form';
import './stylecomponentes.css';

import signImage from "../media/signin-image.png";


function Head() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <Container fluid className="custom-container">
            <Row className="custom-row">
                <Col className="custom-col" id='icons' xl={3} >
                    <div className='prueba'>
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
                </Col>
                <Col className="custom-col" xl={6} >
                    <div className='letras'>
                        <img className='imagen' src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
                    </div>
                </Col>
                <Col className="custom-col" xl={3} >



                    <div className='buscador'>





                        <Button variant="danger" ref={target} onClick={() => setShow(!show)} style={{ paddingTop: '25px', display: 'flex', background: 'transparent', border: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" id='lupa' class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                            <p>SEARCH</p>



                        </Button>

                        <Overlay target={target.current} show={show} placement="left">
                            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                <div
                                    {...props}
                                    style={{
                                        position: 'absolute',
                                        padding: '10px 0px',
                                        justifyItems: 'center',
                                        borderRadius: 3,
                                        ...props.style,
                                    }}
                                >
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                    </Form>
                                </div>
                            )}
                        </Overlay>

                        <button type="button" className="btn signIn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <svg xmlns="http://www.w3.org/2000/svg" id='people' class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                        </button>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <button type="button" class="btn " data-bs-dismiss="modal">X</button>
                                        <div className='modal-images modal-item'>
                                            <div className='modal-image'>
                                                <img src={signImage} width="100%" height="100%" />
                                                
                                            </div>
                                            <div className='modal-image'>

                                            </div>
                                        </div>

                                        <div className='modal-title modal-item'>
                                            <h3 style={{ color: '#edd708' }}>ENTER YOUR EMAIL ADDRESS</h3>
                                        </div>


                                        <div className='modal-text modal-item'>
                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Email Address'></input>
                                        </div>

                                        <button type='submit' className='btn btn-primary modal-item'>Continue</button>                                      
                                       
                                   
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>

                        {/* <button className='signIn'>
                            <svg xmlns="http://www.w3.org/2000/svg" id='people' class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <p>SIGN IN</p>
                        </button> */}


                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Head;