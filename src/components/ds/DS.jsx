import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github as docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from '../../lib/Buttons';
import { Card, Container, Enum, EnumItem, CardHeader, CardBody, Row, Col, Header, Footer, Separator, Content } from '../../lib/Layout';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Hint, Code, Icon, Text } from '../../lib/Typography';
import { SelectInput, TextInput, Textarea, DropdownToggle, DropdownList, Checkbox, RadioOption } from '../../lib/Forms';
import { Badge, Breadcrumbs, Breadcrumb, Progress, Avatar, Initials, Spinner, Tooltip, Alert } from '../../lib/Other';
import { ToastContainer } from '../../lib/Toast';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '../../lib/Modal';
import './styles.scss';
import { TableHeader, TableHeaderCell, Table, TableBody, TableRow, TableCell, TableHeaderRow } from '../../lib/Table';
import { TabContainer, Tab, PillContainer, Pill, NavContainer, NavItem, NavSeparator } from '../../lib/Nav';
import codesamples from '../../assets/codesamples.js';

export function DS(props) {
    const [showModal, setShowModal] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);

    const [showTab, setShowTab] = useState({});

    const toastRef = React.createRef();
    let history = useHistory();

    const doHideTab = (component) => { setShowTab({...showTab, [component]: false})};
    const doShowTab = (component) => { setShowTab({...showTab, [component]: true})};
    const tryInEditor = (component) => {
        history.push('/editor', { component: component });
    };
    const editorIcon = 'diagonal-arrow-right-up-outline';
    const hideTryInEditor = props.hideTryInEditor;

    const getSampleCode = (component) => {
        if (codesamples.hasOwnProperty(component)) {
            return codesamples[component].substring(1);
        }

        return '';
    }

    return (
        <>
            <ToastContainer ref={toastRef} duration={5000}></ToastContainer>
            <Row>
                {!hideTryInEditor && (<Col factor="col-2 col-sm-12 col-menu">
                    <Container className="ds-menu-container">
                        <Heading2 condensed="true" style={{paddingBottom: '20px'}}>Menu</Heading2>
                        <NavContainer factor="column">
                            <AnchorLink offset='100' href='#Layout'><NavItem>Layout</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Typography'><NavItem>Typography</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Buttons'><NavItem>Buttons</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Forms'><NavItem>Form controls</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Badges'><NavItem>Badges</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Breadcrumbs'><NavItem>Breadcrumbs</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Progress'><NavItem>Progress</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Card'><NavItem>Card</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Avatar'><NavItem>Avatar</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Initials'><NavItem>Initials</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Dropdown'><NavItem>Dropdown</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Alert'><NavItem>Alert</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Modal'><NavItem>Modal</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Tooltip'><NavItem>Tooltip</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Toast'><NavItem>Toast</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Header'><NavItem>Header</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Footer'><NavItem>Footer</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Table'><NavItem>Table</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Nav'><NavItem>Nav</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Tabs'><NavItem>Tabs</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Pills'><NavItem>Pills</NavItem></AnchorLink>
                            <AnchorLink offset='100' href='#Spinner'><NavItem>Spinner</NavItem></AnchorLink>
                        </NavContainer>
                    </Container>
                </Col>)}
                <Col factor={hideTryInEditor ? 'col-12' : 'col-10 col-sm-12'}>
                    <Container>
                        <Heading2 id="Layout" condensed="true" style={{paddingBottom: '20px'}}>Layout</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['layout'] ? 'active' : ''} 
                                onClick={() => doHideTab('layout')}>View</Tab>
                            <Tab factor={showTab['layout'] ? 'active' : ''}
                                onClick={() => doShowTab('layout')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('layout')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['layout'] && (
                        <Content>
                            <Container>
                                <Heading4>Rows &amp; Columns</Heading4>                        

                                <Row>
                                    <Col factor="col-6" className="demo-col">col-6</Col>
                                    <Col factor="col-6" className="demo-col">col-6</Col>
                                </Row>
                                <Separator size="5px"></Separator>
                                <Row>
                                    <Col factor="col-4" className="demo-col">col-4</Col>
                                    <Col factor="col-4" className="demo-col">col-4</Col>
                                    <Col factor="col-4" className="demo-col">col-4</Col>
                                </Row>
                                <Separator size="5px"></Separator>
                                <Row>
                                    <Col factor="col-1" className="demo-col">col-1</Col>
                                    <Col factor="col-1" className="demo-col">col-1</Col>
                                    <Col factor="col-1" className="demo-col">col-1</Col>
                                    <Col factor="col-2" className="demo-col">col-2</Col>
                                    <Col factor="col-3" className="demo-col">col-3</Col>
                                    <Col factor="col-4" className="demo-col">col-4</Col>
                                </Row>
                            </Container>

                            <Separator size="20px"></Separator>

                            <Container>
                                <Table className="block">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                Sizes
                                            </TableCell>
                                            <TableCell>
                                                col-[1..12]
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Breakpoints
                                            </TableCell>
                                            <TableCell>
                                                sm (576px), md (768px), lg (992px), xl (1200px)
                                            </TableCell>
                                        </TableRow> 
                                        <TableRow>
                                            <TableCell>
                                                Variable sizes
                                            </TableCell>
                                            <TableCell>
                                                col-sm-[1..12], col-md-[1..12], col-lg-[1..12], col-xl-[1..12]
                                            </TableCell>
                                        </TableRow> 
                                        <TableRow>
                                            <TableCell>
                                                Variable display
                                            </TableCell>
                                            <TableCell>
                                                hide-lt-[breakpoint], hide-gt-[breakpoint], 
                                                show-lt-[breakpoint], show-gt-[breakpoint]
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                                <Heading4>Container</Heading4>

                                <Hint>Separates contents - adds a small margin for clearer separation.</Hint>

                                <Heading4>Content</Heading4>

                                <Hint>Same as container, without the margin.</Hint>

                                <Heading4>Enum &amp; EnumItem</Heading4>

                                <Hint>Allows easier listing of various components. Enum supports either "row" or "column" as factors.</Hint>

                            </Container>
                        </Content>)}
                        {showTab['layout'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('layout')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Typography">Typography</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['typography'] ? 'active' : ''} 
                                onClick={() => doHideTab('typography')}>View</Tab>
                            <Tab factor={showTab['typography'] ? 'active' : ''}
                                onClick={() => doShowTab('typography')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('typography')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['typography'] && (
                        <Container>
                            <Heading1 style={{marginTop: 0}}>Header 1</Heading1>
                            <Heading2>Header 2</Heading2>
                            <Heading3>Header 3</Heading3>
                            <Heading4>Header 4</Heading4>
                            <Heading5>Header 5</Heading5>
                            <Heading6>Header 6</Heading6>
                            <Hint>Hint</Hint>
                            <Code>code_here</Code>
                        </Container>
                        )}
                        {showTab['typography'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('typography')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Buttons">Buttons</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['buttons'] ? 'active' : ''} 
                                onClick={() => doHideTab('buttons')}>View</Tab>
                            <Tab factor={showTab['buttons'] ? 'active' : ''}
                                onClick={() => doShowTab('buttons')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('buttons')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['buttons'] && (
                        <>
                        <Container>
                            <Hint>Basic buttons</Hint>
                            <Enum>
                                <EnumItem><Button factor="primary">primary</Button></EnumItem>
                                <EnumItem><Button factor="secondary">secondary</Button></EnumItem>
                                <EnumItem><Button factor="tertiary">tertiary</Button></EnumItem>
                                <EnumItem><Button factor="danger">danger</Button></EnumItem>
                            </Enum>
                        </Container>
                        <Container>
                            <Hint>Outline buttons</Hint>
                            <Enum>
                                <EnumItem><Button factor="primary outline">primary</Button></EnumItem>
                                <EnumItem><Button factor="secondary outline">secondary</Button></EnumItem>
                                <EnumItem><Button factor="tertiary outline">tertiary</Button></EnumItem>
                                <EnumItem><Button factor="danger outline">danger</Button></EnumItem>
                            </Enum>
                        </Container>
                        <Container>
                            <Hint>Large buttons</Hint>
                            <Enum>
                                <EnumItem><Button factor="primary large">primary</Button></EnumItem>
                                <EnumItem><Button factor="secondary large">secondary</Button></EnumItem>
                                <EnumItem><Button factor="tertiary large">tertiary</Button></EnumItem>
                                <EnumItem><Button factor="danger large">danger</Button></EnumItem>
                            </Enum>
                        </Container>
                        <Container>
                            <Hint>Small buttons</Hint>
                            <Enum>
                                <EnumItem><Button factor="primary small">primary</Button></EnumItem>
                                <EnumItem><Button factor="secondary small">secondary</Button></EnumItem>
                                <EnumItem><Button factor="tertiary small">tertiary</Button></EnumItem>
                                <EnumItem><Button factor="danger small">danger</Button></EnumItem>
                            </Enum>
                        </Container>
                        <Container>
                            <Hint>Icon buttons</Hint>
                            <Enum>
                                <Button factor="primary">
                                    <Icon name="github"></Icon>
                                </Button>
                            </Enum>
                            <Hint>Colorcode Design uses a 3rdparty lib for icons, namely <a href="https://akveo.github.io/eva-icons/#/" target="_blank">eva icons</a>.</Hint>
                        </Container>
                        </>)}
                        {showTab['buttons'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('buttons')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Forms">Form controls</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['formControls'] ? 'active' : ''} 
                                onClick={() => doHideTab('formControls')}>View</Tab>
                            <Tab factor={showTab['formControls'] ? 'active' : ''}
                                onClick={() => doShowTab('formControls')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('formControls')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['formControls'] && (
                        <>
                        <Container>
                            <Hint>Text input</Hint>
                            <TextInput placeholder="hello"></TextInput>
                        </Container>
                        <Container>
                            <Hint>Block text input</Hint>
                            <TextInput factor="block" placeholder="hello"></TextInput>
                        </Container>
                        <Container>
                            <Hint>Textarea</Hint>
                            <Textarea factor="block" placeholder="hello" style={{height: '150px'}}/>
                        </Container>
                        <Container>
                            <Hint>Select input</Hint>
                            <SelectInput factor="block" placeholder="hello">
                                <option>a</option>
                                <option>b</option>
                            </SelectInput>
                        </Container>
                        <Container>
                            <Hint>Checkbox</Hint>
                            <Enum factor="column">
                                <EnumItem><Checkbox id="checkbox-1" name="checkbox-1" label="regular checkbox" /></EnumItem>
                                <EnumItem><Checkbox id="checkbox-2" name="checkbox-2" factor="disabled" label="disabled checkbox" /></EnumItem>
                                <EnumItem><Checkbox id="checkbox-3" name="checkbox-1" factor="checked" label="checked by default" /></EnumItem>
                                <EnumItem><Checkbox id="checkbox-4" name="checkbox-1" factor="checked disabled" label="checked and disabled" /></EnumItem>
                            </Enum>
                        </Container>
                        <Container>
                            <Hint>Radio</Hint>
                            <Enum>
                                <EnumItem><RadioOption id="radio-4" name="radio-2" value="1" label="option 1" factor="checked" /></EnumItem>
                                <EnumItem><RadioOption id="radio-5" name="radio-2" value="2" label="option 2" /></EnumItem>
                                <EnumItem><RadioOption id="radio-6" name="radio-2" value="3" label="option 3" /></EnumItem>
                            </Enum>
                            <Separator size="10px" />
                            <Enum factor="column">
                                <EnumItem><RadioOption id="radio-1" name="radio-1" value="1" label="option 1" factor="checked" /></EnumItem>
                                <EnumItem><RadioOption id="radio-2" name="radio-1" value="2" label="option 2" /></EnumItem>
                                <EnumItem><RadioOption id="radio-3" name="radio-1" value="3" label="option 3" /></EnumItem>
                            </Enum>
                        </Container>
                        </>)}
                        {showTab['formControls'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('formControls')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Badges">Badges</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['badges'] ? 'active' : ''} 
                                onClick={() => doHideTab('badges')}>View</Tab>
                            <Tab factor={showTab['badges'] ? 'active' : ''}
                                onClick={() => doShowTab('badges')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('badges')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['badges'] && (
                        <Container>
                            <Enum style={{lineHeight: '20px'}}>
                                <EnumItem><Badge factor="primary">primary</Badge></EnumItem>
                                <EnumItem><Badge factor="secondary">secondary</Badge></EnumItem>
                                <EnumItem><Badge factor="success">success</Badge></EnumItem>
                                <EnumItem><Badge factor="warning">warning</Badge></EnumItem>
                                <EnumItem><Badge factor="danger">danger</Badge></EnumItem>
                                <EnumItem><Badge factor="info">info</Badge></EnumItem>
                            </Enum>
                            <Separator size="5px"></Separator>
                            <Enum style={{lineHeight: '30px'}}>
                                <EnumItem><Badge factor="large primary">primary</Badge></EnumItem>
                                <EnumItem><Badge factor="large secondary">secondary</Badge></EnumItem>
                                <EnumItem><Badge factor="large success">success</Badge></EnumItem>
                                <EnumItem><Badge factor="large warning">warning</Badge></EnumItem>
                                <EnumItem><Badge factor="large danger">danger</Badge></EnumItem>
                                <EnumItem><Badge factor="large info">info</Badge></EnumItem>
                            </Enum>
                        </Container>
                        )}
                        {showTab['badges'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('badges')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Breadcrumbs">Breadcrumbs</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['breadcrumbs'] ? 'active' : ''} 
                                onClick={() => doHideTab('breadcrumbs')}>View</Tab>
                            <Tab factor={showTab['breadcrumbs'] ? 'active' : ''}
                                onClick={() => doShowTab('breadcrumbs')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('breadcrumbs')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['breadcrumbs'] && (
                        <>
                        <Container>
                            <Hint>Basic example</Hint>
                            <Breadcrumbs>
                                <Breadcrumb><a href="#">first</a></Breadcrumb>
                                <Breadcrumb link="abcd">second</Breadcrumb>
                                <Breadcrumb link="abcd">third</Breadcrumb>
                            </Breadcrumbs>
                        </Container>
                        <Container>
                            <Hint>Custom divider</Hint>
                            <Breadcrumbs divider={<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta5/1.5/16/1f642.png" />}>
                                <Breadcrumb><a href="#">first</a></Breadcrumb>
                                <Breadcrumb link="abcd">second</Breadcrumb>
                                <Breadcrumb link="abcd">third</Breadcrumb>
                            </Breadcrumbs>
                        </Container>
                        </>)}
                        {showTab['breadcrumbs'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('breadcrumbs')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Progress">Progress</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['progress'] ? 'active' : ''} 
                                onClick={() => doHideTab('progress')}>View</Tab>
                            <Tab factor={showTab['progress'] ? 'active' : ''}
                                onClick={() => doShowTab('progress')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('progress')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['progress'] && (
                        <Container>
                            <Enum orientation="column">
                                <EnumItem><Progress factor="primary" value="40" /></EnumItem>
                                <EnumItem><Progress factor="secondary" value="40" /></EnumItem>
                                <EnumItem><Progress factor="success" value="40" /></EnumItem>
                                <EnumItem><Progress factor="warning" value="40" /></EnumItem>
                                <EnumItem><Progress factor="danger" value="40" /></EnumItem>
                                <EnumItem><Progress factor="info" value="40" /></EnumItem>
                            </Enum>
                        </Container>
                        )}
                        {showTab['progress'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('progress')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Card">Card</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['card'] ? 'active' : ''} 
                                onClick={() => doHideTab('card')}>View</Tab>
                            <Tab factor={showTab['card'] ? 'active' : ''}
                                onClick={() => doShowTab('card')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('card')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['card'] && (
                        <Container>
                            <Card style={{maxWidth: '300px'}}>
                                <CardHeader>Title here</CardHeader>
                                <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elementum mi, vitae ornare ipsum. Fusce congue orci sit amet mi mattis finibus. </CardBody>
                            </Card>
                        </Container>
                        )}
                        {showTab['card'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('card')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Avatar">Avatar</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['avatar'] ? 'active' : ''} 
                                onClick={() => doHideTab('avatar')}>View</Tab>
                            <Tab factor={showTab['avatar'] ? 'active' : ''}
                                onClick={() => doShowTab('avatar')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('avatar')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['avatar'] && (
                        <Container>
                            <Avatar src="https://image.shutterstock.com/image-illustration/male-default-placeholder-avatar-profile-260nw-582509551.jpg"></Avatar>
                        </Container>
                        )}
                        {showTab['avatar'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('avatar')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Initials">Initials</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['initials'] ? 'active' : ''} 
                                onClick={() => doHideTab('initials')}>View</Tab>
                            <Tab factor={showTab['initials'] ? 'active' : ''}
                                onClick={() => doShowTab('initials')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('initials')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['initials'] && (
                        <Container>
                            <Container>
                                <Text>You can either provide a color, or you can let the component compute a random hash based on the name.</Text>
                            </Container>
                            
                            <Enum>
                                <EnumItem><Initials name="Emmett Brown" /></EnumItem>
                                <EnumItem><Initials name="Marty McFly" /></EnumItem>
                                <EnumItem><Initials name="Lorraine Baines" /></EnumItem>
                                <EnumItem><Initials color="#c0392b" name="George McFly" /></EnumItem>
                                <EnumItem><Initials name="Biff Tannen" /></EnumItem>
                                <EnumItem><Initials name="Goldie Wilson" /></EnumItem>
                                <EnumItem><Initials name="Marvin Berry" /></EnumItem>
                                <EnumItem><Initials name="Clara Clayton" /></EnumItem>
                            </Enum>
                        </Container>
                        )}
                        {showTab['initials'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('initials')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Dropdown">Dropdown</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['dropdown'] ? 'active' : ''} 
                                onClick={() => doHideTab('dropdown')}>View</Tab>
                            <Tab factor={showTab['dropdown'] ? 'active' : ''}
                                onClick={() => doShowTab('dropdown')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('dropdown')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>
                        {!showTab['dropdown'] && (
                        <Container>
                            <DropdownToggle>
                                <Button factor="primary">hover me</Button>
                                <DropdownList>
                                    <NavContainer factor="column">
                                        <NavItem>Option 1</NavItem>
                                        <NavItem>Option 2</NavItem>
                                        <NavSeparator />
                                        <NavItem>Option 3</NavItem>
                                    </NavContainer>
                                </DropdownList>
                            </DropdownToggle>
                        </Container>
                        )}
                        {showTab['dropdown'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('dropdown')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Alert">Alert</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['alert'] ? 'active' : ''} 
                                onClick={() => doHideTab('alert')}>View</Tab>
                            <Tab factor={showTab['alert'] ? 'active' : ''}
                                onClick={() => doShowTab('alert')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('alert')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>
                        {!showTab['alert'] && (
                        <Container>
                            <Heading4>Regular</Heading4>
                            <Enum orientation="column">
                                <Alert factor="primary">This is a primary alert.</Alert>
                                <Alert factor="secondary">This is a secondary alert.</Alert>
                                <Alert factor="info">This is a info alert.</Alert>
                                <Alert factor="warning">This is a warning alert.</Alert>
                                <Alert factor="success">This is a success alert.</Alert>
                                <Alert factor="danger">This is a danger alert.</Alert>
                            </Enum>

                            <Heading4>Dismissable</Heading4>
                            <Enum orientation="column">
                                <Alert factor="primary dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable primary alert.</Alert>
                                <Alert factor="secondary dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable secondary alert.</Alert>
                                <Alert factor="info dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable info alert.</Alert>
                                <Alert factor="warning dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable warning alert.</Alert>
                                <Alert factor="success dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable success alert.</Alert>
                                <Alert factor="danger dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable danger alert.</Alert>
                            </Enum>
                        </Container>
                        )}
                        {showTab['dropdown'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('dropdown')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Modal">Modal</Heading2>
                        
                        <TabContainer>
                            <Tab factor={!showTab['modal'] ? 'active' : ''} 
                                onClick={() => doHideTab('modal')}>View</Tab>
                            <Tab factor={showTab['modal'] ? 'active' : ''}
                                onClick={() => doShowTab('modal')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('modal')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['modal'] && (
                        <Enum>
                            <EnumItem><Button factor="primary" onClick={() => setShowModal(true)}>show a simple modal</Button></EnumItem>
                            <EnumItem><Button factor="primary" onClick={() => setShowFullModal(true)}>show a complete example</Button></EnumItem>
                        </Enum>
                        )}
                        {showTab['modal'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('modal')}
                            </SyntaxHighlighter>
                        )}

                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <Container><Heading2>Hello!</Heading2></Container>
                            </Modal>
                        )}

                        {showFullModal && (
                            <Modal onClose={() => setShowFullModal(false)}>
                                <ModalHeader>Modal title</ModalHeader>
                                <ModalContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis placerat dignissim. Pellentesque finibus sem eget elementum dictum. Mauris eu dui sed quam elementum gravida a eget felis. Aliquam eget ornare erat. Aliquam erat volutpat. Morbi ac molestie augue. Maecenas egestas, tellus vel venenatis pulvinar, lorem lacus scelerisque sem, eget fermentum dui sapien at tortor. Vestibulum aliquam, magna a fermentum euismod, risus tortor tempor tellus, nec porta turpis lorem ultricies nulla. 
                                </ModalContent>
                                <ModalFooter>
                                    <Button factor="secondary" onClick={() => setShowFullModal(false)}>close</Button>
                                    <Button factor="primary">save</Button>
                                </ModalFooter>
                            </Modal>
                        )}

                        <Heading2 id="Tooltip">Tooltip</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['tooltip'] ? 'active' : ''} 
                                onClick={() => doHideTab('tooltip')}>View</Tab>
                            <Tab factor={showTab['tooltip'] ? 'active' : ''}
                                onClick={() => doShowTab('tooltip')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('tooltip')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['tooltip'] && (
                        <Enum>
                            <EnumItem>
                                <Tooltip value="tooltip text" factor="top">
                                    <Button factor="primary">top</Button>
                                </Tooltip>
                            </EnumItem>
                            <EnumItem>
                                <Tooltip value="a larger tooltip here, lorem ipsum dolor sit amet." factor="bottom">
                                    <Button factor="primary">bottom</Button>
                                </Tooltip>
                            </EnumItem>
                            <EnumItem>
                                <Tooltip value="tooltip text" factor="left">
                                    <Button factor="primary">left</Button>
                                </Tooltip>
                            </EnumItem>
                            <EnumItem>
                                <Tooltip value="tooltip text" factor="right">
                                    <Button factor="primary">right</Button>
                                </Tooltip>
                            </EnumItem>
                        </Enum>
                        
                        )}

                        <Heading2 id="Toast">Toast</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['toast'] ? 'active' : ''} 
                                onClick={() => doHideTab('toast')}>View</Tab>
                            <Tab factor={showTab['toast'] ? 'active' : ''}
                                onClick={() => doShowTab('toast')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('toast')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['toast'] && (
                        <Enum>
                            <EnumItem><Button factor="primary" onClick={() => toastRef.current.success("hello world")}>show success</Button></EnumItem>
                            <EnumItem><Button factor="primary" onClick={() => toastRef.current.warning("hello world")}>show warning</Button></EnumItem>
                            <EnumItem><Button factor="primary" onClick={() => toastRef.current.danger("hello world")}>show danger</Button></EnumItem>
                            <EnumItem><Button factor="primary" onClick={() => toastRef.current.info("hello world")}>show info</Button></EnumItem>
                        </Enum>
                        )}
                        {showTab['toast'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('toast')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Header">Header</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['header'] ? 'active' : ''} 
                                onClick={() => doHideTab('header')}>View</Tab>
                            <Tab factor={showTab['header'] ? 'active' : ''}
                                onClick={() => doShowTab('header')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('header')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['header'] && (
                        <Container>
                            <Header></Header>
                        </Container>
                        )}
                        {showTab['header'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('header')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Footer">Footer</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['footer'] ? 'active' : ''} 
                                onClick={() => doHideTab('footer')}>View</Tab>
                            <Tab factor={showTab['footer'] ? 'active' : ''}
                                onClick={() => doShowTab('footer')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('footer')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['footer'] && (
                        <Container>
                            <Footer></Footer>
                        </Container>
                        )}
                        {showTab['footer'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('footer')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Table">Table</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['table'] ? 'active' : ''} 
                                onClick={() => doHideTab('table')}>View</Tab>
                            <Tab factor={showTab['table'] ? 'active' : ''}
                                onClick={() => doShowTab('table')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('table')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['table'] && (
                        <Container style={{overflowX: 'auto'}}>
                            <Table className="block">
                                <TableHeader>
                                    <TableHeaderRow>
                                        <TableHeaderCell>Column 1</TableHeaderCell>
                                        <TableHeaderCell>Column 2</TableHeaderCell>
                                        <TableHeaderCell>Column 3</TableHeaderCell>
                                        <TableHeaderCell>Column 4</TableHeaderCell>
                                        <TableHeaderCell>Column 5</TableHeaderCell>
                                    </TableHeaderRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>abc</TableCell>
                                        <TableCell>def</TableCell>
                                        <TableCell>ghi</TableCell>
                                        <TableCell>jkl</TableCell>
                                        <TableCell>mnop</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>abc</TableCell>
                                        <TableCell>def</TableCell>
                                        <TableCell>ghi</TableCell>
                                        <TableCell>jkl</TableCell>
                                        <TableCell>mnop</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>abc</TableCell>
                                        <TableCell>def</TableCell>
                                        <TableCell>ghi</TableCell>
                                        <TableCell>jkl</TableCell>
                                        <TableCell>mnop</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>abc</TableCell>
                                        <TableCell>def</TableCell>
                                        <TableCell>ghi</TableCell>
                                        <TableCell>jkl</TableCell>
                                        <TableCell>mnop</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>abc</TableCell>
                                        <TableCell>def</TableCell>
                                        <TableCell>ghi</TableCell>
                                        <TableCell>jkl</TableCell>
                                        <TableCell>mnop</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Container>
                        )}
                        {showTab['table'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('table')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Nav">Nav</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['nav'] ? 'active' : ''} 
                                onClick={() => doHideTab('nav')}>View</Tab>
                            <Tab factor={showTab['nav'] ? 'active' : ''}
                                onClick={() => doShowTab('nav')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('nav')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['nav'] && (
                        <Container>
                            <Heading3 factor="condensed">Row</Heading3>
                            <NavContainer>
                                <NavItem>Item 1</NavItem>
                                <NavItem>Item 2</NavItem>
                                <NavItem factor="active">Item 3</NavItem>
                                <NavSeparator />
                                <NavItem factor="disabled">Item 4</NavItem>
                            </NavContainer>

                            <Heading3>Column</Heading3>
                            <NavContainer factor="column">
                                <NavItem>Item 1</NavItem>
                                <NavItem>Item 2</NavItem>
                                <NavItem factor="active">Item 3</NavItem>
                                <NavSeparator />
                                <NavItem factor="disabled">Item 4</NavItem>
                            </NavContainer>
                        </Container>
                        )}
                        {showTab['nav'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('nav')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Tabs">Tabs</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['tabs'] ? 'active' : ''} 
                                onClick={() => doHideTab('tabs')}>View</Tab>
                            <Tab factor={showTab['tabs'] ? 'active' : ''}
                                onClick={() => doShowTab('tabs')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('tabs')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['tabs'] && (
                        <Container>
                            <TabContainer>
                                <Tab>Tab 1</Tab>
                                <Tab>Tab 2</Tab>
                                <Tab factor="active">Tab 3</Tab>
                                <Tab>Tab 4</Tab>
                                <Tab factor="disabled">Tab 5</Tab>
                            </TabContainer>
                        </Container>
                        )}
                        {showTab['tabs'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('tabs')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Pills">Pills</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['pills'] ? 'active' : ''} 
                                onClick={() => doHideTab('pills')}>View</Tab>
                            <Tab factor={showTab['pills'] ? 'active' : ''}
                                onClick={() => doShowTab('pills')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('pills')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['pills'] && (
                        <Container>
                            <Heading3 factor="condensed">Row</Heading3>
                            <PillContainer>
                                <Pill>Pill 1</Pill>
                                <Pill>Pill 2</Pill>
                                <Pill factor="active">Pill 3</Pill>
                                <Pill>Pill 4</Pill>
                                <Pill factor="disabled">Pill 5</Pill>
                            </PillContainer>

                            <Heading3>Column</Heading3>
                            <PillContainer factor="column">
                                <Pill>Pill 1</Pill>
                                <Pill>Pill 2</Pill>
                                <Pill factor="active">Pill 3</Pill>
                                <Pill>Pill 4</Pill>
                                <Pill factor="disabled">Pill 5</Pill>
                            </PillContainer>
                        </Container>
                        )}
                        {showTab['pills'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('pills')}
                            </SyntaxHighlighter>
                        )}

                        <Heading2 id="Spinner">Spinner</Heading2>

                        <TabContainer>
                            <Tab factor={!showTab['spinner'] ? 'active' : ''} 
                                onClick={() => doHideTab('spinner')}>View</Tab>
                            <Tab factor={showTab['spinner'] ? 'active' : ''}
                                onClick={() => doShowTab('spinner')}>React</Tab>
                            {!hideTryInEditor && (<Tab onClick={() => tryInEditor('spinner')}>
                                Try in Editor <Icon name={editorIcon}></Icon>
                            </Tab>)}
                        </TabContainer>

                        {!showTab['spinner'] && (
                        <Container>
                            <Enum>
                                <EnumItem><Spinner></Spinner></EnumItem>
                                <EnumItem><Spinner factor="red" size="25px"></Spinner></EnumItem>
                            </Enum>
                        </Container>
                        )}
                        {showTab['spinner'] && (
                            <SyntaxHighlighter language="html" style={docco}>
                                {getSampleCode('spinner')}
                            </SyntaxHighlighter>
                        )}

                    </Container>
                </Col>
            </Row>
       </>
    )
}