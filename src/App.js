import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Table } from 'react-bootstrap';
import SlidePane from './components/slide-pane/SlidePane';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/header/header';

const sectionLinks = [
  { url: '/section1', text: 'Section 1' },
  { url: '/section2', text: 'Section 2' },
  { url: '/section3', text: 'Section 3' },
  { url: '/section4', text: 'Section 4' },
];

const generateLeftBar = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

const generateRightBar = () => {
  return (
    <div>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </div>
  );
};

function App() {
  return (
    <>
      <Navbar bg="light">
        <Container className={'d-flex flex-column'}>
          <Header />
        </Container>
      </Navbar>
      <br />
      <Container className={'mb-3'}>
        <Row className={'justify-content-md-center'}>
          <Nav links={sectionLinks} md={'auto'} />
        </Row>
      </Container>
      <Container>
        <SlidePane
          leftSidebarLabel={'Collapsed view'}
          rightSidebarLabel={'Full screen view'}
          leftSidebarContent={generateLeftBar()}
          rightSidebarContent={generateRightBar()}
        />
      </Container>
    </>
  );
}

export default App;
