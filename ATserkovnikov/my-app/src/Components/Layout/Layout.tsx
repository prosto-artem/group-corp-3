import React, {useContext} from 'react';
import {Header} from './Header';
import {Content} from './Content';
import {Footer} from './Footer';
import {Col, Container, Row} from "react-bootstrap";
import {ConfigContext} from "../../App";
import {themes} from "../../theme";

import './Layout.scss'

export const Layout: React.FC = () => {
    const {options} = useContext(ConfigContext);
    const curTheme = themes[options.chatTheme];

    return (
        <Container fluid>
            <Row className="justify-content-sm-center">
                <Col md={2}/>
                <Col>
                    <Row>
                        <Header/>
                    </Row>
                    <Row style={{backgroundColor: curTheme.background}}>
                        <Content />
                    </Row>
                    <Row>
                        <Footer/>
                    </Row>
                </Col>
                <Col md={2}/>
            </Row>
        </Container>
    );
};
