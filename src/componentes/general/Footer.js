import React from "react";

//Importing Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Icons
import SocialMediaIcons from '../icons/SocialMediaIcons';
import FooterCategoryList from '../subcomponents/FooterCategoryList';
import LogoIcon from '../icons/LogoIcon';

const Footer = () => {
 return <>
 <Container fluid>
     <Row className="justify-content-center  Row-SocialMediaIcons py-2">
        <Col xs='auto'>
         <SocialMediaIcons/>
        </Col>
     </Row>
     <Row className='Row-LowerFooter Footer'>
        <Col xs lg='8'>
            <p>Categorias de la Tienda</p>
            <FooterCategoryList/>
        </Col>
        <Col xs className='mt-auto ml-auto'>
            <LogoIcon/>
            <p>Diseñado y Desarollado por: Agustin Rujana</p>
        </Col>
     </Row>
 </Container>
 </>
}

export default Footer;