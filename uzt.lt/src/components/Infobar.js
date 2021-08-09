import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

const Infobar = () => {
  return (
<div className="Ifobar">
   <div className="elementor-container elementor-column-gap-no">
      <Container>
         {/* 

            The Bootstrap grid system has four classes: xs (phones), sm (tablets), md (desktops), and lg (larger desktops). 
            The classes can be combined to create more dynamic and flexible layouts.

         */}
         <Row className="justify-content-md-center align-items-center">
             <Col lg xs sm md>
            <span
               className="elementor-counter-number"
               data-duration="1000"
               data-to-value="12.9"
               data-from-value="0"
               data-delimiter=","
               >
            12.9
            </span>
            <span className="elementor-counter-number-suffix">
            %
            </span>
            <div className="elementor-counter-title">
               REGISTRUOTAS NEDARBAS
            </div>
            </Col>
            <Col lg xs sm md>
            <span
               className="elementor-counter-number"
               data-duration="1000"
               data-to-value="608261"
               data-from-value="0"
               >
            608261
            </span>
            <span className="elementor-counter-number-suffix"></span>
            <div className="elementor-counter-title">
            Registruota asmenų
               </div>
            </Col>
            <Col lg xs sm md>
            <span className="elementor-counter-number-prefix"></span>
            <span
               className="elementor-counter-number"
               data-duration="1000"
               data-to-value="223687"
               data-from-value="0">
            223687
            </span>
            <span className="elementor-counter-number-suffix"></span>
            <div className="elementor-counter-title">
               Iš jų bedarbių
            </div>
            </Col>
            <Col lg xs sm md>
            <span
            className="elementor-counter-number"
            data-duration="1000"
            data-to-value="121079"
            data-from-value="0">
         121079
            </span>
            <span className="elementor-counter-number-suffix"></span>
            <div className="elementor-counter-title">
               Per 2021 metus įdarbinta
            </div>
            </Col>
         </Row>
      </Container>
   </div>
</div>

  );
};

export default Infobar;
