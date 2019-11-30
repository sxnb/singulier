import React, { useState } from 'react';
import JsxParser from 'react-jsx-parser';
import { Link } from 'react-router-dom';
import MonacoEditor from 'react-monaco-editor';
import * as Babel from 'babel-core';
import './styles.scss';
import { Button } from '../../lib';
import { Content, Card, Container, Enum, EnumItem, CardHeader, CardBody, Row, Col, Header, Footer, Separator } from '../../lib';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Text, Hint, Code, Icon } from '../../lib';
import { SelectInput, TextInput, Textarea, DropdownToggle, DropdownList, Checkbox, RadioOption } from '../../lib';
import { Badge, Breadcrumbs, Breadcrumb, Progress, Avatar, Initials, Alert, Spinner } from '../../lib';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '../../lib';
import { TableHeader, TableHeaderCell, Table, TableBody, TableRow, TableCell, TableHeaderRow } from '../../lib';
import { TabContainer, Tab, PillContainer, Pill, NavContainer, NavItem, NavSeparator } from '../../lib';
import DS from '../ds';
import codesamples from '../../assets/codesamples.js';

class InjectableComponent extends React.Component {
    static defaultProps = {
        eventHandler: () => { }
    }
    // ... inner workings of InjectableComponent
}

export class Editor extends React.Component {

    constructor(props) {
        super(props);
        let initialCode = '<Badge factor="info">type your code here</Badge>\n';

        if (props.location && props.location.state && props.location.state.component) {
            initialCode = this.getSampleCode(props.location.state.component);
        }

        const fixedCode = initialCode.replace(new RegExp('<!--(.*?)-->', 'gm'), '<Separator size="10px" />').replace('/>\s+</g', '><');
        this.state = {
            code: initialCode,
            fixedCode: fixedCode
        }
    }

    isTypingTimestamp = 0;
    timer = null;
    editor = null;

    getSampleCode = (component) => {
        if (codesamples.hasOwnProperty(component)) {
            return codesamples[component].substring(1);
        }

        return '';
    }

    onChange = (x) => {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            const pc = x.replace(new RegExp('<!--(.*?)-->', 'gm'), '<Separator size="10px" />').replace('/>\s+</g', '><');
            this.setState({ code: x, fixedCode: pc });
        }, 1000);
    }

    getComponentsObj = () => {
        return { InjectableComponent, Content, Button, Card, Container, Enum, EnumItem, 
            CardHeader, CardBody, Row, Col, Header, Footer, Separator, Heading1, Heading2, Heading3, 
            Heading4, Heading5, Heading6, Hint, Code, Icon, SelectInput, TextInput, Badge, Alert,
            Breadcrumbs, Breadcrumb, Progress, Avatar, Initials, Spinner, Modal, ModalHeader, ModalContent, 
            ModalFooter, TableHeader, TableHeaderCell, Table, TableBody, TableRow, TableCell, 
            TableHeaderRow, TabContainer, Tab, PillContainer, Pill, NavContainer, NavItem, NavSeparator,
            DropdownToggle, DropdownList, Textarea, Checkbox, RadioOption };
    }

    showComponentsModal = () => {
        this.setState({ showModal: true });
    }

    hideComponentsModal = () => {
        this.setState({ showModal: false });
    }

    handleResize = () => this.editor && this.editor.layout();

    editorDidMount = (editorRef) => {
        this.editor = editorRef;
    }

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
    }
    
    render = () => {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
            fontSize: 16
        };

        return (
            <Content>
                {this.state.showModal && (
                <Modal size="large" onClose={this.hideComponentsModal}>
                    <ModalHeader>Components</ModalHeader>
                    <ModalContent>
                        <DS hideTryInEditor="true"></DS>
                    </ModalContent>
                </Modal>
                )}

                <Container factor="dark">
                    <Row factor="dark">
                        <Col factor="col-8 pull-v-center">
                            <Text color="white" size="14px">You can test various examples by going to the <strong>design system</strong> page and clicking the <strong>Try in editor</strong> tab.</Text>
                        </Col>
                        <Col factor="col-4 pull-right">
                            <Content>
                                <Button factor="secondary" onClick={this.showComponentsModal}>
                                    Components quick view <Icon name="external-link-outline"></Icon>
                                </Button>
                            </Content>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col factor="col-6 col-md-12" style={{ height: "calc(100vh - 186px)" }}>
                        <MonacoEditor
                            height="100%"
                            width="100%"
                            language="html"
                            theme="vs-dark"
                            value={code}
                            options={options}
                            onChange={this.onChange}
                            editorDidMount={this.editorDidMount}
                        />
                    </Col>
                    <Col factor="col-6 col-md-12" style={{ height: "calc(100vh - 186px)" }}>
                        <Container>
                            <JsxParser
                                bindings={{
                                    foo: 'bar',
                                    myEventHandler: () => { /* ... do stuff ... */ },
                                }}
                                components={this.getComponentsObj()}
                                jsx={this.state.fixedCode}
                            />
                        </Container>
                    </Col>
                </Row>
            </Content>
        )
    }
}