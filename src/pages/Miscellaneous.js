import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Container , Row , Col} from 'react-bootstrap'


export default function Miscellaneous() {
    const [mydata, setData] = useState([]);

    const apiGet = () => {
        fetch(" https://inshortsapi.vercel.app/news?category=miscellaneous")
            .then((responce) => responce.json())
            .then((json) => {
                setData(json.data);
            })
    }

    useEffect(() => {
        apiGet();
        const intervel = setInterval(() => {
            apiGet();
        }, 10000)
        return () => clearInterval(intervel)
    }, []);

    return (
        <>
            <Navbar />


            <section className="section-padding" id="section_3">
            <Container>
                    <Row>
                        <Col  xxl={12} mb={4} style={{textAlign:'center'}} >
                            <h2 >Hatke News </h2>
                        </Col>

                        <br /><br /> <br /><br /><br />
                        <Container fluid>
                        <Row style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                        {

                            mydata.map(
                                (value, i) => {
                                    return (
                                        <>
                                                 <Col xs={6} md={4}>
                                                <div className="custom-block-wrap" >
                                                    
                                                    <img src={value.imageUrl} width='100%' height='250px'  alt />
                                                    <div className="custom-block">
                                                        <div className="custom-block-body"  style={{ height: "300px", overflow:"hidden" }}>
                                                            <h5>{value.title}</h5>
                                                            <p className='cardtext'>{value.content}</p>

                                                            <div className="d-flex align-items-center my-2">
                                                                <p className="mb-0">
                                                                    <strong>Author :</strong>
                                                                    {value.author}
                                                                </p>

                                                            </div>
                                                            <p> <b>Last Updated :</b> <br /> {value.date} , {value.time} </p>
                                                        </div>

                                                        <Link to={value.readMoreUrl} className="custom-btn btn">Read More</Link>
                                                    </div>
                                                </div>
                                                <br />
                                            </Col>

                                        </>
                                    );
                                }
                            )
                        }
                        </Row>
                        </Container>
                        
                    </Row>


                </Container>
            </section>

            <Footer />

        </>
    )
}
