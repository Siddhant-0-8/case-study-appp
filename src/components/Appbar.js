import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.jpg";

function Appbars() {
  const [searchData, setSearchData] = useState("");

  const storeSeardcchData = (e) => {
    setSearchData(e.target.value);
  };

  const checkSearchBar = () => {
    if (searchData === "") {
      alert(" search Bar is Empty");
    }
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        id="navbars"
      >
        <Container fluid>
          <Navbar.Brand className="logo" style={{ padding: "5px" }}>
            <Link to="/" className="px-4">
              <img src={logo} id="image" alt="" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="" style={{}}>
              <Nav className="me-auto">
                <Row className="g-3">
                  <Col md={2}>
                    <div className="tech">
                      <Form.Select
                        aria-label="Default select example"
                        variant=""
                        id="dropdown-basic"
                        className="technol"
                      >
                        <option>Technology</option>
                        <option value="JAVA">Java</option>
                        <option value="PYTHON">React JS</option>
                        <option value="ANGULAR JS">Angular</option>
                        <option value="JAVASCRIPT">Vue JS</option>
                        <option value="JAVASCRIPT">JavaScript</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="Linktech">
                      <Form.Select
                        aria-label="Default select example"
                        variant=""
                        id="dropdown-basic"
                        className="linksize"
                      >
                        <option>Level</option>
                        <option value="JAVA">Easy</option>
                        <option value="INTERMEDIATE">Intermediate</option>
                        <option value="HARD">Expert</option>
                      </Form.Select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <Form.Control
                      type="text"
                      name="date-of-birth"
                      placeholder="From Date"
                      onFocus={(e) => {
                        e.target.type = "date";
                      }}
                    />

                    {/* onFocus={(e) => e.target.type = "date"} */}
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      type="text"
                      name="date-of-birth"
                      placeholder="To Date"
                      onFocus={(e) => {
                        e.target.type = "date";
                      }}
                    />
                  </Col>

                  <Col md={3}>
                    <div>
                      <InputGroup>
                        <FormControl
                          type="text"
                          placeholder="Search questions"
                          aria-label="Search"
                          className="search "
                          onChange={(e) => storeSeardcchData(e)}
                        />
                        <i
                          className="fas fa-search"
                          id="srchicon"
                          style={{
                            transform: "translateX(-30px) translateY(12px)",
                          }}
                        ></i>
                      </InputGroup>
                    </div>
                  </Col>

                  <Col md={1}>
                    <div>
                      <Button
                        variant="warning"
                        style={{ color: "white" }}
                        className="searchbutton px-2"
                        onClick={() => checkSearchBar()}
                      >
                        <Link
                          to="/SearchView"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Search
                        </Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbars;

// import React, { useState } from 'react'
// import logo from './logo.jpg'
// // import SearchIcon from '@mui/icons-material/Search';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import Button from '@restart/ui/esm/Button';
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.min.css'
// import './Appbar.css'
// // import Date1 from '@mui/icons-material'

// function Appbar() {

//     const [selectedDate, setselectedDate] = useState()
//     const [selectDate, setselectDate] = useState()

//     return (

//         <div>

//             <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
//                 <Container style={{ margin: "0px" }}>
//                     <Navbar.Brand  > <Link to="/" className="px-4"><img src={logo} id="image" alt="" /></Link></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav" >
//                         <Nav className="me-auto">
//                             {/* <Nav.Link href="#features">Features</Nav.Link> */}
//                             <DropdownButton id="dropdown-basic-button" title="Technology" className="px-2" >
//                                 <Dropdown.Item href="#/action-1">React JS</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-2">Vue JS</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-3">Angular</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-3">Java</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-3"> Mongo DB</Dropdown.Item>
//                             </DropdownButton>
//                             {/* <Form.Select aria-label="Default select example">
//                                 <option>Open this select menu</option>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                             </Form.Select> */}
//                             {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
//                             <DropdownButton id="dropdown-basic-button" title="Level"  >
//                                 <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
//                             </DropdownButton>
//                             {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                             </NavDropdown> */}
//                             <DatePicker id='fromdate'
//                                 className="px-2"
//                                 placeholderText='From Date'
//                                 selected={selectedDate} onChange={date => { setselectedDate(date) }}
//                                 dateFormat='dd/MM/yyyy'
//                                 maxDate={new Date()}
//                                 showYearDropdown
//                                 scrollableMonthYearDropdown />
//                             <DatePicker id='todate'
//                                 placeholderText='To Date'
//                                 selected={selectDate} onChange={date => { setselectDate(date) }}
//                                 dateFormat='dd/MM/yyyy'
//                                 maxDate={new Date()}
//                                 showYearDropdown
//                                 showMonthDropdown
//                                 scrollableMonthYearDropdown />
//                         </Nav>
//                         <Nav>
//                             {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
//                             <Form className="d-flex">
//                                 <FormControl
//                                     type="search"
//                                     placeholder="Search questions"
//                                     className="me-2"
//                                     aria-label="Search"
//                                 />
//                                 <i className="fas fa-search" id="srchicon"></i>
//                             </Form>
//                             {/* <Nav.Link eventKey={2} to="/SearchView" >

//                             </Nav.Link> */}
//                             {/* <Button href="/SearchView" variant="warning" size="lg" >
//                                 Search
//                             </Button> */}
//                             <Button variant="outline-success" className="search"><Link to="/SearchView" style={{ textDecoration: "none", color: "white" }}>Search</Link></Button>
//                             {/* <Button variant="warning" size="lg"><Link to="/SearchView" style={{ textDecoration: "none" , }}>Search</Link></Button> */}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//         </div>

//         // <div>
//         //       <Navbar bg="" expand="lg">
//         //         <Container fluid>
//         //             <img src={logo} id="image" alt="" />
//         //             {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
//         //             <Navbar.Toggle aria-controls="navbarScroll" />
//         //             <Navbar.Collapse id="navbarScroll">
//         //                 <Nav
//         //                     className="me-auto my-2 my-lg-0"
//         //                     style={{ maxHeight: '100px' }}
//         //                     navbarScroll
//         //                 >
//         //                     {/* <Nav.Link href="#action1">Home</Nav.Link>
//         //                     <Nav.Link href="#action2">Link</Nav.Link> */}

//         //                     <div id="droptech">
//         //                         <DropdownButton id="dropdown-basic-button" title="Technology">
//         //                             <Dropdown.Item href="#/action-1">React JS</Dropdown.Item>
//         //                             <Dropdown.Item href="#/action-2">Vue JS</Dropdown.Item>
//         //                             <Dropdown.Item href="#/action-3">Angular</Dropdown.Item>
//         //                             <Dropdown.Item href="#/action-3">Java</Dropdown.Item>
//         //                             <Dropdown.Item href="#/action-3"> Mongo DB</Dropdown.Item>
//         //                         </DropdownButton>
//         //                     </div>

//         //                     <div id="droplevel">

//         //                         <DropdownButton id="dropdown-basic-button" title="Level">
//         //                             <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
//         //                             <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
//         //                             <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
//         //                         </DropdownButton>
//         //                     </div>

//         //                     <div>
//         //                         <DatePicker id='fromdate'
//         //                             placeholderText='From Date'
//         //                             selected={selectedDate} onChange={date => { setselectedDate(date) }}
//         //                             dateFormat='dd/MM/yyyy'
//         //                             maxDate={new Date()}
//         //                             showYearDropdown
//         //                             scrollableMonthYearDropdown />
//         //                     </div>
//         //                     {/* <i class="far fa-calendar-minus icon1"></i> */}

//         //                     <div>
//         //                         <DatePicker id='todate'
//         //                             placeholderText='To Date'
//         //                             selected={selectDate} onChange={date => { setselectDate(date) }}
//         //                             dateFormat='dd/MM/yyyy'
//         //                             maxDate={new Date()}
//         //                             showYearDropdown
//         //                             showMonthDropdown
//         //                             scrollableMonthYearDropdown />

//         //                     </div>
//         //                     {/* <i class="far fa-calendar-minus icon2"></i> */}

//         //                 </Nav>
//         //                 <Form className="d-flex">
//         //                     <FormControl
//         //                         type="search"
//         //                         placeholder="Search questions"
//         //                         className="me-2"
//         //                         aria-label="Search"
//         //                     />
//         //                     <i className="fas fa-search" id="srchicon"></i>
//         //                 </Form>

//         //                 <Button variant="primary" size="sm" id="button">
//         //                     Search
//         //                 </Button>{' '}

//         //             </Navbar.Collapse>
//         //         </Container>
//         //     </Navbar>

//         // </div >

//     )
// }

// export default Appbar
