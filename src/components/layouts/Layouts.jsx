import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Container, Row, Col, Card, CardHeader, CardBody, Separator, Enum, EnumItem } from '../../lib';
import { Heading1, Heading4, Code, Text } from '../../lib';
import { Button } from '../../lib';
import { ModalHeader, ModalContent, ModalFooter, Modal } from '../../lib';
import codesamples from '../../assets/codesamples';
import { Textarea } from '../../lib';

export function Layouts() {
    const [showModal, setShowModal] = useState(false);
    const [srcCode, setSrcCode] = useState('');

    return (
        <Container className="container about-container">
            <Heading1 >Layouts</Heading1>

            <Row>
                <Col factor="col-12 pull-h-center pull-v-center">
                    <Heading4 factor="condensed">some simple layouts to help you get started</Heading4>
                </Col>
            </Row>

            <Separator size="2em" />

            <Row>
                <Col factor="col-6 col-md-6 col-sm-12">
                    <Card>
                        <CardHeader>Login Form</CardHeader>
                        <CardBody>
                            <Container factor="pull-h-center">
                                <Text>A basic login screen.</Text>
                                <Separator size="10px" />
                                <Enum factor="pull-h-center">
                                    <EnumItem><Link to="/layouts/login"><Button factor="primary">view demo</Button></Link></EnumItem>
                                    <EnumItem><Button onClick={() => { setSrcCode(codesamples.layouts.login); setShowModal(true); }}
                                        factor="primary outline">get code</Button></EnumItem>
                                </Enum>
                            </Container>
                        </CardBody>
                    </Card>
                </Col>
                <Col factor="col-6 col-md-6 col-sm-12">
                    <Card>
                        <CardHeader>Dashboard</CardHeader>
                        <CardBody>
                            <Container factor="pull-h-center">
                                <Text>A simple dashboard layout.</Text>
                                <Separator size="10px" />
                                <Enum factor="pull-h-center">
                                    <EnumItem><Link to="/layouts/dashboard"><Button factor="primary">view demo</Button></Link></EnumItem>
                                    <EnumItem><Button onClick={() => { setSrcCode(codesamples.layouts.dash); setShowModal(true); }}
                                        factor="primary outline">get code</Button></EnumItem>
                                </Enum>
                            </Container>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {showModal && (
                <Modal factor="large" onClose={() => setShowModal(false)}>
                    <ModalHeader>Source code</ModalHeader>
                    <ModalContent>
                        <Textarea style={{width: '100%', height: '50vh'}} value={srcCode} />
                    </ModalContent>
                    <ModalFooter>
                        <Button factor="secondary" onClick={() => setShowModal(false)}>close</Button>
                    </ModalFooter>
                </Modal>
            )}

        </Container>
    )
}