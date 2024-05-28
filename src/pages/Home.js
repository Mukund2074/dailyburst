import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function Home() {
    const [mydata, setData] = useState([]);

    const apiGet = () => {
        fetch("https://inshorts.vercel.app/news/top")
            .then((responce) => responce.json())
            .then((json) => {
                setData(json.data.articles);
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

            <section className="cta-section section-padding section-bg">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 col-12 ms-auto">
                            <h2 className="mb-0">Get Updated With Any News . <br />  With Daily Burst.</h2>
                        </div>
                        <div className="col-lg-5 col-12">
                            <Link className="me-4">Daily Burst</Link>
                            <Link to="/" className="custom-btn btn smoothscroll">NEWS 24*7</Link>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section-padding" id="section_3">
               <Container>
                    <Row>
                        <Col xxl={12} mb={4} style={{textAlign:'center'}} >
                            <h2 >Get Updated </h2>
                        </Col>
                        <br /><br /><br /><br /><br />
                        <Container fluid>
                            <Row style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                                {
                                    mydata.map(
                                        (value, i) => {
                                            return (
                                                <>
                                                    <Col xs={6} md={4}>
                                                        <div className="custom-block-wrap" >
                                                            < img alt='image is not available' src={value.imageUrl} width='100%' height='250px'   />
                                                            <div className="custom-block">
                                                                <div className="custom-block-body" style={{ height: "280px", overflow: "hidden" }}>
                                                                    <h5>{value.title}</h5>
                                                                    <p className='cardtext'>{value.content}</p>
                                                                    <div className="d-flex align-items-center my-2">
                                                                        <p className="mb-0">
                                                                            <strong>Author :</strong>
                                                                            {value.authorName}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <Link to={value.sourceUrl} className="custom-btn btn">Read More</Link>
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
