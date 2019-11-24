export default {
    layout: `
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
    </Row>`,
    typography: `
    <Heading1>Header 1</Heading1>
    <Heading2>Header 2</Heading2>
    <Heading3>Header 3</Heading3>
    <Heading4>Header 4</Heading4>
    <Heading5>Header 5</Heading5>
    <Heading6>Header 6</Heading6>
    <Hint>Hint</Hint>
    <Code>code_here</Code>`,
    buttons: `
    <!-- Basic buttons -->
    <Button factor="primary">primary</Button>
    <Button factor="secondary">secondary</Button>
    <Button factor="tertiary">tertiary</Button>
    <Button factor="danger">danger</Button>

    <!-- Outline buttons -->
    <Button factor="primary outline">primary</Button>
    <Button factor="secondary outline">secondary</Button>
    <Button factor="tertiary outline">tertiary</Button>
    <Button factor="danger outline">danger</Button>

    <!-- Large buttons -->
    <Button factor="primary large">primary</Button>
    <Button factor="secondary large">secondary</Button>
    <Button factor="tertiary large">tertiary</Button>
    <Button factor="danger large">danger</Button>

    <!-- Small buttons -->
    <Button factor="primary small">primary</Button>
    <Button factor="secondary small">secondary</Button>
    <Button factor="tertiary small">tertiary</Button>
    <Button factor="danger small">danger</Button>

    <!-- Icon buttons -->
    <Button factor="primary">
        <Icon name="github"></Icon>
    </Button>`,
    formControls: `
    <!-- Text input -->
    <TextInput placeholder="hello"></TextInput>

    <!-- Block text input -->
    <TextInput factor="block" placeholder="hello"></TextInput>

    <!-- Select input -->
    <SelectInput placeholder="hello">
        <option>a</option>
        <option>b</option>
    </SelectInput>
    
    <!-- Checkbox -->
    <Checkbox id="checkbox-1" name="checkbox-1" label="regular checkbox" />
    <Checkbox id="checkbox-2" name="checkbox-1" factor="disabled" label="disabled checkbox" />
    <Checkbox id="checkbox-3" name="checkbox-1" factor="checked" label="checked by default" />
    <Checkbox id="checkbox-4" name="checkbox-1" factor="checked disabled" label="checked and disabled" />

    <!-- Radio -->
    <RadioOption id="radio-1" name="radio-1" value="1" label="option 1" factor="checked" />
    <RadioOption id="radio-2" name="radio-1" value="2" label="option 2" />
    <RadioOption id="radio-3" name="radio-1" value="3" label="option 3" />`,
    badges: `
    <!-- Normal -->
    <Badge factor="primary">primary</Badge>
    <Badge factor="secondary">secondary</Badge>
    <Badge factor="success">success</Badge>
    <Badge factor="warning">warning</Badge>
    <Badge factor="error">error</Badge>
    <Badge factor="info">info</Badge>

    <!-- Large -->
    <Badge factor="primary large">primary</Badge>
    <Badge factor="secondary large">secondary</Badge>
    <Badge factor="success large">success</Badge>
    <Badge factor="warning large">warning</Badge>
    <Badge factor="error large">error</Badge>
    <Badge factor="info large">info</Badge>`,
    breadcrumbs: `
    <!-- Basic example -->
    <Breadcrumbs>
        <Breadcrumb><a href="#">first</a></Breadcrumb>
        <Breadcrumb link="abcd">second</Breadcrumb>
        <Breadcrumb link="abcd">third</Breadcrumb>
    </Breadcrumbs>

    <!-- Custom divider -->
    <Breadcrumbs divider={<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta5/1.5/16/1f642.png" />}>
        <Breadcrumb><a href="#">first</a></Breadcrumb>
        <Breadcrumb link="abcd">second</Breadcrumb>
        <Breadcrumb link="abcd">third</Breadcrumb>
    </Breadcrumbs>`,
    progress: `
    <Progress factor="primary" value="40" />
    <Progress factor="secondary" value="40" />
    <Progress factor="success" value="40" />
    <Progress factor="warning" value="40" />
    <Progress factor="danger" value="40" />
    <Progress factor="info" value="40" />`,
    card: `
    <Card>
        <CardHeader>Title here</CardHeader>
        <CardBody>Body here</CardBody>
    </Card>`,
    avatar: `    
    <Avatar src="https://image.shutterstock.com/image-illustration/male-default-placeholder-avatar-profile-260nw-582509551.jpg"></Avatar>

    <Avatar src="https://www.website.com/image.jpg" size="150px"></Avatar>`,
    initials: `
    <Initials name="Marty McFly" />

    <Initials color="#c0392b" name="George McFly" />`,
    alert: `
    <!-- Regular -->
    <Alert factor="primary">This is a primary alert.</Alert>
    <Alert factor="secondary">This is a secondary alert.</Alert>
    <Alert factor="info">This is a info alert.</Alert>
    <Alert factor="warning">This is a warning alert.</Alert>
    <Alert factor="success">This is a success alert.</Alert>
    <Alert factor="danger">This is a danger alert.</Alert>
    
    <!-- Dismissable -->
    <Alert factor="primary dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable primary alert.</Alert>
    <Alert factor="secondary dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable secondary alert.</Alert>
    <Alert factor="info dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable info alert.</Alert>
    <Alert factor="warning dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable warning alert.</Alert>
    <Alert factor="success dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable success alert.</Alert>
    <Alert factor="danger dismissable" onClose={() => {alert('dismissed.');}}>This is a dismissable danger alert.</Alert>`,
    modal: `
    <!-- Simple example -->
    <Modal onClose={() => {}} factor="inline">
        <Container>
            <Heading2>Hello!</Heading2>
        </Container>
    </Modal>

    <!-- Full example -->
    <Modal onClose={() => {}} factor="inline">
        <ModalHeader>Modal title</ModalHeader>
        <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis placerat dignissim. Pellentesque finibus sem eget elementum dictum. Mauris eu dui sed quam elementum gravida a eget felis. Aliquam eget ornare erat. Aliquam erat volutpat. Morbi ac molestie augue. Maecenas egestas, tellus vel venenatis pulvinar, lorem lacus scelerisque sem, eget fermentum dui sapien at tortor. Vestibulum aliquam, magna a fermentum euismod, risus tortor tempor tellus, nec porta turpis lorem ultricies nulla. 
        </ModalContent>
        <ModalFooter>
            <Button factor="secondary" onClick={() => {}}>close</Button>
            <Button factor="primary">save</Button>
        </ModalFooter>
    </Modal>`,
    tooltip: `
    <Tooltip value="tooltip text" factor="top">
        <Button factor="primary">top</Button>
    </Tooltip>

    <Tooltip value="a larger tooltip here, lorem ipsum dolor sit amet." factor="bottom">
        <Button factor="primary">bottom</Button>
    </Tooltip>

    <Tooltip value="tooltip text" factor="left">
        <Button factor="primary">left</Button>
    </Tooltip>

    <Tooltip value="tooltip text" factor="right">
        <Button factor="primary">right</Button>
    </Tooltip>`,
    toast: `
    <Button factor="primary" onClick={() => toastRef.current.success("hello world")}>show success</Button>
    <Button factor="primary" onClick={() => toastRef.current.warning("hello world")}>show warning</Button>
    <Button factor="primary" onClick={() => toastRef.current.error("hello world")}>show error</Button>
    <Button factor="primary" onClick={() => toastRef.current.info("hello world")}>show info</Button>`,
    header: `    <Header></Header>`,
    footer: `    <Footer></Footer>`,
    table: `
    <Table>
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
    </Table>`,
    nav: `
    <!-- Row -->
    <NavContainer>
        <NavItem>Item 1</NavItem>
        <NavItem>Item 2</NavItem>
        <NavItem factor="active">Item 3</NavItem>
        <NavSeparator />
        <NavItem factor="disabled">Item 4</NavItem>
    </NavContainer>

    <!-- Column -->
    <NavContainer factor="column">
        <NavItem>Item 1</NavItem>
        <NavItem>Item 2</NavItem>
        <NavItem factor="active">Item 3</NavItem>
        <NavSeparator />
        <NavItem factor="disabled">Item 4</NavItem>
    </NavContainer>`,
    tabs: `
    <TabContainer>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab factor="active">Tab 3</Tab>
        <Tab>Tab 4</Tab>
        <Tab factor="disabled">Tab 5</Tab>
    </TabContainer>`,
    pills: `
    <!-- Row -->
    <PillContainer>
        <Pill>Pill 1</Pill>
        <Pill>Pill 2</Pill>
        <Pill factor="active">Pill 3</Pill>
        <Pill>Pill 4</Pill>
        <Pill factor="disabled">Pill 5</Pill>
    </PillContainer>

    <!-- Column -->
    <PillContainer factor="column">
        <Pill>Pill 1</Pill>
        <Pill>Pill 2</Pill>
        <Pill factor="active">Pill 3</Pill>
        <Pill>Pill 4</Pill>
        <Pill factor="disabled">Pill 5</Pill>
    </PillContainer>`,
    spinner: `
    <!-- Basic -->
    <Spinner></Spinner>

    <!-- Customized -->
    <Spinner factor="red" size="25px"></Spinner>`,
    dropdown: `
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
    </DropdownToggle>`,
    layouts: {
        login: `
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
    </Container>`,

        dash: `
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
        `
    }
};