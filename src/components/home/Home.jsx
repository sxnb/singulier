import React, { useState } from 'react';
import { Route, Link, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ButtonPrimary, Button } from '../../lib';
import { Container, Row, Col, Header, Footer } from '../../lib';
import { Heading2, Icon } from '../../lib';
import './styles.scss';
import DS from '../ds';
import Palette from '../palette';
import Intro from '../intro';
import Editor from '../editor';
import About from '../about';
import Layouts from '../layouts';
import { NavContainer, NavItem, NavSeparator } from '../../lib';
import { DropdownToggle, DropdownList } from '../../lib';
import Login from '../layouts/login';
import Dashboard from '../layouts/dashboard';
import License from '../license';

export function Home() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <Router>
            <Header className={"app-header"}>
                <Row>
                    <Col factor="col-6 pull-v-center">
                        <Link to="/"><span className="app-logo-text">Colorcode•Design</span></Link>
                    </Col>
                    <Col factor="col-6 col-inline col-right col-v-center hide-lt-md show-gt-md">
                        <Link to="/about"><Button factor="primary large">about</Button></Link>
                        <Link to="/singulier"><Button factor="primary large">components</Button></Link>
                        <Link to="/editor"><Button factor="primary large">editor</Button></Link>
                        <DropdownToggle>
                            <Button factor="primary large">more</Button>
                            <DropdownList factor="right">
                                <NavContainer factor="column">
                                    <Link to="/layouts"><NavItem>layouts</NavItem></Link>
                                    <Link to="/palette"><NavItem>palette</NavItem></Link>
                                    <NavSeparator/>
                                    <Link to="/license"><NavItem>license</NavItem></Link>
                                </NavContainer>
                            </DropdownList>
                        </DropdownToggle>
                        {/* <ButtonPrimary size="large"><Icon name="github"></Icon></ButtonPrimary> */}
                    </Col>
                    <Col factor="col-6 col-inline col-right col-v-center show-lt-md hide-gt-md">
                        <Button factor="primary large" onClick={() => {setShowMenu(!showMenu);}}>
                            <Icon name="menu-outline"></Icon>
                        </Button>
                    </Col>
                </Row>
            </Header>
            {showMenu && (<Row factor="hide-gt-md" className="mobile-menu">
                <Col factor="col-12">
                    <NavContainer factor="column">
                    <Link to="/about"><NavItem>about</NavItem></Link>
                    <Link to="/singulier"><NavItem>components</NavItem></Link>
                    <Link to="/editor"><NavItem>editor</NavItem></Link>
                    <Link to="/layouts"><NavItem>layouts</NavItem></Link>
                    <Link to="/palette"><NavItem>palette</NavItem></Link>
                    <Link to="/license"><NavItem>license</NavItem></Link>
                    </NavContainer>
                </Col>
            </Row>)}
            <Row>
                <Col type="col-12">
                    <Switch>
                        <Route path="/singulier" component={DS} />
                        <Route path="/editor" component={Editor} />
                        <Route path="/license" component={License} />
                        <Route path="/palette" component={Palette} />
                        <Route path="/about" component={About} />
                        <Route path="/layouts/login" component={Login} />
                        <Route path="/layouts/dashboard" component={Dashboard} />
                        <Route path="/layouts" component={Layouts} />
                       <Route path="/" component={Intro} />
                    </Switch>
                </Col>
            </Row>
        <Footer>
            <Row>
                <Col factor="pull-v-center pull-h-center">
                    <div>Copyright &copy; 2019 <a className="ccd-link" href="http://about.colorcode.me" rel="noopener noreferrer" target="_blank">Colorcode</a>.</div>
                </Col>
            </Row>
        </Footer>
       </Router>
    )
}