import React from "react";
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import {Col} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

// this is our home page, conditional rendering by track.js
let Greeting = (props) => {

    // const styleSheetLnk = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    // const jQueryLibLnk = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    // const popperLibLnk = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    // const jsLibLnk = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"

    return(
        
        <Container className="space-around mt-5" border="1px" fluid="True">
            
            <Row className="text-center" fluid="True">
                
                <Col md={{ span: 10, offset: 1 }}>
                    <h1 className="text-center" fluid="True">Hi! iSchoolers</h1>
                    <p  className="text-left  mt-3">
                    Integer lobortis, urna non maximus posuere, enim mi finibus justo, 
                    non rhoncus justo risus sit amet ex. Nunc iaculis ipsum leo, ac luctus 
                    elit egestas at. Suspendisse non libero ut enim sagittis luctus et non 
                    risus. Duis tincidunt tellus ut risus ullamcorper rutrum. Vestibulum eget 
                    nibh nisi. Pellentesque varius, libero in pulvinar lacinia, diam felis commodo 
                    nisl, gravida sagittis turpis purus at diam. Suspendisse quis congue libero. 
                    </p>
                </Col>
                
            </Row>
          
            <Row>
            <Col md={{ span: 10, offset: 1 }}>
                <Row className="mt-2">
                    <Col >
                        <Image src={require("./img/UXD.jpg")} rounded fluid="True" onClick={() => props.trackSwitcher("UX")}/>
                    </Col>
                    <Col>
                        <Image src={require("./img/SWE.jpg")} rounded fluid="True" onClick={() => props.trackSwitcher("SWE")}/>
                    </Col>
                    <Col>
                        <Image src={require("./img/PMG.jpg")} rounded fluid="True" onClick={() => props.trackSwitcher("PM")}/> 
                    </Col>
                    <Col>
                        <Image src={require("./img/DSI.jpg")} rounded fluid="True" onClick={() => props.trackSwitcher("DS")}/>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col >                    
                        <h3>User Experience <br/> Design</h3>
                    </Col>
                    <Col>
                        <h3>Software Engineering</h3>
                    </Col>
                    <Col>                        
                        <h3>Product Management</h3>
                    </Col>
                    <Col>
                        <h3>Data<br/>Science</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-left">
                        Aliquam mattis, nisi ut molestie ullamcorper, nunc nibh sagittis quam, a fermentum massa lorem ut purus.
                        Duis in odio sit amet est dapibus aliquet. In sed mauris tortor. 
                        Curabitur porttitor, nunc ac tristique maximus, urna felis dignissim lectus, 
                        sed pellentesque nibh urna viverra purus.
                        </p>
                    </Col>
                    <Col>
                        <p className="text-left">
                        Aliquam mattis, nisi ut molestie ullamcorper, nunc nibh sagittis quam, a fermentum massa lorem ut purus.
                        Duis in odio sit amet est dapibus aliquet. In sed mauris tortor. 
                        Curabitur porttitor, nunc ac tristique maximus, urna felis dignissim lectus, 
                        sed pellentesque nibh urna viverra purus.
                        </p>
                    </Col>
                    <Col>
                        <p className="text-left">
                        Aliquam mattis, nisi ut molestie ullamcorper, nunc nibh sagittis quam, a fermentum massa lorem ut purus.
                        Duis in odio sit amet est dapibus aliquet. In sed mauris tortor. 
                        Curabitur porttitor, nunc ac tristique maximus, urna felis dignissim lectus, 
                        sed pellentesque nibh urna viverra purus.
                        </p>
                    </Col>
                    <Col>
                        <p className="text-left">
                        Aliquam mattis, nisi ut molestie ullamcorper, nunc nibh sagittis quam, a fermentum massa lorem ut purus.
                        Duis in odio sit amet est dapibus aliquet. In sed mauris tortor. 
                        Curabitur porttitor, nunc ac tristique maximus, urna felis dignissim lectus, 
                        sed pellentesque nibh urna viverra purus.
                        </p>
                    </Col>
                </Row>
            </Col>
            </Row>
        </Container>
    )
}

export {Greeting}

