
import './App.css';
import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap'

import SimpleMap from './components/SimpleMap.js'
import Header from './components/Header';
import Footer from './components/Footer';

import LocationSearchInput from './components/LocationSearchInput';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col>
              <h4>
                <Badge variant="info">Starting Place</Badge>{' '}
              </h4>
            </Col>
            <Col>
              <h4>

                <Badge variant="info">Destination Place</Badge>{' '}
              </h4>

            </Col>
          </Row>
          <Row>
            <Col>
              <LocationSearchInput />
            </Col>
            <Col>
              <LocationSearchInput />
            </Col>
          </Row>
          <SimpleMap />

        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
