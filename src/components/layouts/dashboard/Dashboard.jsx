import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { Button } from "../../../lib/Buttons";
import {
  Container,
  Content,
  Header,
  Footer,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Separator
} from "../../../lib/Layout";
import {
  SelectInput,
  TextInput,
  Textarea,
  DropdownToggle,
  DropdownList,
  Checkbox,
  RadioOption
} from "../../../lib/Forms";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from "../../../lib/Modal";
import {
  Heading2,
  Heading3,
  Heading4,
  Icon,
  Code,
  Hint
} from "../../../lib/Typography";
import {
  TableHeader,
  TableHeaderCell,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderRow
} from "../../../lib/Table";
import { NavContainer, NavItem, NavSeparator } from "../../../lib/Nav";
import { Alert, Initials, Badge } from "../../../lib/Other";

export function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="layout-container">
      <Content className="dashboard-container">
        <Header className={"app-header"}>
          <Row>
            <Col factor="col-6 pull-v-center">
              <Container>
                <span className="app-logo-text">CompanyLogo</span>
              </Container>
            </Col>
            <Col factor="col-6 col-inline col-right col-v-center hide-lt-md show-gt-md">
              <Container factor="pull-right">
                <Button factor="primary">stats</Button>
                <Button factor="primary">
                  alerts
                  <Badge factor="danger">99+</Badge>
                </Button>
                <DropdownToggle>
                  <Button factor="primary">more</Button>
                  <DropdownList factor="right">
                    <NavContainer factor="column">
                      <NavItem>option 1</NavItem>
                      <NavItem>option 2</NavItem>
                      <NavSeparator />
                      <NavItem>option 3</NavItem>
                    </NavContainer>
                  </DropdownList>
                </DropdownToggle>
                <Button factor="secondary">sign out</Button>
              </Container>
            </Col>
            <Col factor="col-6 col-inline col-right col-v-center show-lt-md hide-gt-md">
              <Button
                factor="primary large"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <Icon name="menu-outline"></Icon>
              </Button>
            </Col>
          </Row>
        </Header>
        {showMenu && (
          <Row factor="hide-gt-md" className="mobile-menu">
            <Col factor="col-12">
              <NavContainer factor="column">
                <NavItem>stats</NavItem>
                <NavItem>option 1</NavItem>
                <NavItem>option 2</NavItem>
                <NavItem>option 3</NavItem>
                <NavItem>
                  <Button factor="danger block">sign out</Button>
                </NavItem>
              </NavContainer>
            </Col>
          </Row>
        )}
        <Row className="dashboard-app-row">
          <Col factor="col-2 col-sm-12 dashboard-menu">
            <Container>
              <Container factor="pull-h-center">
                <Initials name="John Doe" />
              </Container>

              <Separator size="30px" />

              <NavContainer factor="column">
                <NavItem>
                  <Icon name="home-outline" className="nav-icon" />
                  Home
                </NavItem>
                <NavItem>
                  <Icon name="activity-outline" className="nav-icon" />
                  Insights
                </NavItem>
                <NavItem>
                  <Icon name="bar-chart-outline" className="nav-icon" />
                  Buttons
                </NavItem>
                <NavItem>
                  <Icon name="bell-outline" className="nav-icon" />
                  Form controls
                </NavItem>
                <NavItem>
                  <Icon name="camera-outline" className="nav-icon" />
                  Badges
                </NavItem>
                <NavItem>
                  <Icon name="clipboard-outline" className="nav-icon" />
                  Breadcrumbs
                </NavItem>
                <NavItem>
                  <Icon name="email-outline" className="nav-icon" />
                  Progress
                </NavItem>
              </NavContainer>
            </Container>
          </Col>
          <Col factor="col-10 col-sm-12">
            <Alert factor="danger" onClose={() => {}}>
              This is a dummy alert for the dashboard template.
            </Alert>

            <Row>
              <Col factor="col-8">
                <Heading3>At a glance</Heading3>
                <Link to="/layouts">
                    <Button factor="secondary">back to layouts</Button>
                </Link>

              </Col>
              <Col factor="col-4">
                <Heading3>Extra</Heading3>
                <Hint>
                  Some extra information here. Lorem ipsum dolor sit amet.
                </Hint>
              </Col>
            </Row>

            <Separator size="10px" />

            <Row>
              <Col factor="col-6 col-md-12">
                <Card>
                  <CardHeader>Stat 1</CardHeader>
                  <CardBody></CardBody>
                </Card>
              </Col>
              <Col factor="col-6 col-md-12">
                <Card>
                  <CardHeader>Stat 2</CardHeader>
                  <CardBody></CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col factor="col-6 col-md-12">
                <Card>
                  <CardHeader>Stat 3</CardHeader>
                  <CardBody></CardBody>
                </Card>
              </Col>
              <Col factor="col-6 col-md-12">
                <Card>
                  <CardHeader>Stat 4</CardHeader>
                  <CardBody></CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer>
        <Row>
          <Col factor="pull-v-center pull-h-center">
            Copyright &copy; yourCompany, 2019
          </Col>
        </Row>
      </Footer>
    </Content>
    </div>
  );
}
