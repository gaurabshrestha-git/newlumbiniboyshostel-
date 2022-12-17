import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Iframe from "react-iframe";
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <header>
        {[false].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid className="m-3">
              <Navbar.Brand
                href="#home"
                style={{ color: "#00b4d8", fontWeight: "700" }}
              >
                New Lumbini Boys Hostel
              </Navbar.Brand>
            </Container>
          </Navbar>
        ))}
      </header>
      <section id="home" className="">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className=""
              style={{ height: "800px" }}
              src="./images/frontviewt.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Front View of Hostel</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/night.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Night View of Hostel</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/night2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Night View of Hostel</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="p-4">
          <h1 style={{ color: "#00b4d8", fontWeight: "700" }}>
            Welcome to New Lumbini Boys Hostel.
          </h1>
          <p>Nakhipot - 14, Lalitpur</p>
        </div>
      </section>
      <section id="about">
        <Container>
          <Row>
            <Col>
              <h3 style={{ color: "#00b4d8", fontWeight: "400" }}>
                {" "}
                About <u> US</u>
              </h3>
              <p>
                We are one of the best hostel in Lalitpur. We have a family-like
                environment and treat everyone as family. We provide essential
                facilities to live in a comfortable environment.
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src="./images/logo.png"
                style={{ height: "400px", width: "400px" }}
                alt="Hostel Frontend View"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-5" id="services">
        <Container>
          <h3 style={{ color: "#00b4d8", fontWeight: "400" }}>
            {" "}
            Our <u> Services</u>
          </h3>
          <Row>
            <Col className="p-2">
              <div className="p-2">Tasty & Hygenic Foods</div>
              <div>
                <img
                  style={{ height: "70px" }}
                  src="./images/food.png"
                  alt="food icon"
                />
              </div>
            </Col>
            <Col className="p-2">
              <div className="p-2">Rooms with Beds</div>
              <div>
                <img
                  style={{ height: "70px" }}
                  src="./images/bed.png"
                  alt="bed icon"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="p-2">
              <div className="p-2">Peaceful Environment</div>
              <div>
                <img
                  style={{ height: "70px" }}
                  src="./images/peace.png"
                  alt="peaceful icon"
                />
              </div>
            </Col>
            <Col className="p-2">
              <div className="p-2">Fast Internet Services</div>
              <div>
                <img
                  style={{ height: "70px" }}
                  src="./images/internet.png"
                  alt="internet icon"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="p-2">
              <div className="p-2">Hot Water</div>
              <div>
                <img
                  style={{ height: "70px" }}
                  src="./images/hotwater.png"
                  alt="hotwater icon"
                />
              </div>
            </Col>
            <Col className="p-2">
              <div className="p-2">Laundy Services</div>
              <div>
                <img
                  style={{ height: "70px" }}
                  src="./images/laundry.png"
                  alt="laundry icon"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="location" className="mt-5">
        <Container>
          <h3 style={{ color: "#00b4d8", fontWeight: "400" }}>
            {" "}
            Our <u> Location</u>
            <div
              className="p-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767.045578304123!2d85.31843237236981!3d27.65265127308877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1729394214cd%3A0xc02c6cf3d2ae5581!2sNew%20Lumbini%20Boys%20Hostel!5e0!3m2!1sen!2snp!4v1670305427786!5m2!1sen!2snp"
                width="640px"
                height="320px"
                id=""
                className=""
                display="block"
                position="relative"
              />
            </div>
          </h3>
        </Container>
      </section>
      <section
        id="contact"
        className="mt-5 p-3"
        style={{ backgroundColor: "#00b4d8", color: "white", fontSize: "15px" }}
      >
        <Container>
          <Row>
            <Col className="" style={{ textAlign: "" }}>
              <h4>
                {" "}
                <u>Contact US</u>
              </h4>
              <p>Nakhipot-14, Lalitpur</p>
              <p>9813842804</p>
            </Col>

            <Col className="" style={{ textAlign: "" }}>
              <h4>
                {" "}
                <u>Time Table</u>
              </h4>
              <div>
                <p>Sun: 5:00 AM - 10 PM</p>
                <p>Mon: 5:00 AM - 10 PM</p>
                <p>Tue: 5:00 AM - 10 PM</p>
                <p>Wed: 5:00 AM - 10 PM</p>
                <p>Thu: 5:00 AM - 10 PM</p>
                <p>Fri: 5:00 AM - 10 PM</p>
                <p>Sat: 5:00 AM - 10 PM</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="" id="footer">
        <div style={{ fontWeight: "50", fontSize: "12px", padding: "10px" }}>
          New Lumbini Boys Hostel © 2022. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default Home;
