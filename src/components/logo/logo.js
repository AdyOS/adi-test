import React from 'react';
import { Col, Navbar } from 'react-bootstrap';
import css from './logo.module.scss';

export function Logo({ image }) {
  return (
    <Col className={css.logo}>
      <Navbar.Brand href="#home">
        <img src={image} alt={'Logo'} />
      </Navbar.Brand>
    </Col>
  );
}
