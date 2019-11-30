import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Container, Row, Col, Card, CardHeader, CardBody, Separator } from '../../lib';
import { Heading1, Heading4, Code } from '../../lib';

export function About() {
    return (
        <Container className="container about-container">
            <Heading1 >About</Heading1>

            <Row>
                <Col factor="col-12 pull-h-center pull-v-center">
                    <Code>&lt;Component factor="anything".../&gt;</Code>
                    <Heading4 factor="condensed">one attribute to rule them all</Heading4>
                </Col>
            </Row>

            <Separator size="2em" />

            <Row>
                <Col factor="col-3 col-md-6 col-sm-12">
                    <Card>
                        <CardHeader>install</CardHeader>
                        <CardBody><Code>npm install singulier --save</Code></CardBody>
                    </Card>
                </Col>
                <Col factor="col-3 col-md-6 col-sm-12">
                    <Card>
                        <CardHeader>get started</CardHeader>
                        <CardBody><Link to="/singulier">click here</Link> to read more about the layout and components.</CardBody>
                    </Card>
                </Col>
                <Col factor="col-3 col-md-6 col-sm-12">
                    <Card>
                        <CardHeader>live edit</CardHeader>
                        <CardBody>play with the components and see how they work in the <Link to="/editor">live editor</Link>.</CardBody>
                    </Card>
                </Col>
                <Col factor="col-3 col-md-6 col-sm-12">
                    <Card>
                        <CardHeader>tools</CardHeader>
                        <CardBody>
                            <Link to="/palette">click here</Link> to go to the color palette tool.
                            <Separator size="10px" />
                            Find a few predefined layouts <Link to="/layouts">here</Link>.
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}