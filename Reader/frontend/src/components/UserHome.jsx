import React, { useEffect, useState } from "react";
import {Link, Route, Router} from 'react-router-dom'
import Sidebar from "./Sidebar";
import Login from "./Login";
import Footer from "./Footer";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function UserHome({ userData }) {

  return (
        <div style={{backgroundColor:"white"}}>
              <Sidebar userData={userData} />

          {/*<Sidebar userData={userData}/> */}
          <Container fluid style={{ backgroundColor: "#F8F8F8"}}>
      <Row></Row>
      <Row>
        <Col sm={3}>
          
        </Col>
        <Col sm={8} style={{ marginTop: "0px", display:'inline-block'}}>
          <h1>Welcome, {userData.fname}!</h1>
          {/*<p>Email: {userData.email}</p>*/}
          
          <h3>Explore Word Details</h3>
          <Card style={{ width: '20rem', height:'12rem', margin:'1rem' }}>
            <Card.Body>
              <Card.Title>Find Meanings</Card.Title>
              <Card.Text>
                Discover the meanings of Arabic words.
              </Card.Text>
              <Link to="/meanings">
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem', height:'12rem', margin:'1rem'}}>
            <Card.Body>
              <Card.Title>Explore Roots</Card.Title>
              <Card.Text>
                Investigate the roots of Arabic words.
              </Card.Text>
              <Link to="/roots">
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem', height:'12rem', margin:'1rem' }}>
            <Card.Body>
              <Card.Title>POS Tags</Card.Title>
              <Card.Text>
                Understand the part-of-speech tags.
              </Card.Text>
              <Link to="/pos-tags">
              </Link>
            </Card.Body>
          </Card>
          <hr />
          <Col sm={9}>
          <h3>Create Resources</h3>
          <Card style={{ width: '20rem', height:'12rem', margin:'1rem' }}>
            <Card.Body>
              <Card.Title>Create Glossary</Card.Title>
              <Card.Text>
                Build your personal glossary.
              </Card.Text>
              <Link to="/create-glossary">
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem', height:'12rem', margin:'1rem' }}>
            <Card.Body>
              <Card.Title>Custom Dictionary</Card.Title>
              <Card.Text>
                Create a custom dictionary.
              </Card.Text>
              <Link to="/custom-dictionary">
              </Link>
            </Card.Body>
          </Card>
          </Col>
        </Col>
      </Row>
      <Footer />
    </Container>

       
        </div>
  );
}
