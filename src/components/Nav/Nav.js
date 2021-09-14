import React from 'react';
import { Col } from 'react-bootstrap';
import css from './Nav.module.scss';

export function Nav({ links = [], md }) {
  return links.map((link) => (
    <Col md={md}>
      <a className={css.navLink} href={link.url}>
        {link.text}
      </a>
    </Col>
  ));
}
