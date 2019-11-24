import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Button } from '../../../lib/Buttons';
import { Container, Row, Col, Card, CardHeader, CardBody, Separator } from '../../../lib/Layout';
import { SelectInput, TextInput, Textarea, DropdownToggle, DropdownList, Checkbox, RadioOption } from '../../../lib/Forms';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '../../../lib/Modal';
import { Heading3, Heading4, Code } from '../../../lib/Typography';

export function Login() {
    return (
        <div className="layout-container">
            <div className="back-button">
                <Link to="/layouts"><Button factor="secondary">back to layouts</Button></Link>
            </div>
            <Container className="container login-container" factor="flex pull-h-center pull-v-center">
                <Modal factor="inline">
                    <ModalHeader>Log In</ModalHeader>
                    <ModalContent>
                        <Container>
                            <Row>
                                <Col factor="col-3 pull-v-center">Username</Col>
                                <Col factor="col-9"><TextInput factor="block"></TextInput></Col>
                            </Row>
                            <Separator size="10px" />
                            <Row>
                                <Col factor="col-3 pull-v-center">Password</Col>
                                <Col factor="col-9"><TextInput type="password" factor="block"></TextInput></Col>
                            </Row>
                            <Separator size="10px" />
                            <Row>
                                <Col factor="col-3"></Col>
                                <Col factor="col-9 pull-left">
                                    <Checkbox id="remember-credentials" 
                                        name="remember-credentials" label="remember my credentials"></Checkbox>
                                </Col>
                            </Row>
                        </Container>
                    </ModalContent>
                    <ModalFooter>
                        <Button factor="tertiary">forgot password</Button>
                        <Button factor="primary">login</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        </div>
    )
}