import React from 'react';
import logo from '../../logo.svg';
import { Col, Row } from 'react-bootstrap';
import cx from 'classnames';
import { Nav } from '../Nav/Nav';
import { Logo } from '../logo/logo';
import css from './header.module.scss';
import { SearchInput } from '../search-input/SearchInput';

const navLinks = [
  { url: '/topic1', text: 'Topic 1' },
  { url: '/topic2', text: 'Topic 2' },
  { url: '/topic3', text: 'Topic 3' },
  { url: '/topic4', text: 'Topic 4' },
];

export function Header() {
  const onSearch = () => {
    console.log('search');
  };

  const onChangeSearch = (value) => {
    console.log('value', value);
  };
  return (
    <>
      <Row className={cx('d-flex justify-content-between', css.header)}>
        <Col>
          <Logo image={logo} />
        </Col>
        <Col className={css.navLinks}>
          <Nav links={navLinks} />
        </Col>
      </Row>
      <Row className={css.searchBar}>
        <Col className={css.searchCol}>
          <SearchInput onSearch={onSearch} onChangeSearch={onChangeSearch} />
        </Col>
      </Row>
    </>
  );
}
