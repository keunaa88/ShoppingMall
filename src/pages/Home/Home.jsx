import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Carousel from '../../components/Carousel'
import Card from '../../components/Card';
import data from '../../data.js';


function Home() {
  // let [shoes, setShoes] = useState(data);

    return (
        
        <div className="Home">
                <Carousel></Carousel>
                <div className="content" style={{minHeight:'500px'}}>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                </div>
            
            {/* <Container>
                <Row>
                    {shoes.map((shoes, i) => {
                        return (
                        <Card shoes={shoes} i={i} key={i} ></Card>
                        );
                    })} 
                </Row>
              </Container> */}

        </div>
    )
}

export default Home;